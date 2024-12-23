import styled from "styled-components";

export const MainBody = styled.div`
    background-color:${({theme})=> theme.colors.primary}
`;

export const LowerBody = styled.div`
    background-color:${({theme})=>theme.colors.secondary},
    
`;



export const Container = styled.div`
    width:90%,
    max-width:1280px,
    margin:auto
`;

export const PaddingContainer = styled.div`
    padding-top: ${({ top }) => top };
    padding-bottom: ${({ bottom }) => bottom };
    padding-left: ${({ left }) => left };
    padding-right: ${({ right }) => right };

    @media(max-width: ${({theme})=>theme.breakpoints.
    mobile}){
        padding-top: ${({ responsiveTop }) => responsiveTop };
        padding-bottom: ${({ responsiveBottom }) => responsiveBottom };
        padding-left: ${({ responsiveLeft }) => responsiveLeft };
        padding-right: ${({ responsiveRight }) => responsiveRight }; 
        
    }
`;


export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction, reverseFlexDirection }) => 
    reverseFlexDirection ? (direction === 'row' ? 'row-reverse' : 'column-reverse') : direction || 'row'}; /* Reverse flex direction if reverseFlexDirection is true */

  & > div {
    flex: ${({ fullWidthChild }) => fullWidthChild && 1};
    order: ${({ reverseFlexDirection }) => reverseFlexDirection ? 2 : 1};  /* Change order based on reverseFlexDirection */
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ responsiveFlex }) => responsiveFlex ? 'flex' : 'block'};
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: ${({ responsiveDirection, reverseFlexDirection }) => 
      reverseFlexDirection ? (responsiveDirection === 'row' ? 'row-reverse' : 'column-reverse') : (responsiveDirection || 'column')};  /* Reverse flex direction on mobile too if reverseFlexDirection is true */
    
    /* Adjust order based on reverseFlexDirection */
    & > div:nth-child(1) {
      order: ${({ reverseFlexDirection }) => reverseFlexDirection ? 2 : 1};  /* Change order on mobile */
    }
    & > div:nth-child(2) {
      order: ${({ reverseFlexDirection }) => reverseFlexDirection ? 1 : 2};  /* Change order on mobile */
    }

    /* Add margin-bottom on small screens between buttons */
    & > div:nth-child(1) {
      margin-bottom: ${({ responsiveBottom }) => responsiveBottom || '0rem'};  /* Add margin-bottom */
    }
  }
`;





export const Heading = styled(PaddingContainer)`
    color:${({theme})=>theme.colors.white};
    text-align:${({align})=>align};
    font-size: ${({size})=>{
        switch(size){
            case 'h1':
                return '4.5rem';
            case 'h2':
                return '3rem';
            case 'h3':
                return '2rem';
            case 'h4':
                return '1.2rem';
            case 'h5':
                return '1rem';
            default:
                return;
        }
    }};
    font-family: Outfit, sans-serif;

    @media(max-width:${({theme})=>theme.breakpoints.
mobile}){
    font-size: ${({size})=>{
        switch(size){
            case 'h1':
                return '2.5rem';
            case 'h2':
                return '2rem';
            case 'h3':
                return '1.5rem';
            case 'h4':
                return '0.8rem'

            default:
                return;
        }
    }};
    font-family: Outfit, sans-serif-monospace;
}
`;

export const BlueText =  styled.span`
    color:${({theme})=>theme.colors.secondary}

`

export const DarkBlueText =  styled.span`
    color:${({theme})=>theme.colors.dark_blue}
`

export const BYText =  styled.span`
    color:${({theme})=>theme.colors.brownish_yellow}
    font-size: ${({size})=>{
        switch(size){
            case 'h1':
                return '89.5rem';
            case 'h2':
                return '3rem';
            case 'h3':
                return '2rem';
            case 'h4':
                return '1.2rem';
            case 'h5':
                return '1rem';
            default:
                return;
        }
    }};
`

export const ParaText = styled(PaddingContainer)`
    color:${({theme})=>theme.colors.para_text_color},
    line-height: 2rem
`
export const WhiteText =  styled.span`
    color:${({theme})=>theme.colors.white}
`

export const IconContainer = styled.div`
    font-size:${({size})=>size};
    cursor: pointer;
    color: ${({color, theme})=>{
        switch(color){
            case 'white':
                return theme.colors.white;
            case 'blue':
                return theme.colors.secondary;
            case 'dark-blue':
                return theme.colors.dark_blue;
            default:
                return
        }
    }}
`

export const Buttona = styled.a`
font-size:${({size})=>size};
cursor: pointer;
color: ${({color, theme})=>{
    switch(color){
        case 'white':
            return theme.colors.white;

        case 'blue':
            return theme.colors.secondary;
        
        default:
            return
    }
}}

&:visited{
    color:inherit;
}

`

export const Button = styled.a`
    display: inline-block;
    width: max_content;
    padding: 1rem 2rem;
    color:${({theme})=>theme.colors.white};
    background-color:${({theme})=>theme.colors.primary_light};
    border: 1px solid ${({theme})=>theme.colors.brownish_yellow};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.9s ease;
    
    &:hover{
        color:${({theme})=>theme.colors.primary_light};
        background-color:${({theme})=>theme.colors.white};
    }
`

export const Buttoninfo = styled.a`
    display: inline-block;
    width: max_content;
    color:${({theme})=>theme.colors.white};
    background-color:${({theme})=>theme.colors.primary_light};
    
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.9s ease;
    
    &:hover{
        color:${({theme})=>theme.colors.white};
        background-color:${({theme})=>theme.colors.info_hover_bg};
    }
`

export const ButtonMes = styled.a`
    display: inline-block;
    width: max_content;
    padding: 1rem 2rem;
    color:${({theme})=>theme.colors.white};
    background-color:${({theme})=>theme.colors.brownish_yellow};
    border: 1px solid ${({theme})=>theme.colors.brownish_yellow};
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.9s ease;
    
    &:hover{
        color:${({theme})=>theme.colors.primary_light};
        background-color:${({theme})=>theme.colors.white};
    }
`

export const ButtonMesContact = styled.a`
    display: inline-block;
    width: 10rem;
    height: 8rem;
    padding: 1rem 2rem;
    color:${({theme})=>theme.colors.white};
    background-color:${({theme})=>theme.colors.brownish_yellow};
    border: 1px solid ${({theme})=>theme.colors.brownish_yellow};
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.9s ease;
    
    &:hover{
        color:${({theme})=>theme.colors.primary_light};
        background-color:${({theme})=>theme.colors.white};
    }
`