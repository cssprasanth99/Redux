import React from "react";
import { Box, Image, Text, Center } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  ButtonGroup,
  Button,
  Divider,
} from "@chakra-ui/react";

const ImageCard = ({ title, price }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="gibbresh.png"
          fallbackSrc="https://via.placeholder.com/300"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text color="blue.600" fontSize="2xl">
            {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ImageCard;
