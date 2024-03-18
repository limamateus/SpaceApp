import styled from "styled-components";

const LiEstilizada = styled.li`
   font-size: 24px;
   line-height: 29px;
   margin-bottom: 30px;
   cursor: pointer;
   color: ${props => props.$ativo? '#7B78E5' : '#D9D9D9'} ;
   font-family: ${props => props.$ativo? 'GandhiSansBold': 'GandhiSansRegular'};
   display: flex; 
   align-items: center;
   gap: 22px;
`

const LiNavegacao = ({filho,iconeAtivo,iconeInativo,ativo=false}) =>{
    return<LiEstilizada $ativo={ativo}>
            {/* Aqui estou fazendo um validação para alterar o icone de acordo com a pagina*/}
            <img src={ativo? iconeAtivo : iconeInativo} alt="Icones" />
            {filho}
        </LiEstilizada>
    
}

export default LiNavegacao;