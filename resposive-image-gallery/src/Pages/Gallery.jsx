import React from "react";
import { Grid } from "@chakra-ui/react";
import ImageCard from "./ImageCard";

const Gallery = () => {
  // Dummy data for the gallery
  const cards = [
    { title: "Random Title 1", price: "$10" },
    { title: "Random Title 2", price: "$20" },
    { title: "Random Title 3", price: "$20" },
    { title: "Random Title 4", price: "$20" },
    { title: "Random Title 5", price: "$20" },
    { title: "Random Title 6", price: "$20" },
    { title: "Random Title 7", price: "$20" },
    { title: "Random Title 8", price: "$20" },
  ];

  return (
    <Grid
      templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]}
      gap={6}
    >
      {cards.map((card, index) => (
        <ImageCard key={index} title={card.title} price={card.price} />
      ))}
    </Grid>
  );
};

export default Gallery;
