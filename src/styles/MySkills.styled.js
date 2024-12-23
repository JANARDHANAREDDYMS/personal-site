
import styled from "styled-components";

export const SkillsCardContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(5, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-gap:2rem;
    padding: 0 5%;

    .progress-bar {
        width: 70%;
        height: 12px;
        background-color: #eee;
        border-radius: 5px;
        margin-top: 6px;
        position: relative;
        
    }

    // .progress-circle {
    //     width: 12px; /* Adjust the size of the circle */
    //     height: 12px; /* Adjust the size of the circle */
    //     background-color: white; /* Color of the circle */
    //     border-radius: 50%; /* Make it a circle */
    //     position: absolute; /* Position it relative to the progress bar */
    //     top: -3px; /* Adjust the position of the circle vertically */

    //     // left: ${({ progress }) => `calc(${progress}% - 6px)`}; 
    //     /* Adjust the position of the circle horizontally based on the progress */
    // }

    .progress-fill {
        height: 100%;
        border-radius: 5px;
        background-color: #007bff; /* Change this color as needed */
    }

    @media(max-width: ${({theme})=>theme.breakpoints.
    mobile}){
        display:grid;
        padding: 15% 15%;
        grid-template-columns:repeat(2, 1fr);
        grid-template-rows: repeat(5, auto);

        .progress-bar {
            width: 70%;
            height: 7px;
            background-color: #eee;
            border-radius: 5px;
            margin-top: 6px;
            position: relative;
            
        }

        .progress-fill {
            height: 100%;
            border-radius: 5px;
            background-color: #007bff; /* Change this color as needed */
        }

    }
`

export const SkillsCard = styled.div`
    width: 110px;
    height: 110px;
    border: 1px solid #fff;
    padding: 0.8rem 0;
    border-radius: 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:${({theme})=>theme.colors.primary_light}

    @media(max-width: ${({theme})=>theme.breakpoints.
    mobile}){
        width: 100%;
        margin-top: 2rem;
        width: 180px;
        height: 180px;

    }
`