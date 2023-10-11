// import { Input, Stack, Text, Textarea, useColorModeValue } from '@chakra-ui/react'
// import emailjs from '@emailjs/browser';
// import { motion } from 'framer-motion';
// import React, { useRef, useState } from 'react'
// import Swal from 'sweetalert2';

// const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env;

// function Contacto() {
//     const borderForm = useColorModeValue("black", undefined)
//     const form = useRef();

//     let [data, setData] = useState({
//         name: "",
//         mail: "",
//         message: "",
//     });
//     const [nameError, setNameError] = useState(false);
//     const [emailError, setEmailError] = useState(false);
//     const [messageError, setMessageError] = useState(false);


//     const handleInputChange = e => {
//         setNameError(false)
//         setEmailError(false)
//         setMessageError(false)
//         setData({
//             ...data,
//             [e.target.name]: e.target.value,
//         });


//         emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, form.current, REACT_APP_PUBLIC_KEY)
//             .then((result) => {
//                 console.log(result.text);
//                 Swal.fire({
//                     position: 'center',
//                     icon: 'success',
//                     title: 'Mail enviado con exito!',
//                     showConfirmButton: false,
//                     timer: 1500
//                 })
//                 form.current.reset();
//             }, (error) => {
//                 console.log(error.text);
//             });
//     }

//     const paternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//     const sendEmail = (e) => {
//         e.preventDefault();
//         setNameError(false);
//         setEmailError(false);
//         setMessageError(false);

//         if (!data.name) {
//             return setNameError("Este campo no puede estar vacio, favor de ingresar un nombre");
//         }
//         if (!data.name.value.split("").every(char => isNaN(parseInt(char)))) {
//             return setNameError("Su nombre no puede contener numeros");
//         }

//         if (!data.mail) {
//             return setEmailError("Este campo no puede estar vacio, favor de ingresar un Mail");
//         }
//         if (!paternEmail.test(data.current.email.value)) {
//             return setEmailError("No es un formato de Mail válido");
//         }
//         if (!data.message) {
//             return setMessageError("Este campo no puede estar vacio, favor de ingresar un Mensaje");
//         }
//     }


//     return (
//         <>
//             <Stack id="contacto">
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0, x: 500 }}
//                     whileInView={{ opacity: 1, scale: 1, x: 0 }}
//                     transition={{ duration: 0.7 }}
//                 > 
//                 <Text
//                     textAlign='center'
//                     fontFamily={'VT323, sans-serif'}
//                     fontSize={70}>Contacto</Text>
//                 <Stack h={620} w={500} alignItems='center' borderRadius={40} padding={10}
//                     border={{ base: 'solid  2px', md: 'solid  2px' }} borderColor={borderForm}>

//                     <form ref={form} onSubmit={sendEmail}>
//                         <label>Nombre</label>
//                         <Input
//                             h={25}
//                             borderColor={borderForm}
//                             type="text"
//                             width='100%'
//                             mb='15px'
//                             id="name"
//                             name="name"
//                             value={data.name}
//                             onChange={handleInputChange}
//                         />
//                         <Stack color='red' mb='0px' mt='0px'>
//                             {nameError && <p>{nameError}</p>}
//                         </Stack>
//                         <label>Email</label>
//                         <Input
//                             borderColor={borderForm}
//                             h={25}
//                             type="email"
//                             id="email"
//                             name="mail"
//                             mb='15px'
//                             width='100%'
//                             value={data.mail}
//                             onChange={handleInputChange}
//                         />
//                         <Stack color='red' mb='0px' mt='0px'>
//                             {emailError && <p>{emailError}</p>}
//                         </Stack>
//                         <label>Mensaje</label>
//                         <Textarea
//                             borderColor={borderForm}
//                             mb='-30px'
//                             id="message"
//                             name="message"
//                             rows="8"
//                             cols="50"
//                             width='100%'
//                             value={data.message}
//                             onChange={handleInputChange}
//                             required
//                         ></Textarea>
//                         <Stack color='red' mb='0px' mt='0px'>
//                             {messageError && <p>{messageError}</p>}
//                         </Stack>
//                         <Stack alignItems='center'>
//                             <Input

//                                 borderColor={borderForm}
//                                 type="submit"
//                                 value="Enviar"
//                                 backgroundColor='blue.400'
//                                 mt={20}
//                                 width='80%'
//                                 h='40px'
//                             />
//                         </Stack>
//                     </form>
//                     <Stack mt='2%'>
//                         <Text >By Gabriel 🤓</Text>
//                     </Stack>
//                 </Stack>
//                  </motion.div> 
//             </Stack >
//         </>
//     )

// }


import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { Input, Stack, Text, Textarea, useColorModeValue } from '@chakra-ui/react'


const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env;
function Contacto() {

    const borderForm = useColorModeValue("black", undefined)
    let [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false)

    const form = useRef();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });


    }
    const resetFormFields = () => {
        setFormData({
            user_name: '',
            user_email: '',
            message: ''
        });
    }

    const paternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const handleSubmit = async event => {
        event.preventDefault();
        setNameError(false);
        setEmailError(false);
        setMessageError(false);

        if (!formData.user_name) {
            return setNameError("Este campo no puede estar vacío, favor de ingresar un nombre");
        }
        if (!formData.user_name.split("").every(char => isNaN(parseInt(char))) || !formData.user_name.split(" ").every(char => isNaN(parseInt(char)))) {
            return setNameError("Su nombre no puede contener numeros");
        }

        if (!formData.user_email) {
            return setEmailError("Este campo no puede estar vacío, favor de ingresar un Mail");
        }
        if (!paternEmail.test(formData.user_email)) {
            return setEmailError("No es un formato de Mail válido");
        }
        if (!formData.message) {
            return setMessageError("Este campo no puede estar vacío, favor de ingresar un Mensaje");
        }


        // const form = document.getElementById('contactForm');

        try {
            emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, form.current, REACT_APP_PUBLIC_KEY)
                .then((result) => {
                    // console.log(result.text)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Mail enviado con éxito!',
                        showConfirmButton: false,
                        timer: 1200
                    });
                    resetFormFields();
                });

        } catch (error) {
            console.log(error.text);
        }
    }

    return (
        <Stack id="contacto">
            <motion.div
                initial={{ opacity: 0, scale: 0, x: 500 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
                <Text
                    textAlign='center'
                    fontFamily={'VT323, sans-serif'}
                    fontSize={70}>
                    Contacto
                </Text>
            </motion.div >
            <Stack h={620} w={500} alignItems='center' borderRadius={40} padding={10}
                border={{ base: 'solid  2px', md: 'solid  2px' }} borderColor={borderForm}>

                <form id="contactForm" onSubmit={handleSubmit} ref={form} >
                    <label htmlFor="nombre">Nombre:</label>
                    <Input
                        h={25}
                        borderColor={borderForm}
                        type="text"
                        width='100%'
                        mb='15px'
                        id="nombre"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleInputChange}
                    />

                    <Stack color='red' mb='0px' mt='0px'>
                        {nameError && <p>{nameError}</p>}
                    </Stack>

                    <label htmlFor="email">Email:</label>
                    <Input
                        h={25}
                        borderColor={borderForm}
                        type="text"
                        width='100%'
                        mb='15px'
                        id="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleInputChange}

                    />
                    <Stack color='red' mb='0px' mt='0px'>
                        {emailError && <p>{emailError}</p>}
                    </Stack>


                    <label htmlFor="mensaje">Mensaje:</label><br />

                    <Textarea
                        borderColor={borderForm}
                        mb='-30px'
                        id="mensaje"
                        name="message"
                        rows="8"
                        cols="50"
                        width='100%'
                        value={formData.message}
                        onChange={handleInputChange}

                    />
                    <Stack color='red' mb='0px' mt='35px'>
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
            </Stack >

        </Stack >
    );
}

export default Contacto;
