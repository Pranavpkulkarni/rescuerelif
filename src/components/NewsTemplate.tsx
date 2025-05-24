import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const CardRow: React.FC = () => {
  const cards: CardData[] = [
    {
      id: 1,
      title: 'News Title 1',
      description: 'Brief description about this news article goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://dummyimage.com/600x400/000/fff',
    },
    {
      id: 2,
      title: 'News Title 2',
      description: 'Another brief description for the second news article. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://dummyimage.com/600x400/000/fff',
    },
  ];

  return (
    <Box
      sx={{
        width: '90%', // container width 90%
        margin: '0 auto', // center horizontally
        display: 'flex',
        gap: 2, // spacing between cards
        pb: 3,
        justifyContent: 'center',
        flexWrap: 'wrap', // wrap on all screens
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          sx={{
            maxWidth: 592,
            flex: { xs: '1 1 100%', sm: '1 1 45%' }, // 100% width on mobile, 45% on larger screens
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={card.image}
            alt={`Card image ${card.title}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description.slice(0, 100)}...
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'space-between' }}>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              component={RouterLink}
              to={`/reading/${card.id}`}
              state={{ card }} // Pass card data via state
            >
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