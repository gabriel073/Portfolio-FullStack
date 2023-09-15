import { Box, Button, Circle, Flex, Image, Stack, Text, useColorMode, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import React from 'react'
import { motion } from 'framer-motion';
function Header() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const circleColor = useColorModeValue("#1B2230", "#2A3460")

    return (
        <Stack marginTop='100px' >
            <Circle
                position="absolute"
                // bg="blue.100"
                bg={circleColor}
                opacity="0.1"
                w="300px"
                h="300px"
                alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold" fontFamily={'VT323, sans-serif'}>
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
                        transition={{ duration: 0.7 }}
                    >

                        <Text
                            fontSize="7xl"
                            fontWeight="bold"
                            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                            bgClip='text' mr='30px'
                            fontFamily={'VT323, sans-serif'}
                        >Gabriel Marzioli </Text>
                    </motion.div>
                    <Text color={isDark ? "gray.200" : "gray.500"} fontFamily={'VT323, sans-serif'} fontSize={30}>Desarrollador Fullstack 🗣</Text>
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://drive.google.com/file/d/18JAc_swgt99Jz9bbr2ohflxFsZ0O49EK/view?usp=drive_link")
                    } fontFamily={'VT323, sans-serif'}>descargar CV</Button>

                </Box>

                <Image alignSelf="center"
                    mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"}
                    borderRadius='full'
                    backgroundColor="transparent"
                    filter='sepia(80%)'
                    boxShadow="lg"
                    boxSize="300px"
                    src='../../assets/foto_perfil.jpg' alt='photoPerfil'
                />

            </Flex>

        </Stack>
    )
}

export default Header;