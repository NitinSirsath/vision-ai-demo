import { Route, Routes } from "react-router-dom";
// import HomePage from './pages/home/Index';
import { Paper } from "@mui/material";
import AppLayout from "../layout/AppLayout";
import VisionAi from "./pages/visionai/Index";

const AppRouter = () => {
  return (
    <Paper>
      <AppLayout>
        <Routes>
          <Route path="/" index element={<VisionAi />} />
        </Routes>
      </AppLayout>
    </Paper>
  );
};

export default AppRouter;
