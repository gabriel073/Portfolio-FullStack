import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion';
import './slider.css'


function Skills() {
    return (
        <>
            <Stack mb={150} fontSize='4rem' id="skills" gap={30}>
                <motion.div
                    initial={{ opacity: 0, scale: 0, x: 500 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <Text
                        textAlign='center'
                        fontSize={{ base: "50", md: "80" }}
                        marginTop='90px'
                        mb={50}
                        fontFamily={'VT323, sans-serif'}
                    >Skills</Text>
                </motion.div>
                <Box className='slider' >
                    <Box className='slide-track' gap={30}>
                        <Box className='slide'>
                            <img src='https://icongr.am/devicon/javascript-original.svg?size=64&color=currentColor' alt="icon-js" width='60' data-toggle="tooltip" title="Javascript" />
                        </Box>
                        <Box className='slide'>
                            <img src="https://icongr.am/devicon/nodejs-plain.svg?size=64&color=currentColor" alt="icon-nodeJs" width='60' data-toggle="tooltip" title="NodeJs" />
                        </Box>
                        <Box className='slide'>
                            <img src="https://icongr.am/devicon/typescript-original.svg?size=64&color=currentColor" alt="icon-typescript" width='60' data-toggle="tooltip" title="Typescript" />
                        </Box>
                        <Box className='slide'>
                            <img src="../assets/express.svg" alt="icon-express" width='60' data-toggle="tooltip" title="Express" />
                        </Box>
                        <Box className='slide'>
                            <img src="https://icongr.am/devicon/npm-original-wordmark.svg?size=64&color=currentColor" alt="icon-npm" width='60' data-toggle="tooltip" title="npm" />
                        </Box>
                        <Box className='slide'>
                            <img src="https://icongr.am/devicon/react-original-wordmark.svg?size=64&color=currentColor" alt="icon-react" width='60' data-toggle="tooltip" title="React" />
                        </Box>
                        <Box className='slide'>
                            <img src="../assets/redux.svg" alt="icon-redux" width='60' data-toggle="tooltip" title="Redux" />
                        </Box>
                        <Box className='slide'>
                            <img src="https://icongr.am/devicon/mysql-original-wordmark.svg?size=64&color=currentColor" alt="icon-mySql" width='60' data-toggle="tooltip" title="MySQL" />
                        </Box>
                        <Box className='slide'>
                            <img src="https://icongr.am/devicon/sequelize-original.svg?size=64&color=currentColor" alt="icon-sequelize" width='60' data-toggle="tooltip" title="Sequelize" />
                        </Box>
                        <Box className='slide'>
                            <img src="https://icongr.am/devicon/postgresql-original-wordmark.svg?size=64&color=currentColor" alt="icon-postgresSql" width='60' data-toggle="tooltip" title="PostgresSQL" />
                        </Box>
                        <Box className='slide'>
                            <img src="https://icongr.am/devicon/css3-original-wordmark.svg?size=64&color=currentColor" alt="icon-css" width='60' data-toggle="tooltip" title="CSS" />
                        </Box>
                        <Box className='slide'>
                            <img src="https://icongr.am/devicon/sass-original.svg?size=64&color=currentColor" alt="icon-sass" width='60' data-toggle="tooltip" title="SASS" />
                        </Box>
                        <Box className='slide'>
                            <img src="../assets/chakraui.svg" alt="icon-chakraUI" width='60' data-toggle="tooltip" title="ChakraUI" />
                        </Box>
                        <Box className='slide'>
                            <img src="https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=64&color=currentColor" alt="icon-boostrap" width='60' data-toggle="tooltip" title="Boostrap" />
                        </Box>
                        <Box className='slide'>
                            <img src="../assets/tailwindcss.svg" alt="icon-tailwind" width='60' data-toggle="tooltip" title="Tailwind" />
                        </Box>
                        <Box className='slide'>
                            <img src="https://icongr.am/devicon/git-original.svg?size=64&color=currentColor" alt="icon-git" width='60' data-toggle="tooltip" title="GIT" />
                        </Box>
                        <Box className='slide'>
                            <img src="https://icongr.am/devicon/github-original-wordmark.svg?size=64&color=currentColor" alt="icon-github" width='60' data-toggle="tooltip" title="Github" />
                        </Box>
                        <Box className='slide'>
                            <img src="../assets/scrum-48x48.ico" alt="icon-scrum" width='60' data-toggle="tooltip" title="Scrum" />
                        </Box>
                        <Box className='slide'>
                            <img src="https://icongr.am/devicon/trello-plain.svg?size=64&color=currentColor" alt="icon-trello" width='60' data-toggle="tooltip" title="Trello" />
                        </Box>
                        <Box className='slide'>
                            <img src="../assets/notion.svg" alt="icon-notion" width='60' data-toggle="tooltip" title="Notion" />
                        </Box>
                    </Box>
                </Box>
                <Stack>
                </Stack>
            </Stack >
        </>

    )

}

export default Skills;