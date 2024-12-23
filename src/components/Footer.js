import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import {
    PaddingContainer,
    Heading,
    BlueText,
    FlexContainer,
    Button,
    ButtonMes,
    IconContainer,
    ButtonMesContact,
    DarkBlueText
} from '../styles/Global.styled';
import { MdOutlineMailOutline } from "react-icons/md";
import { ContactForm, FormInput, FormLabel } from "../styles/Footer.styled";
import { fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant, fadeOutLeft1Variant, fadeOutLeftVariant, fadeOutRightVariant, fadeInNoVariant, fadeInBottomVariant } from "../utils/Variants";

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_a545fjk', 'template_cb1wu66', form.current, 'oStz5vh9YZQopYV23')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <PaddingContainer>
            {/* First Row - Contact Header */}
            <FlexContainer
                direction="column"
                align="center"
                style={{
                    marginBottom: '3rem'
                }}
            >
                <Heading
                    as={motion.h4}
                    variants={fadeInTopVariant}
                    initial="hidden"
                    whileInView="visible"
                    size="h4"
                    align="center">
                    My Contact
                </Heading>
                <Heading
                    as={motion.h2}
                    variants={fadeInTopVariant}
                    initial="hidden"
                    whileInView="visible"
                    size="h2"
                    align="center"
                    top="0.5rem">
                    Contact <BlueText> Me here</BlueText>
                </Heading>
            </FlexContainer>

            {/* Second Row - Let's Talk and Form */}
            <FlexContainer
                responsiveFlex={true}
                fullWidthChild
                style={{
                    marginTop: '2rem',
                    '@media (max-width: 600px)': {
                        flexDirection: 'column'
                    }
                }}
            >
                {/* Let's Talk Section */}
                <FlexContainer align="center">
                    <PaddingContainer
                        left="20rem"
                        responsiveLeft="2rem"
                    >
                        <FlexContainer justify="center" responsiveFlex>
                            <DarkBlueText style={{
                                fontSize: "8rem",
                                '@media (max-width: 600px)': {
                                    fontSize: "4rem",
                                    textAlign: 'center'
                                }
                            }}>
                                LET'S TALK
                            </DarkBlueText>
                        </FlexContainer>
                    </PaddingContainer>
                </FlexContainer>

                {/* Contact Form Section */}
                <FlexContainer>
                    <PaddingContainer 
                        id="contact" 
                        top="5%" 
                        bottom="1rem"
                        style={{
                            '@media (max-width: 600px)': {
                                padding: '0 1rem'
                            }
                        }}
                    >
                        <PaddingContainer top="3rem">
                            <FlexContainer
                                as={motion.div}
                                variants={fadeInBottomVariant}
                                initial="hidden"
                                whileInView="visible"
                                size="h4"
                                justify="center">
                                <ContactForm className="contact" ref={form} onSubmit={sendEmail}>
                                    <PaddingContainer 
                                        bottom="3rem"
                                        style={{
                                            '@media (max-width: 600px)': {
                                                padding: '0'
                                            }
                                        }}
                                    >
                                        <PaddingContainer bottom="0.5rem">
                                            <FormLabel>Name: </FormLabel>
                                        </PaddingContainer>
                                        <FormInput
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                        />
                                        
                                        <PaddingContainer bottom="0.5rem" top="1rem">
                                            <FormLabel>Email: </FormLabel>
                                        </PaddingContainer>
                                        <FormInput
                                            type="text"
                                            placeholder="Enter your email"
                                            name="email"
                                        />
                                        
                                        <PaddingContainer bottom="0.5rem" top="1rem">
                                            <FormLabel>Message: </FormLabel>
                                        </PaddingContainer>
                                        <FormInput
                                            as="textarea"
                                            placeholder="Enter your message"
                                            name="message"
                                        />
                                        
                                        <PaddingContainer 
                                            top="2rem"
                                            style={{
                                                '@media (max-width: 600px)': {
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }
                                            }}
                                        >
                                            <FlexContainer justify="center" responsiveFlex>
                                                <ButtonMes 
                                                    as={motion.button} 
                                                    whileHover={{ scale: 1.2 }}
                                                    type="submit"
                                                >
                                                    Send Message
                                                </ButtonMes>
                                            </FlexContainer>
                                        </PaddingContainer>
                                    </PaddingContainer>
                                </ContactForm>
                            </FlexContainer>
                        </PaddingContainer>
                    </PaddingContainer>
                </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    );
};

export default Footer;