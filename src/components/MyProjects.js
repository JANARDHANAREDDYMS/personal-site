import React from "react";
import { motion } from "framer-motion";

import {
    PaddingContainer,
    Heading,
    BlueText
} from '../styles/Global.styled'

import { projectDetails } from "../utils/Data";
import Project from "./layouts/Project";
import { fadeInLeftVariant,fadeInRightVariant,fadeOutLeftVariant,fadeOutRightVariant,fadeInTopVariant,fadeOutLeft1Variant } from "../utils/Variants";


const MyProjects = () =>{
    return(
        <PaddingContainer
        id="Projects"
        top="5%"
        bottom="5%"
        left="4%"
        right="2%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
        responsiveTop="10%">
            <Heading 
            as={motion.h4}
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            size="h4"
            >
            My Projects
            </Heading>

            <Heading as={motion.h2}
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            size="h2">
                What<BlueText> I have Built</BlueText>
            </Heading>

            {projectDetails.map((project)=>(
                <PaddingContainer 
                
            
            key={project.id} top="5rem" bottom="5rem">
                    <Project data={project} />
                </PaddingContainer>
            ))}

        </PaddingContainer>
        )
}

export default MyProjects