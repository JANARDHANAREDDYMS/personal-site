import React from "react";
import { motion } from "framer-motion";

import {
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
    Button,
    WhiteText
} from "../../styles/Global.styled"
import { FaGithub } from "react-icons/fa";

import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";

import {
    TechStackCard
} from "../../styles/MyProject.styled"

import Project1 from '../../assets/Project1.png'

import { ProjectImageContainer,ProjectImage } from "../../styles/MyProject.styled";

const Project = ({ data }) =>{
    return (
    <FlexContainer 
    direction={data.reverse ? 'row-reverse' : false}
    fullWidthChild>
        <div>
            <FlexContainer align="center" gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">
                    {data.Project_name}
                </Heading>

            <IconContainer color="blue" size="2rem">
                <FaGithub />
            </IconContainer>
    </FlexContainer>
        
    

    <PaddingContainer top="1rem"
    as={motion.div}
    variants={fadeInLeftVariant}
    initial="hidden"
    whileInView="visible">
        <FlexContainer gap="1.5rem">
            {data.tech_stack.map((stack)=>(
                <TechStackCard>{stack}</TechStackCard>
            ))}
        </FlexContainer>
    </PaddingContainer>
    
    <ParaText 
    top="1rem " bottom="2rem"
    as={motion.div}
    variants={fadeInLeftVariant}
    initial="hidden"
    whileInView="visible"
    >
        <WhiteText>{data.Project_desc}</WhiteText>
    </ParaText>

    <a href={data.project_url}>
    <Button
    as={motion.button}
    whileHover={{scale:1.2}}>
        Find Code
    </Button>
    </a>
    
    </div>
    <PaddingContainer right="20px">

    <ProjectImageContainer justify={data.reverse ? 'flex-start' : 'flex-end' }>
        <ProjectImage src={data.project_img} 
        alt={data.Project_name}
        />
    </ProjectImageContainer>
    </PaddingContainer>
    </FlexContainer>
    )
}

export default Project