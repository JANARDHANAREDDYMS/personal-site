import styled from 'styled-components';

export const LowerBodyInfo = styled.div`
  display: flex;
  justify-content: center; /* Center the content horizontally */
  @media(max-width: ${({theme})=>theme.breakpoints.mobile}){
    width: 100%;
        margin: 0.5rem auto;
        padding: 0 1rem;
  }
`;

export const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.info_blue};
  border-radius: 10px; /* Adjust the value to control the roundness */
  max-width: 1200px; /* Set a maximum width to control the width */
  padding: 20px; /* Add padding as needed */
  width: 100%;
  height:100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center; 
  @media(max-width: ${({theme})=>theme.breakpoints.mobile}){
     margin: 0;
        padding: 1rem;
        width: 100%;
  }
  /* Add other styles as needed */
`;