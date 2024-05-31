import { Container, Text, VStack, Heading, Box, Image, Link, Button } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = ({ posts }) => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bg} color={color}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Dive into my thoughts, experiences, and stories. Explore various topics ranging from technology to personal growth.
        </Text>
        <Button as={RouterLink} to="/add-post" colorScheme="teal" size="md">Add New Post</Button>
        {posts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%" bg={bg} color={color}>
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;