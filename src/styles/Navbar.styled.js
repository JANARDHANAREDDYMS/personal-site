
import styled from "styled-components";

export const NavbarContainer = styled.div`
    position: fixed;  /* Fix typo: should be 'position', not 'postion' */
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    transition: all 0.3s ease-in;
    background-color: ${({ bgColor }) => bgColor};

    @media (max-width: 600px) {
        display: none;
    }
`;


export const Logo = styled.p`
    font-size: 1.7rem;
    font-weight: ${({theme})=>theme.fonts.weight.medium};

`

export const MenuIcon = styled.a`
    color:${({theme})=>theme.colors.secondary};
    font-size: 2.6rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align: center;
`


export const NavMenuContainer = styled.div`
    postion: fixed;
    top:0;
    left:0;
    height:100vh;
    widht:100%;
    background-color:${({theme})=>theme.colors.primary_light};
    z-index: 1;
`

export const MenuItem = styled.a`
    color: #fff;
    font-size: 2.5rem;
    margin-top: 3rem;
    cursor: pointer;
    test-decoration:none;
`