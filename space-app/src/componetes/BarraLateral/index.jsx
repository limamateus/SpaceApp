import styled from "styled-components";
import LiNavegacao from "../LiNavegacao";

const UlEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <UlEstilizada>
                    <LiNavegacao
                        iconeAtivo={"/icones/Home - ativo.png"}
                        iconeInativo={"/icones/Home - inativo.png"}
                        ativo={true}
                        filho={"Inicio"}
                    />


                    <LiNavegacao
                        iconeAtivo={"/icones/Mais vistas - ativo.png"}
                        iconeInativo={"/icones/Mais vistas - inativo.png"}
                        filho={"Mais visto"}
                    />

                    <LiNavegacao
                        iconeAtivo={"/icones/Mais curtidas - ativo.png"}
                        iconeInativo={"/icones/Mais curtidas - inativo.png"}
                        filho={"Mais curtidas"}
                    />
                    <LiNavegacao
                        iconeAtivo={"/icones/Novas - ativo.png"}
                        iconeInativo={"/icones/Novas - inativo.png"}
                        filho={"Novas"}
                    />

                    <LiNavegacao
                        iconeAtivo={"/icones/Surpreenda-me - ativo.png"}
                        iconeInativo={"/icones/Surpreenda-me - inativo.png"}
                        filho={"Surpreenda-me"}
                    />


                </UlEstilizada>
            </nav>
        </aside>
    )
}


export default BarraLateral;