import { IconButton, Stack, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";





function Footer() {

    return (

        <VStack
            p={5}
            maxWidth="1200px"
            height="100%"
            m="auto" >
            <Stack flexDirection="row">
                <p>Creado por Gabriel - 2023 - visitá mis redes 👉</p>
                <IconButton icon={<FaLinkedin />} onClick={() => window.open("https://www.linkedin.com/in/gabriel-marzioli/")} isRound='true'> </IconButton>
                <IconButton icon={<FaGithub />} onClick={() => window.open("https://github.com/gabriel073")} isRound='true'></IconButton>
            </Stack>
        </VStack>
    )


}

export default Footer;     