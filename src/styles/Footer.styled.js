import styled from "styled-components";

export const ContactForm = styled.form`
    width: 100%;

    @media(max-width: ${({theme})=>theme.breakpoints.mobile}){
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const FormLabel = styled.p`
    color: ${({theme})=>theme.colors.para_text_color};
    padding-bottom: 10px;
    
    @media(max-width: ${({theme})=>theme.breakpoints.mobile}){
        text-align: center;
    }
`;

export const FormInput = styled.input`
    width: 32rem;
    background-color: ${({theme})=>theme.colors.primary_light};
    border: 1px solid ${({theme})=>theme.colors.para_text_color};
    color: ${({theme})=>theme.colors.para_text_color};
    border-radius: 5px;
    padding: 15px;

    @media(max-width: ${({theme})=>theme.breakpoints.mobile}){
        width: 75vw;  // Almost full viewport width
        min-width: 320px; // Ensures minimum width
        margin: 0 auto; // Centers the input
    }
`;