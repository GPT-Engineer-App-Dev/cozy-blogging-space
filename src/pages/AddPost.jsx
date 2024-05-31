import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { Container, Heading, Input, Textarea, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addPost({ title, content });
      navigate("/");
    }
  };

  return (
    <Container centerContent maxW="container.md" mt={10} bg={bg} color={color}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="xl">Add New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isRequired
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          isRequired
        />
        <Button type="submit" colorScheme="teal" size="md">Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;