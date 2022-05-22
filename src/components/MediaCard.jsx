import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({item}) {
  console.log(item)
  return (
    <Card sx={{ maxWidth: 345,margin:"auto" }}>
      <CardMedia
        component="img"
        height="300"
        image={item.profile_picture}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Öğ. {item.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
