import styled from "styled-components"
import EstilosGlobais from "./componetes/EstilosGlobais"
import Header from "./componetes/Header"
import BarraLateral from "./componetes/BarraLateral"
import Banner from "./componetes/Banner"

import backgroundImage from "./assets/banner.png"
import Galeria from "./componetes/Galeria"

import Fotos from "./fotos.json"
import { useState } from "react"
// Componete do Fundo do Site em si
const FundoGradient = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
img {
  max-width: 212px;
}
`

const AppContainer = styled.div`
width: 1200px;
max-width: 100%;
margin: 0 auto;
`

const AppMainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
 flex-direction: column;
 flex-grow: 1; 
`

const App = () => {

  const [fotosDaGaleria,setFotosDaGaleria] = useState(Fotos)

  return (
    <FundoGradient>
      <EstilosGlobais />
      <AppContainer>
        <Header />
        <AppMainContainer>
          <BarraLateral />
          <ConteudoGaleria>
          <Banner
            backgroundImage={backgroundImage}
            texto={"A galeria mais completa de fotos do espaço!"}
          />
            <Galeria fotos={fotosDaGaleria}/>
          </ConteudoGaleria>
          

        </AppMainContainer>

      </AppContainer>

    </FundoGradient>
  )
}

export default App
