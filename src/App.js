import { Flex, Heading, IconButton, Spacer, VStack, useColorMode, Stack, useColorModeValue, Image } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';
import MenuHambur from './components/MenuHambur';
import Header from "./components/Header";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contacto from "./components/Contacto";
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css'

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const linkColor = useColorModeValue("white", undefined)

  let scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <VStack p={5}>
        <Flex w="100%" alignItems='center' position='fixed' backgroundColor='#2d363f' opacity='.8' backdropFilter='blur(10px)' zIndex='1'>
          <Stack display={{ base: 'block', md: 'none' }}>
            <MenuHambur />
          </Stack>

          <Heading
            display='flex'
            gap={2}
            className="link"
            onClick={scrollToTop}
            ml="8"
            size="md"
            alignItems='center'
            fontWeight='semibold'
            color="cyan.400">  <Image
              src="../gamer.png"
              alt="logo"
              w="3rem"
              fontFamily={'VT323, sans-serif'}
              fontSize={50} /> GM</Heading>
          <Flex
            justifyContent='center'
            gap={20}
            w='100%'
            color={linkColor}
            display={{ base: 'none', md: 'flex' }}
            fontFamily={'VT323, sans-serif'}
            fontSize={30}
          >
            <Link
              className="link"
              p={6}
              // _hover={{ textDecoration: 'none', color: 'blue', cursor: 'pointer' }}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to='skills'
            >Skills</Link>
            <Link
              className="link"
              p={6}
              // _hover={{ textDecoration: 'none', color: 'blue' }}
              activeClass="active"
              to='proyectos'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Portafolio</Link>
            <Link
              className="link"
              p={6}
              // _hover={{ textDecoration: 'none', color: 'blue' }}
              activeClass="active"
              to='contacto'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Contacto</Link>

          </Flex>
          <Spacer></Spacer>
          <IconButton icon={<FaLinkedin />} isRound='true'></IconButton>
          <IconButton ml={2} icon={<FaGithub />} isRound='true'></IconButton>
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
