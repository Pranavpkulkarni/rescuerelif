import React from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "./ReadBAr";

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ReadingView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const card: CardData | undefined = location.state?.card;

  if (!card) {
    return (
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="h6">No article found</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
          sx={{ mt: 2 }}
        >
          Back to Home
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "90%",
          margin: "0 auto",
          py: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <IconButton
            onClick={() => navigate(-1)} // Go back to previous page
            sx={{ mr: 1 }}
            aria-label="back"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Back</Typography>
        </Box>
        <Box
          component="img"
          src={card.image}
          alt={`Image for ${card.title}`}
          sx={{
            width: "100%",
            maxHeight: { xs: 200, sm: 300, md: 400 }, // Responsive image height
            objectFit: "cover",
            borderRadius: 1,
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive title size
            mb: 2,
          }}
        >
          {card.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "justify",
            mb: 3,
            fontSize: { xs: "0.9rem", sm: "1rem" }, // Responsive text size
          }}
        >
          {card.description}
        </Typography>
        <Button
          variant="contained"
          color="error"
          sx={{
            alignSelf: { xs: "stretch", sm: "flex-start" }, // Full width on mobile
            fontSize: { xs: "0.9rem", sm: "1rem" },
            py: 1,
          }}
        >
          Donate
        </Button>
      </Box>
    </>
  );
};

export default ReadingView;
