import styled from "styled-components";
import SubTitulo from "../SubTitulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagens";

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;

`
const SecaoFluida =  styled.section`
 flex-grow: 1;

`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    
`

const Galeria = ({fotos = [], aoFotoSelecionada,aoAlterarFavorito ,setTag}) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <SubTitulo>
                        Navegue pela galeria
                     </SubTitulo>                    
                    
                     <ImagensContainer>
                        {fotos.map(foto =>
                         <Imagem 
                         aoAlterarFavorito={aoAlterarFavorito}
                         aoZoomSolicitado={aoFotoSelecionada}
                            key={foto.id} 
                            foto={foto} />)
                        }
                    </ImagensContainer>
                    
                </SecaoFluida>
                
                <Populares/>
            </GaleriaContainer>

        </>
    )
}


export default Galeria;