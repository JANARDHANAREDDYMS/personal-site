import React from "react";
import theme from "../utils/Theme";
import { motion } from "framer-motion";
import res from "../assets/janardhana-2.pdf"
import lwr from "../assets/lwr.txt"
import knn from "../assets/knn.txt"
import em from '../assets/em.txt'
import kmeans from '../assets/kmeans.txt'
import nb from '../assets/naivebayes.txt'
import ann from '../assets/ann.txt'
import id3 from '../assets/id3.txt'
import cm from '../assets/cm.txt'
import aostar from '../assets/aostar.txt'
import astar from '../assets/astar.txt'
import styled from 'styled-components';



//import global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    WhiteText,
Buttona} from '../styles/Global.styled'
import{
    SkillsCardContainer,
    SkillsCard
} from '../styles/MySkills.styled'



//importing showcase styles

import { ShowcaseParticleContainer, ShowcaseImageCard, ShowcaseImgCard,
Particle, diamond } from "../styles/Showcase.styled";

import { BsLinkedin, BsFacebook, BsTwitter, BsInstagram, BsGithub }
from "react-icons/bs";
import { MdDownloadForOffline} from 'react-icons/md'
import { GiCutDiamond } from "react-icons/gi";

import  ShowcaseImg  from  "../assets/showcase-img.jpg"
import BackgroundImg from "../assets/particle.png"
import ReactImg from "../assets/react-omg.png"


import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

export const BlueLink = styled(BlueText)`
  color: ${({ theme }) => theme.colors.link}; // Use the theme's link color
  text-decoration: underline;
`;


const Showcase = () =>{
    return(
        <PaddingContainer
           id="Home"
           left="13%"
           right="10%"
           top="12%"
           responsiveLeft="1rem"
           responsiveRight="1rem"
           responsiveTop="1.5rem"
           bottom="10%"
           style={{
            '@media (max-width: 480px)': {
                maxWidth: '90%',
                margin: '0 auto'
            }
        }}
           >
            <FlexContainer 
                align="left" 
                fullWidthChild
                style={{
                    '@media (max-width: 480px)': {
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }
                }}
            >
                <motion.div
                    variants={fadeInLeftVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                   
                        
                   <Heading 
                        as="h2" 
                        size="h2" 
                        top="0.5rem" 
                        bottom="0.5rem"  
                        color={theme.colors.para_text_color}
                        style={{
                            '@media (max-width: 480px)': {
                                textAlign: 'center',
                                width: '100%',
                                paddingRight: '0'
                            }
                        }}
                    >
                        <WhiteText>I'm </WhiteText><BlueText> Janardhan</BlueText>    
                    </Heading>

                    <Heading
                        as="h3"
                        right="1.5rem"
                        size="h3"
                        style={{
                            '@media (max-width: 480px)': {
                                textAlign: 'center',
                                width: '100%',
                                paddingRight: '0'
                            }
                        }}
                    >
                        <WhiteText>I like </WhiteText> <BlueText> Building Stuff</BlueText>
                    </Heading>
                    <ParaText 
                        as="div" 
                        top="2rem" 
                        bottom="4rem" 
                        style={{
                            '@media (max-width: 480px)': {
                                textAlign: 'center',
                                width: '100%',
                                padding: '0'
                            }
                        }}
                    >
                        <p style={{ 
                            paddingRight: "1rem",
                            '@media (max-width: 480px)': {
                                paddingRight: '0',
                                textAlign: 'center'
                            } 
                        }}>
                            <BlueText>Currently pursuing my Masters in Computer </BlueText>
                        </p>
                        
                        <p style={{ 
                            paddingRight: "1rem",
                            '@media (max-width: 480px)': {
                                paddingRight: '0',
                                textAlign: 'center'
                            } 
                        }}>
                         <BlueText>
                         Science from <a href="https://www.nyu.edu"><BlueLink>New York University.</BlueLink></a> 
                         </BlueText>
                        </p>
                        
                        <p style={{ 
                            paddingRight: "1rem",
                            '@media (max-width: 480px)': {
                                paddingRight: '0',
                                textAlign: 'center'
                            } 
                        }}>
                            <BlueText>A passionate MERN developer, with interests in
                          </BlueText>
                        </p>
                        <p style={{ 
                            paddingRight: "1rem",
                            '@media (max-width: 480px)': {
                                paddingRight: '0',
                                textAlign: 'center'
                            } 
                        }}>
                            <BlueText>Deep learning ,Computer Vision and NLP
                          </BlueText>
                        </p>
                        
                        </ParaText>
                  
                    
                        <PaddingContainer responsiveTop="1rem">
                    <FlexContainer gap="1rem" responsiveFlex={true} responsiveDirection="row">
                        
                        <a href="https://twitter.com/janardhannnnnn">
                        <IconContainer color="blue" size="1.5rem">
                            <BsTwitter/>
                        </IconContainer>
                        </a>

                        <a href="https://www.instagram.com/janardhan.reddy.m.s/">
                        <IconContainer color="blue" size="1.5rem">
                            <BsInstagram/>
                        </IconContainer>
                        </a>

                        <a href="https://www.linkedin.com/in/janardhan-reddy-ms/">
                        <IconContainer color="blue" size="1.5rem">
                             <BsLinkedin/>
                        </IconContainer>

                        </a>
                        
                        <a href="https://github.com/JANARDHANAREDDYMS">
                        <IconContainer color="blue" size="1.5rem">
                            <BsGithub/>
                        </IconContainer>
                        </a>
                            
                    </FlexContainer>
                    </PaddingContainer> 
                   {/* CV Section */}
                    <PaddingContainer top="1.5rem" responsiveBottom="2rem">
                        <FlexContainer 
                            responsiveFlex={true} 
                            responsiveDirection="row"
                            align="center"  // Add this to vertically center items
                        >
                            <Heading 
                                as="h3" 
                                size="h3"
                                style={{ margin: 0 }}  // Add this to remove any default margin
                            >
                                Curriculum<BlueText>&nbsp;Vi</BlueText>tae
                            </Heading>
                            
                            {/* Remove top padding since we're aligning center */}
                            <PaddingContainer left="0.5rem" top="0.5rem">
                                <IconContainer 
                                    color="dark-blue" 
                                    size="1.8rem"
                                >

                                    <Buttona 
                                        size="1.8rem"
                                        href={lwr}
                                        download={lwr}
                                    >
                                        <BlueLink>
                                            <MdDownloadForOffline />
                                        </BlueLink>
                                    </Buttona>
                                </IconContainer>
                            </PaddingContainer>
                        </FlexContainer>
                    </PaddingContainer>
                </motion.div>

               


                    <FlexContainer
                as={motion.div}
                variants={fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
                justify="end" paddingBottom="28rem">
                        <ShowcaseParticleContainer justify="end" responsiveRight="5rem">
                            <PaddingContainer >
                            <ShowcaseImageCard>
                            <img src={ShowcaseImg} alt="showcase"/>

                            </ShowcaseImageCard>
                            </PaddingContainer>
                            

                        <Particle
                            as={motion.img}
                            animate={{
                                x:[-120, 100, 0],
                                y:[0,50,50],
                                rotate: 360,
                                scale: [1, 0.5, 1],
                                opacity: 0.5
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                            }}
                            src={BackgroundImg}
                            alt="particle"
                            top="575px"
                            left="1100px"
                            rotate="0deg"/>

                        <Particle
                        as={motion.img}
                        animate={{
                            x:[200, 0, 100],
                            y: [0,-100,-50],
                            rotate: -360,
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt="partcile"
                        top="235px"
                        left="1150px"
                        rotate="30deg"/>

                            {/* <Particle
                            as={motion.img}
                            animate={{
                                x:[0, 100, 100],
                                rotate: -240,
                                scale: [1.5, 0.5, 1],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                            }}
                            src={ReactImg}
                            alt="particle"
                            top="55px"
                            width="60px"
                            left="1050px"
                            rotate="120deg"/> */}
                        </ShowcaseParticleContainer>
                    </FlexContainer>

                    
            </FlexContainer>
        </PaddingContainer>
    )
}


export default Showcase