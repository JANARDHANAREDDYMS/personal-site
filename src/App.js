import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import { MainBody, Container,LowerBody,LowerBodyInfo } from "./styles/Global.styled";


//import componennts

import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills"
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import LowerFooter from "./components/LowerFooter"
import Info from "./components/Bginfo";


function App() {
  return (
      <ThemeProvider theme={theme}>
        <MainBody>
          <Navbar />
          <Container>
            <Showcase/>
          </Container>
          
              <Info />
          <Container>
          <MySkills />
            <MyProjects />
            <Footer />
          </Container>
            
          
        </MainBody>
        <LowerBody>
          <LowerFooter />
        </LowerBody>
        
      </ThemeProvider>

    
  );
}

export default App;
