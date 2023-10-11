import { Button, Card, CardBody, CardFooter, Grid, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion';

function Projects() {
    return (
        <>
          
                <motion.div           
                    initial={{ opacity: 0, scale: 0, x: -500 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <Text
                   mt="7rem"
                   id="proyectos"
                        textAlign='center'
                        fontSize='4rem'
                        fontFamily={'VT323, sans-serif'}>Proyectos</Text>
                </motion.div>
                <Grid   templateColumns="repeat(3, 1fr)" gap="10"   >
                <Stack
              
                    // m='auto'
                    // w='400px'
                    height="100%"
                    w="100%"
                    direction={{ base: 'row', sm: 'column' }}
                >
                    <Stack  >
                        <Card
                            overflow='hidden'
                            variant='outline'
                            textAlign='center'
                            width="100%"
                            height="100%"
                            >
                            <Stack  height="100%" justifyItems="end">
                                <CardBody>
                                    <Heading size='md' mb={5}>Tu Asistencia</Heading>
                                    <Image
                                        mb={5}
                                        src='../assets/Captura de tu Asistencia.png'
                                        alt='tu_asistencia'
                                    />
                                    <Text py='2'>
                                        Este proyecto es una colaboración al estilo de Side Project, que pretende solucionar el ingreso y egreso del personal de determinado trabajo,
                                        contiene autentificación de administrador, notificación por mail al autenticar, un crud de empleados el cual se puede crear, modificar y eliminar, solicitud de informes por fecha, opciones de impresion de datos.
                                    </Text>
                                </CardBody>
                                <CardFooter justifyContent='center' gap={10}>
                                    <Button variant='solid' cursor='pointer' colorScheme="blue" width='50%' py={5} size='lg'><Link _hover={{ textDecoration: 'none', color: 'blue' }} target='_blank' href="https://youtu.be/KbMPKyy1kQ8">ir al Demo</Link></Button>
                                    <Button variant='solid' cursor='pointer' colorScheme="blue" width='50%' py={5} size='lg' ><Link _hover={{ textDecoration: 'none', color: 'blue' }} target='_blank' href="https://github.com/molder26/tuasistencia/tree/gabyDev">Repo</Link></Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    </Stack>
                </Stack>
                <Stack
                    // m='auto'
                    // w='400px'
                    w="100%"
                    
                    direction={{ base: 'row', sm: 'column' }}
                >
                    <Stack>
                        <Card
                            overflow='hidden'
                            variant='outline'
                            textAlign='center'
                            height="55rem"
                           >
                            <Stack height="100%" justifyItems="end">
                                <CardBody  >
                                    <Heading size='md' mb={5}>Libreria Henry</Heading>
                                    <Image
                                        mb={5}
                                        src='../assets/libreriaHenry.png'
                                        alt='libreriaHenry'
                                    />
                                    <Text py='2'>
                                        Este proyecto Pretende simular un e-commerce de venta de libros físicos, con funciones como: logueo, panel de control de usuarios, favoritos, dark mode, cambio idioma, simulación de pago con tarjeta.
                                        Fue un proyecto con varios desarrolladores, donde se organizó y culminó éste trabajo organizado con metodología scrum.
                                    </Text>
                                </CardBody>
                                <CardFooter justifyContent='center' gap={10}>
                                    <Button variant='solid' colorScheme="blue" width='50%'  cursor='pointer' py={5} size='lg'><Link _hover={{ textDecoration: 'none', color: 'blue' }} target='_blank' href="https://henry-library.netlify.app/">ir al Demo</Link></Button>
                                    <Button variant='solid' cursor='pointer' colorScheme="blue" width='50%' py={5} size='lg' ><Link _hover={{ textDecoration: 'none', color: 'blue' }} target='_blank' href="https://www.notion.so/Repos-App-Libreria-Henry-c8a1a2c5fc3948c09448243d5e1fc4dd">Repos</Link></Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    </Stack>
                </Stack>

                <Stack
                    // m='auto'
                    // w='400px'
                    w="100%"
                    height="100%"
                    direction={{ base: 'row', sm: 'column' }}
                >
                    <Stack >
                        <Card
                            textAlign='center'
                            overflow='hidden'
                            variant='outline'
                            height="55rem">
                            <Stack  height="100%" justifyItems="end">
                                <CardBody>
                                    <Heading size='md' mb={5}>App Food</Heading>
                                    <Image
                                        mb={5}
                                        src='../assets/recipesApp.png'
                                        alt='Caffe Latte'
                                    />
                                    <Text py='2'>
                                        Recipe es una app para consultar recetas, crear, podes filtrar por tipos, ordenar alfabéticamente, fue realizada durante el bootcamp soy henry, utilizando las tecnologías: React, Javascript, NodeJs, PostgresSQL, express, una app sencilla pero completa.
                                    </Text>
                                </CardBody>
                                <CardFooter justifyContent='center' gap={10}>
                                    <Button variant='solid' cursor='pointer' colorScheme="blue" width='50%' py={5} size='lg'><Link _hover={{ textDecoration: 'none', color: 'blue' }} target='_blank' href="https://youtu.be/8bP8FS9GXc0">ir al Demo</Link></Button>
                                    <Button variant='solid' cursor='pointer' colorScheme="blue" width='50%' py={5} size='lg'><Link _hover={{ textDecoration: 'none', color: 'blue' }} target='_blank' href="https://github.com/gabriel073/PI_FOOD">Repo</Link></Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    </Stack>
                </Stack>

                <Stack
                //  w='400px'
                w="100%"
                  direction={{ base: 'row', sm: 'column' }}>
                    <Stack>
                        <Card
                            overflow='hidden'
                            variant='outline'
                            textAlign='center'
                            height="60rem"
                        >
                            <Stack  height="100%" justifyItems="end">
                                <CardBody>
                                    <Heading size='md' mb={5}>Multi Games</Heading>
                                    <Image
                                        mb={5}
                                        src='../assets/multiGames.png'
                                        alt='multiGames'
                                    />
                                    <Text py='2'>
                                        Multi Games es una aplicación web con un menú que contiene 3 juegos clásicos que atrapa al usuario a entrenerse y salir un poco de la rutina, el clásico juego de memoria donde hay que encontrar en un tablero ramdon, las 2 fichas que coinciden, el tipico tipeador de palabras por tiempo, y adivina pokemon donde aparece la silueta de personajes ramdon detrás de unas hierbas y tendrás que saber de quién se trata.
                                    </Text>
                                </CardBody>
                                <CardFooter justifyContent='center' gap={10}>
                                    <Button variant='solid' cursor='pointer' colorScheme="blue" width='50%' py={5} size='lg'><Link _hover={{ textDecoration: 'none', color: 'blue' }} target='_blank' href="https://multi-games.vercel.app/">ir al Demo</Link></Button>
                                    <Button variant='solid' cursor='pointer' colorScheme="blue" width='50%' py={5} size='lg'><Link _hover={{ textDecoration: 'none', color: 'blue' }} target='_blank' href="https://github.com/gabriel073/multi-games">Repo</Link></Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    </Stack>
                </Stack>

                <Stack
                 marginBottom='80px'
                //   w='400px'
                w="100%"
                   direction={{ base: 'row', sm: 'column' }}>
                    <Stack>
                        <Card
                            overflow='hidden'
                            variant='outline'
                            textAlign='center'
                            height="60rem">
                            <Stack  height="100%" justifyItems="end" >
                                <CardBody >
                                    <Heading size='md' mb={5}>PsicoEspacio en Linea</Heading>
                                    <Image
                                        mb={5}
                                        src='../assets/psicoEspacio.png'
                                        alt='psicoEspacio'
                                    />
                                    <Text py='2'>
                                        En este caso se trata de un Land Page de un grupo de psicólogas que brindan su servicio en línea, este pryecto es interesante porque se trabajó con una diseñadora UI, es notable su trabajo, se tuvo que respetar las maquetas de figma con sus propiedades para llegar al diseño realizado, una gran experiencia del trabajo en equipo.-
                                    </Text>
                                </CardBody>
                                <CardFooter justifyContent='center' alignContent="flex-end" gap={10}>
                                    <Button variant='solid' cursor='pointer' colorScheme="blue" width='50%' py={5} size='lg'><Link _hover={{ textDecoration: 'none', color: 'blue' }} target='_blank' href="https://psicoespacio-web.vercel.app/">ir al Demo</Link></Button>
                                    <Button variant='solid' cursor='pointer' colorScheme="blue" width='50%' py={5} size='lg'><Link _hover={{ textDecoration: 'none', color: 'blue' }} target='_blank' href="https://github.com/gabriel073/land_page_psicoEspacio">Repo</Link></Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    </Stack>
                </Stack>
            </Grid>

        </>
    )
}

export default Projects;