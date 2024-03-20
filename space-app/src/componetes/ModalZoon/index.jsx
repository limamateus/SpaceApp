import styled from "styled-components"
import Imagem from "../Galeria/Imagens"
import BotaoIcone from "../BotaoIcone"


const OverLay = styled.div`
    background-color: rgba(0 , 0 , 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DailogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ModalZoon = ({ foto , aoAlterarFavorito, aoFachar }) => {

    return (
        <>
            {foto && <>
                <OverLay />
                <DailogEstilizado open={!!foto} onClose={aoFachar}>
                    <Imagem
                        foto={foto}
                        expandida={true}
                        aoAlterarFavorito={aoAlterarFavorito}
                    />
                    <form method="dialog">
                        <BotaoIcone formMethod="dialog">
                            <img src="/icones/fechar.png" alt="Icone de fechar" />
                        </BotaoIcone>
                    </form>
                </DailogEstilizado>


            </>
            }
        </>
    )
}


export default ModalZoon