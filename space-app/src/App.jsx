import styled from "styled-components"
import EstilosGlobais from "./componetes/EstilosGlobais"
import Header from "./componetes/Header"
import BarraLateral from "./componetes/BarraLateral"
import Banner from "./componetes/Banner"

import backgroundImage from "./assets/banner.png"
import Galeria from "./componetes/Galeria"

import Fotos from "./fotos.json"
import { useEffect, useState } from "react"
import ModalZoon from "./componetes/ModalZoon"
// Componete do Fundo do Site em si
const FundoGradient = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
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

  const [fotosDaGaleria, setFotosDaGaleria] = useState(Fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  

  useEffect(
    () => {
      const fotosFiltradas = Fotos.filter(foto => {
        const filtroPorTag = !tag || foto.tagId === tag;
        const filtroPorTitulo = !filtro || foto.titulo.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
        return filtroPorTag && filtroPorTitulo
      })
      setFotosDaGaleria(fotosFiltradas)
    }, [filtro, tag]
  )

  const aoAlterarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }

    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }
  return (
    <FundoGradient>
      <EstilosGlobais />
      <AppContainer>
        <Header
          filtro={filtro}
          setFiltro={setFiltro}
        />
        <AppMainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner

              backgroundImage={backgroundImage}
              texto={"A galeria mais completa de fotos do espaço!"}
            />
            <Galeria
              aoAlterarFavorito={aoAlterarFavorito}
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              fotos={fotosDaGaleria}
              setTag={setTag}
            />

          </ConteudoGaleria>


        </AppMainContainer>

      </AppContainer>
      <ModalZoon
        foto={fotoSelecionada}
        aoFachar={() => setFotoSelecionada(null)}       
        aoAlterarFavorito={aoAlterarFavorito} />
    </FundoGradient>
  )
}

export default App
