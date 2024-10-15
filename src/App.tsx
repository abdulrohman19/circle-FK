// src/App.jsx
import { ChakraProvider } from '@chakra-ui/react';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <ChakraProvider>
      <LoginPage />
    </ChakraProvider>
  );
}

export default App;
