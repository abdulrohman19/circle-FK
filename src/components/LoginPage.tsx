
import { Box, Button, FormControl, FormLabel, Input, Link, Stack, Text, Heading } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Skema validasi menggunakan Zod
const schema = z.object({
  email: z.string().min(1, 'Email/Username is required').email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <Box
      bg="black" // Background hitam di seluruh halaman
      color="white"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center" // Form berada di tengah
      px={4}
    >
      <Box
        bg="gray.900"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxWidth="400px"
        w="full"
      >
        <Heading as="h1" size="xl" color="green.400" mb={6} textAlign="center">
          circle
        </Heading>
        <Heading as="h2" size="md" mb={6} textAlign="center">
          Login to Circle
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={errors.email}>
              <FormLabel>Email/Username</FormLabel>
              <Input
                type="email"
                bg="gray.800"
                borderColor="gray.700"
                {...register('email')}
              />
              {errors.email && (
                <Text color="red.500" fontSize="sm">
                  {errors.email.message}
                </Text>
              )}
            </FormControl>
            <FormControl id="password" isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                bg="gray.800"
                borderColor="gray.700"
                {...register('password')}
              />
              {errors.password && (
                <Text color="red.500" fontSize="sm">
                  {errors.password.message}
                </Text>
              )}
            </FormControl>
            <Link href="#" color="gray.500" fontSize="sm" textAlign="right">
              Forgot password?
            </Link>
            <Button colorScheme="green" size="lg" w="full" type="submit">
              Login
            </Button>
          </Stack>
        </form>
        <Text mt={6} textAlign="center">
          Don't have an account yet?{" "}
          <Link href="#" color="green.400">
            Create account
          </Link>
        </Text>
      </Box>
    </Box>
  );
}

export default LoginPage;
