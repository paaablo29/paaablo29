import React from 'react';
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Button, Icon } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { SearchIcon } from '../lib/icons/SearchButton';
import { FaBookReader, FaShoppingCart } from "react-icons/fa";


const NavLink: React.FC<{ to: string }> = ({ to, children }) => (
  <Button variant="link" colorScheme="primary.900" as={Link} to={to} mr={4}>
    {children}
  </Button>
);
const Header: React.FC = () => {
  return (
    <Box bg="primary.100" color="primary.900" py='8'  borderRadius='lg' position='relative' >
      <Flex maxW="container.lg" mx="auto" justifyContent="space-between" alignItems="center" >
        {/* Logo de la tienda */}
        <Flex alignItems="center" position='absolute' left='5'><FaBookReader size="40px"/><Heading as="h1" size="lg" ml="4">
          BookStore
        </Heading></Flex>
        
        {/* Navegación */}
        <Flex  alignItems="center" position='absolute'  right='5'>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/cart">Añadir Libro</NavLink>
          <NavLink to="/profile">Carrito </NavLink>
        {/* Input de búsqueda */}
        <InputGroup size="md" w="200px"  ml={4}>
          <InputLeftElement pointerEvents="none"><SearchIcon /></InputLeftElement>/>
          <Input type="text" placeholder="Buscar libros"  borderColor="primary.900" mr="4"/>
        </InputGroup>
        </Flex>
      </Flex>
    </Box>
  );
};


export default Header;