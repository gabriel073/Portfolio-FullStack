import { Input, Stack, Text, Textarea, useColorModeValue } from '@chakra-ui/react'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2';

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env;

function Contacto() {
    const borderForm = useColorModeValue("black", undefined)


    let [data, setData] = useState({
        name: "",
        mail: "",
        message: "",
    });
    // let data = useRef();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
        if (!data.current.name) {
            return setNameError("Este campo no puede estar vacio, favor de ingresar un nombre");
        }
        if (!data.current.name.value.split("").every(char => isNaN(parseInt(char)))) {
            return setNameError("Su nombre no puede contener numeros");
        }
        if (!data.current.name) {
            return setEmailError("Este campo no puede estar vacio, favor de ingresar un Mail");
        }
        if (!paternEmail.test(data.current.email.value)) {
            return setEmailError("No es un formato de Mail válido");
        }
        if (!data.current.message) {
            return setMessageError("Este campo no puede estar vacio, favor de ingresar un Mensaje");
        }


        emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, data.current, REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Mail enviado con exito!',
                    showConfirmButton: false,
                    timer: 1500
                })
                data.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNameError(false)
        setEmailError(false)
        setMessageError(false)
        setData({
            ...data,
            [name]: value,
        });
    }
    const paternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return (
        <Stack id="contacto">
            <motion.div
                initial={{ opacity: 0, scale: 0, x: 500 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
                <Text marginTop='90px' fontSize='3rem' textAlign='center'>Contacto</Text>
                <Stack h={620} w={500} alignItems='center' borderRadius={40} padding={10}
                    border={{ base: 'solid  2px', md: 'solid  2px' }} borderColor={borderForm}>

                    <form ref={data} onSubmit={sendEmail}  >
                        <label>Nombre</label>
                        <Input
                            h={25}
                            borderColor={borderForm}
                            type="text"
                            width='100%'
                            mb='15px'
                            id="name"
                            name="user_name"
                            onChange={handleInputChange}
                        />
                        <Stack color='red' mb='0px' mt='0px'>
                            {nameError && <p>{nameError}</p>}
                        </Stack>
                        <label>Email</label>
                        <Input
                            borderColor={borderForm}
                            h={25}
                            type="email"
                            id="email"
                            name="user_email"
                            mb='15px'
                            width='100%'
                            onChange={handleInputChange}
                        />
                        <Stack color='red' mb='0px' mt='0px'>
                            {emailError && <p>{emailError}</p>}
                        </Stack>
                        <label>Mensaje</label>
                        <Textarea
                            borderColor={borderForm}
                            mb='-30px'
                            id="message"
                            name="message"
                            rows="8"
                            cols="50"
                            width='100%'
                            onChange={handleInputChange}
                            required
                        ></Textarea>
                        <Stack color='red' mb='0px' mt='0px'>
                            {messageError && <p>{messageError}</p>}
                        </Stack>
                        <Stack alignItems='center'>
                            <Input
                                borderColor={borderForm}
                                type="submit"
                                value="Enviar"
                                backgroundColor='blue.400'
                                mt={20}
                                width='80%'
                                h='40px'
                            />
                        </Stack>
                    </form>
                    <Stack mt='2%'>
                        <Text >By Gabriel 🤓</Text>
                    </Stack>
                </Stack>
            </motion.div>
        </Stack >
    )
}

export default Contacto;