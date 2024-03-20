import styled from "styled-components";
import CompoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    padding: 60px 0 ;
    display: flex;
    justify-content: space-between;


`


const Header = ({filtro,setFiltro}) =>{
    return(
        <HeaderEstilizado>
        <img src="/imagens/logo.png" alt="Logo" />
        <CompoTexto
        setFiltro={setFiltro}
        />       
        

        </HeaderEstilizado>
    )

}



export default Header;