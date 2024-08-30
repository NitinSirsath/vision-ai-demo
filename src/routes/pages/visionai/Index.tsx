import React, { useState } from "react";
import { OcrApiResponse, OcrResult } from "./types/index.types";
import {
  Button,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Alert,
  LinearProgress,
} from "@mui/material";

type UploadError = {
  message: string;
  response?: Response;
};

const VisionAi = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [ocrResult, setOcrResult] = useState<OcrResult | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setError(null);
      setOcrResult(null);
      setFile(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const uploadImage = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setError(null); // Reset error before starting a new upload

    try {
      const response = await fetch(
        "https://computer-vision-2024.azurewebsites.net/ocr",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data: OcrApiResponse = await response.json();
        setOcrResult(data.result);
      } else {
        const errorText = await response.text();
        const errorObj: UploadError = {
          message: `Failed to upload image: ${errorText}`,
          response,
        };
        setError(errorObj.message);
      }
    } catch (error: unknown) {
      const errorObj: UploadError = {
        message: error instanceof Error ? error.message : "Unknown error",
      };
      setError("Error uploading image: " + errorObj.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <input type="file" onChange={handleFileChange} />
        <Button
          variant="contained"
          onClick={uploadImage}
          disabled={!file || loading}
        >
          Upload Image
        </Button>
      </Box>

      {error && (
        <Alert
          severity="error"
          sx={{ marginBottom: 2, width: "100%", maxWidth: "800px" }}
        >
          {error}
        </Alert>
      )}

      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          maxWidth: "800px",
          marginTop: 3,
        }}
      >
        {imagePreview && (
          <Box sx={{ width: "50%" }}>
            <img
              src={imagePreview}
              alt="Uploaded"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Box>
        )}

        <Box sx={{ width: "70%" }}>
          {loading && <LinearProgress />}
          {ocrResult && (
            <Box sx={{ width: "100%" }}>
              {ocrResult.regions.map((region, regionIndex) => (
                <Paper key={regionIndex} sx={{ padding: 2, marginBottom: 2 }}>
                  {region.lines.map((line, lineIndex) => (
                    <Typography
                      key={lineIndex}
                      variant="body1"
                      sx={{ marginBottom: 1 }}
                    >
                      {line.words.map((word, wordIndex) => (
                        <Box
                          key={wordIndex}
                          component="span"
                          sx={{ marginRight: 1, fontWeight: "bold" }}
                        >
                          {word.text}
                        </Box>
                      ))}
                    </Typography>
                  ))}
                </Paper>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default VisionAi;
