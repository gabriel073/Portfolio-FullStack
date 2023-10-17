import { Box, Flex, Image, Stack, Text, useColorMode, useMediaQuery } from '@chakra-ui/react';
import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


function Header() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack marginTop='100px' >
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} textAlign="center" align='flex-start' display={isNotSmallerScreen ? "" : "none"}>
                    <Text fontSize="5xl" fontWeight="medium" fontFamily={'VT323, sans-serif'}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0, x: -500 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Hola👋, soy
                        </motion.div>
                    </Text>
                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: 500 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.7 }}>
                        <Text
                            fontSize="7xl"
                            fontWeight="bold"
                            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                            bgClip='text' mr='30px'
                            fontFamily={'VT323, sans-serif'}
                        >Gabriel Marzioli </Text>
                    </motion.div>
                    <Text color={isDark ? "gray.200" : "gray.500"} fontFamily={'VT323, sans-serif'} fontSize={30}>Desarrollador Fullstack 🗣</Text>
                    <Link href="https://drive.google.com/file/d/1basw6o9-J_Bc49GyqVZ8MVoyTlm1cXBS/view?usp=drive_link" fontFamily={'VT323, sans-serif'} isExternal>descargar CV</Link>

                </Box>

                <Image alignSelf="center"
                    mt={isNotSmallerScreen ? "0" : "-400"}
                    mr={isNotSmallerScreen ? "5" : "-80"}
                    mb={isNotSmallerScreen ? "0" : "30"}
                    borderRadius='2xl'
                    boxSize="300px"
                    objectFit="cover"
                    objectPosition="left"
                    boxShadow="10px 10px 36px 7px rgba(0,0,0,0.75)"
                    src='../../assets/foto_perfil.jpg' alt='photoPerfil'
                />
            </Flex>
        </Stack>
    )
}
export default Header;