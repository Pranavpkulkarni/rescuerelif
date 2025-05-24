import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const CardRow: React.FC = () => {
  return (
    <Box
      sx={{
        width: '90%',       // container width 90%
        margin: '0 auto',   // center horizontally
        display: 'flex',
        gap: 2, 
        pb:3,            // spacing between cards
        justifyContent: 'center',
        flexWrap: 'wrap',   // wrap on small screens
      }}
    >
      {[1, 2].map((item) => (
        <Card key={item} sx={{ maxWidth: 592, flex: '1 1 45%' }}>
          <CardMedia
            component="img"
            height="180"
            image={`https://dummyimage.com/600x400/000/fff`}
            alt={`Card image ${item}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              News Title {item}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Brief description about this news article goes here. Customize as needed.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'space-between' }}>
            <Button size="small" color="primary" variant="outlined">
              Read More
            </Button>
            <Button size="small" color="error" variant="contained">
              Donate
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default CardRow;
