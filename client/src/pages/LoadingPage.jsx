// src/components/LoadingPage.jsx
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";

export default function LoadingPage() {
  const [progress, setProgress] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 300);

    // Nach 3 Sekunden zur Thank-You-Seite weiterleiten
    const redirectTimer = setTimeout(() => {
      navigate("/thank-you", { state: location.state });
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate, location.state]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fafafa",
      }}
    >
      <CircularProgress variant="determinate" value={progress} size={80} />
      <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
        Loading, please wait...
      </Typography>
    </Box>
  );
}
