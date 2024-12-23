import React from "react";
import { PaddingContainer,Heading,BlueText,DarkBlueText, FlexContainer, IconContainer } from "../styles/Global.styled";

import { FaInstagramSquare,FaTwitterSquare,FaLinkedin,FaGithubSquare } from "react-icons/fa";
import { AiOutlineInstagram,AiOutlineTwitter,AiOutlineGithub,AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaDiamond } from "react-icons/fa6";

import Project1 from "../assets/Project1.png"

export const LowerFooter=()=>{

    return(
        <PaddingContainer
        top="5%"
        bottom="1%"
        >
            <PaddingContainer >
            <Heading as="h3" size="h3" align="center">
                <DarkBlueText>Janardhana Reddy M S</DarkBlueText>
            </Heading>
            </PaddingContainer>

            <PaddingContainer top="1.5rem">
                <FlexContainer align="center" gap="0.2rem" justify="center" responsiveFlex={true} responsiveDirection="row">
                {/* <IconContainer  align="center" color="white">
                    <FaDiamond/>
                </IconContainer> */}
                <PaddingContainer>
                
                <div style={{ width: '20rem', borderBottom: '2px solid #152842',}}></div>
                </PaddingContainer>
                <IconContainer  align="center" color="dark_blue" size="0.6rem">
                    <FaDiamond/>
                </IconContainer>
                <IconContainer  align="center" color="dark_blue" size="1rem">
                    <FaDiamond/>
                </IconContainer>
                <IconContainer  align="center" color="dark_blue" size="0.6rem">
                    <FaDiamond/>
                </IconContainer>
                <PaddingContainer>
                <div style={{ width: '20rem', borderBottom: '2px solid #152842'}}></div>
                </PaddingContainer>
                
                {/* <IconContainer  align="center" color="white">
                    <FaDiamond/>
                </IconContainer> */}
                </FlexContainer>
                
            </PaddingContainer>

            
        <PaddingContainer top="1.5rem" >
        <FlexContainer align="center" gap="1rem" justify="center" responsiveFlex={true} responsiveDirection="row">
        <a href="https://twitter.com/janardhannnnnn">
                <IconContainer size="2rem" color="dark-blue">
                    <AiOutlineInstagram />
                </IconContainer>
        </a>
        <a href="https://twitter.com/janardhannnnnn">   
                <IconContainer size="2rem" color="dark-blue">
                    <AiOutlineTwitter />
                </IconContainer>
        </a>
        <a href="https://github.com/JANARDHANAREDDYMS" >
                <IconContainer size="2rem" color="dark-blue">
                    <AiOutlineGithub />
                </IconContainer>
                </a>
                <a href="https://www.linkedin.com/in/janardhan-reddy-ms/">
                <IconContainer size="2rem" color="dark-blue">
                    <AiOutlineLinkedin />
                </IconContainer>
                </a>
            
                <IconContainer size="2rem" >
                    <MdOutlineMailOutline />
                </IconContainer>
            </FlexContainer>
        </PaddingContainer>
            
            
            
        
            <FlexContainer justify="center" responsiveFlex={true} responsiveDirection="row">
            <PaddingContainer top="5rem" >
                            <DarkBlueText as="h5" size="h5">
                                This site is developed and maintained by<BlueText>@Janardhana Reddy M S,</BlueText>
                            can be reached out in case of any problems
                            </DarkBlueText>
                        </PaddingContainer>
            </FlexContainer>
                        
        </PaddingContainer>
    )

}


export default LowerFooter