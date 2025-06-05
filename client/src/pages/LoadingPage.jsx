// src/components/LoadingPage.jsx
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function LoadingPage() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
