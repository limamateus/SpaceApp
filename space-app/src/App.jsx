import styled from "styled-components"
import EstilosGlobais from "./componetes/EstilosGlobais"
import Header from "./componetes/Header"
import BarraLateral from "./componetes/BarraLateral"
import Banner from "./componetes/Banner"

import backgroundImage from "./assets/banner.png"
// Componete do Fundo do Site em si
const FundoGradient = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
img {
  max-width: 212px;
}
`

const Container = styled.div`
margin-inline: auto;
display: flex;
gap: 24px;
`

function App() {
  

  return (
    <FundoGradient>
      <EstilosGlobais/>
      <Header/>
      <Container>
         
      <BarraLateral/>
      <Banner
        backgroundImage={backgroundImage}
        texto={"A galeria mais completa de fotos do espaço!"}
      />
      </Container>
     
      
    </FundoGradient>
  )
}

export default App
