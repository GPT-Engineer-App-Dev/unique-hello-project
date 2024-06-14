import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Hello World</Heading>
        <Text fontSize="lg">Welcome to your first Chakra UI application!</Text>
      </VStack>
    </Container>
  );
};

export default Index;