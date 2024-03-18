import styled from "styled-components"



const SubTitulo = styled.h2`
    color: #7B78E5;
    text-align: ${props => props.$alinhamento? props.$alinhamento : 'left'};
    font-size: 32px;    
`

export default SubTitulo