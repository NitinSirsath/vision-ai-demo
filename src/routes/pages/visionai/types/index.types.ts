export type OcrWord = {
  boundingBox: string;
  text: string;
};

export type OcrLine = {
  boundingBox: string;
  words: OcrWord[];
};

export type OcrRegion = {
  boundingBox: string;
  lines: OcrLine[];
};

export type OcrResult = {
  language: string;
  textAngle: number;
  orientation: string;
  regions: OcrRegion[];
};

export type OcrApiResponse = {
  result: OcrResult;
};
