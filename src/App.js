import { Flex, Heading, IconButton, VStack, useColorMode, Stack, useColorModeValue, Image} from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';
import MenuHambur from './components/MenuHambur';
import Header from "./components/Header";
import Skills from "./components/Skills";
import Contacto from "./components/Contacto";
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css'
import Projects from "./components/Projects";
import Footer from "./components/Footer";



function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const linkColor = useColorModeValue("black", undefined)

  let scrollToTop = () => {
    scroll.scrollToTop();
  }


  return (
    <>
      <VStack p={5} maxWidth="1200px"    height="100%" m="auto" >
        <Stack alignItems='center' position="fixed"  opacity='.8' backdropFilter='blur(10px)' w="100%" display="flex" flexDirection="row" justifyContent="space-around" zIndex="10">
          <Stack display={{ base: 'block', md: 'none' }}>
            <MenuHambur />
          </Stack>

          <Heading
            display='flex'
            gap={2}
            className="link"
            onClick={scrollToTop}
                        size="md"
            alignItems='center'
            fontWeight='normal'
            color="cyan.400">  <Image
              src="../gamer.png"
              alt="logo"
              w="3rem"
              fontFamily={'VT323, sans-serif'}
              fontSize={50} /> GM
                  </Heading>
          <Flex
            justifyContent='center'
            gap={25}
            
            color={linkColor}
            display={{ base: 'none', md: 'flex' }}
            fontFamily={'VT323, sans-serif'}
            fontSize={30}
          >
            <Link
              className="link"
              p={6}
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
              activeClass="active"
              to='proyectos'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Proyectos</Link>
            <Link
              className="link"
              p={6}
              activeClass="active"
              to='contacto'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Contacto</Link>

          </Flex>
        <Stack flexDirection="row">
          <IconButton icon={<FaLinkedin />} onClick={() => window.open("https://www.linkedin.com/in/gabriel-marzioli/")} isRound='true'> </IconButton>
          <IconButton  icon={<FaGithub />} onClick={() => window.open("https://github.com/gabriel073")} isRound='true'></IconButton>
          <IconButton  icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
          </Stack>
        </Stack>
        <Header></Header>
        <Skills></Skills>
        <Projects></Projects>
        <Contacto></Contacto>
        <Footer></Footer>
          </VStack>
    </>
  );
}

export default App;
