import styled from "styled-components";

import tags from "./tags.json"

const TagsContainer =  styled.section`
    display: flex;
    gap: 10px;   
    align-items: center;  
    margin: 30px 0;   
    
`

const TagTitulo =  styled.h3`
  
        font-size: 24px;
        color: #D9D9D9;
        margin: 0;
    
`

const TagButton =  styled.button`
        font-size: 24px;
        border-radius: 10px;
        padding: 12px;
        gap: 10px;
        border: 2px solid transparent;
        background: rgba(217, 217, 217, 0.3);
        transition: background-color 0.3s ease; 
        cursor: pointer;
        color: #FFFFFF;       
        box-sizing: border-box;
        &:hover {
      border-color: #C98CF1;
    }
       
`


const Tags = () =>{
        return(
           <TagsContainer>
                <TagTitulo>Busque por tags:</TagTitulo>
                {tags.map((tag) => <TagButton key={tag.id}>{tag.titulo}</TagButton> )}
           </TagsContainer>
        )
}


export default Tags;