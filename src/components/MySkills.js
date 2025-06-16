import React from "react";
import { motion } from "framer-motion";
import {
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText,
    WhiteText
} from '../styles/Global.styled';

import {
    SkillsCardContainer,
    SkillsCard
} from '../styles/MySkills.styled';

import { Skills } from "../utils/Data";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const MySkills = () => {
    return (
        <PaddingContainer
            id="Skills"
            top="5%"
            bottom="10%"
            responsiveLeft="1rem"
            responsiveRight="1rem"
        >
            <FlexContainer
            reverseFlexDirection={true}
                responsiveDirection="column"  /* Flex direction for mobile */
                direction="row"               /* Flex direction for desktop (default) */
                style={{
                    gap: '2rem',
                    width: '100%',
                }}
            >
                {/* Information Section */}
                <motion.div
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible"
                    style={{
                        width: '100%',
                    }}
                >
                    <Heading as="h4" size="h4">
                        MY SKILLS
                    </Heading>
                    <Heading as="h2" size="h2">
                        What <BlueText> I can do</BlueText>
                    </Heading>

                    <ParaText top="2rem" bottom="1.5rem">
                        <WhiteText>
                            As a developer, I have experience in JavaScript, HTML, React,
                            NodeJs, and CSS.
                        </WhiteText>
                    </ParaText>

                    <ParaText top="1rem" bottom="1.5rem">
                        <WhiteText>
                            This helps me work with the MERN stack, making me closer to
                            becoming a Full Stack developer. My interests also lie in Machine learning and you can find some of the projects I have done below.
                        </WhiteText>
                    </ParaText>
                </motion.div>

                {/* Skills Cards Section */}
                <SkillsCardContainer
                    as={motion.div}
                    variants={fadeInLeftVariant}
                    initial="hidden"
                    whileInView="visible"
                    style={{
                        width: '100%',
                    }}
                >
                    {Skills.map((skill) => (
                        <SkillsCard
                            key={skill.id}
                            as={motion.div}
                            whileHover={{ scale: 1.1 }}
                        >
                            <IconContainer size="2.5rem" color="blue">
                                {skill.icon}
                            </IconContainer>
                            <Heading as="h6" size="h6">
                                {skill.tech}
                            </Heading>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${skill.progress}%` }}
                                ></div>
                                <div className="progress-circle"></div>
                            </div>
                        </SkillsCard>
                    ))}
                </SkillsCardContainer>
            </FlexContainer>
        </PaddingContainer>
    );
};

export default MySkills;