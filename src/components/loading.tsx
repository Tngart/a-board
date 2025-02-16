import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <Box className="absolute top-1/2 right-1/2">
      <CircularProgress color="inherit" aria-label="loading" />
    </Box>
  );
};

export default Loading;
