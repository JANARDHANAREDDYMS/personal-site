import styled from "styled-components"

export const ShowcaseParticleContainer = styled.div`
    postion:relative;
    max-width:300px;

    @media(max-width: ${({theme})=>theme.
    breakpoints.mobile}){
        // display: none;
        padding-left: 20%;
        
    }
`

export const ShowcaseImageCard = styled.div`
    border: 7px solid white;
    width: max-content;
    border-radius: 4rem;
    position: relative;
    overflow:hidden;
    display: flex;
    
    img {
        width: 300px; // Set the desired width
        height: 100%;
        display: block;  // Add this
        object-fit: cover; // Set height to "auto" to maintain aspect ratio
    }
    @media(max-width: ${({theme})=>theme.
    breakpoints.mobile}){
        width: 300px;
        height: 100%;
        display: block;
        justify:center;
        object-fit: cover;
        
    }

   
`;

 

// export const ShowcaseImgCard = styled.div`
//     border: 11px solid #BAB178;
//     width: max-content;
//     object-fit: cover;
//     height: 98%;
//     border-radius: 0px;

//     img {
//         width: 300px; // Set the desired width
//         height: auto; // Set height to "auto" to maintain aspect ratio
//     }
// `

export const Particle = styled.img`
    position:absolute;
    top:${({top})=>top};
    left:${({left})=>left};
    right:${({right})=>right};
    bottom:${({bottom})=>bottom};
    transform: rotate(${({rotate})=>rotate});
`

// export const diamond = styled.div`
//     width: 50px;
//     height: 50px;
//     background-color:${({theme})=>theme.colors.brownish_yellow},\;
//     transform: [{ rotate: "45deg" }];
// `