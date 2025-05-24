import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const ContentSection: React.FC = () => {
  return (
      <Container
      
      sx={{
        width: "90%",
        mt: 4,
        mb: 6,
        backgroundColor: "#f5f5f5",
        padding: 4,
        borderRadius: 2,
      }}
    >
      {/* Information Text */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: 900, color: "#1976d2", fontSize: "40px" }}
      >
        Welcome to Rescue & Relief
        <br /> Your trusted platform for community aid and support.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Our mission is to connect individuals and organizations to provide
        assistance during emergencies and natural disasters. Whether you need
        help or want to offer support, we are here for you.
      </Typography>

      {/* Centered Oval Button */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "50px", 
            px: 5, 
            py: 1.5, 
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
          }}
        >
          Share Your Article
        </Button>
      </Box>
    </Container>
  );
};

export default ContentSection;
