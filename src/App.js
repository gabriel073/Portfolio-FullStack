import { Flex, Heading, IconButton, Link, Spacer, VStack, useColorMode, Stack } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';
import MenuHambur from './components/MenuHambur';
import Header from "./components/Header";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contacto from "./components/Contacto";



function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <VStack p={5}>
        <Flex w="100%" alignItems='center' position='fixed' backgroundColor='#2d363f' opacity='.8' backdropFilter='blur(10px)' zIndex='1'>
          <Stack display={{ base: 'block', md: 'none' }}>
            <MenuHambur />
          </Stack>

          <Heading
            ml="8"
            size="md"
            alignSelf='center'
            fontWeight='semibold'
            color="cyan.400"> Gabriel Marzioli </Heading>
          <Flex justifyContent='center' w='100%' display={{ base: 'none', md: 'flex' }} >
            <Link p={6} _hover={{ textDecoration: 'none', color: 'blue' }} href='#skills'>Skills</Link>
            <Link p={6} _hover={{ textDecoration: 'none', color: 'blue' }} href='#proyectos'>Portafolio</Link>
            <Link p={6} _hover={{ textDecoration: 'none', color: 'blue' }} href='#contacto'>Contacto</Link>

          </Flex>
          <Spacer></Spacer>
          <IconButton icon={<FaLinkedin />} isRound='true' onClick={toggleColorMode}></IconButton>
          <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>
          <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
        <Header></Header>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Contacto></Contacto>
        {/*   <Social></Social>
          <Profile></Profile> */}
      </VStack>
    </>
  );
}

export default App;
