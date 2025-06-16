import React from "react";
import { motion } from "framer-motion";
import { fadeInTopVariant } from "../utils/Variants";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";
import { BsPersonHeart } from "react-icons/bs";


import {
    PaddingContainer,
    FlexContainer,
    IconContainer,
    BYText,
    BlueText,
    Heading,
    Button,
    Buttoninfo,
    ParaText
    
} from '../styles/Global.styled'

import {
    LowerBodyInfo,InfoContainer
} from '../styles/Bginfo.styled'
import { GiTruce } from "react-icons/gi";



const Info = () => {
    return(

        <PaddingContainer top="8%" bottom="10%">

            <PaddingContainer bottom="2em">
            <Heading
                size="h2"
                as="h2"
                style={{
                textAlign: "center", // Ensure the heading is centered
                '@media (max-width: 600px)': {
                    textAlign: "center", // Center it on mobile screens
                    marginLeft: 'auto', // Reset any manual left margin
                    marginRight: 'auto', // Center it horizontally
                },
                }}
            >
                About Me
            </Heading>
            </PaddingContainer>
            <PaddingContainer bottom="2.1rem" >
            <div style={{ width: '50%', borderBottom: '2px solid white', marginBottom: '1rem',margin: 'auto'}}></div>
            </PaddingContainer>
        
        
            <PaddingContainer  >
            <FlexContainer align="center" gap="2rem" justify="center" resposiveFlex={true} resposiveDirection="column" style={{
        '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'center'
        }
    }}>
                <Buttoninfo style={{
        width:'15rem',
        '@media (max-width: 600px)': {
            marginBottom: '1rem',
            width: '90%'
        }
    }}>
                <LowerBodyInfo style={{height:'12rem'}}><InfoContainer>
                <ParaText style={{paddingBottom:"1rem",fontSize:'1.2rem'}}>Education</ParaText>
                <IconContainer size="1.2rem">
                    <RiGraduationCapFill />
                </IconContainer>
                <ParaText style={{ paddingBottom: "1rem" }} >
                <ul style={{ 
                    margin: "0", 
                    listStylePosition: "inside", 
                    padding: "0", 
                    textAlign: "start" 
                }}>
                        <li>New York University</li>
                        <li>Bangalore Institute of </li>
                    </ul>
                    <div style={{ textAlign: "center", paddingLeft: "1.2rem" }}>
                        Technology
                    </div>
                </ParaText>
                </InfoContainer></LowerBodyInfo>
                </Buttoninfo>

                <Buttoninfo style={{
        width:'15rem',
        '@media (max-width: 600px)': {
            marginBottom: '1rem',
            width: '90%'
        }
    }}>
                <LowerBodyInfo style={{height:'12rem'}}><InfoContainer>
                <ParaText style={{paddingBottom:"1rem",fontSize:'1.2rem'}}>Interests</ParaText>
                <IconContainer size="1.2rem">
                <FaLightbulb />    
                </IconContainer> 
                <ParaText>
                Web Development   
                </ParaText>
                <ParaText>
                Machine learning 
                </ParaText>
                <ParaText>
                Full Stack Development
                </ParaText>
                <ParaText>
                Android Development
                </ParaText>  
                </InfoContainer></LowerBodyInfo>
                </Buttoninfo>

            
            </FlexContainer> 
            </PaddingContainer>
            </PaddingContainer>
        
        
        
        
    )
}

export default Info