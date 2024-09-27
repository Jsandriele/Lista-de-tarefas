import styled from "styled-components";

export const Central = styled.div`
    width: 200px;
    height: 65px;
    border: solid red 2px;


`
export const Nav = styled.nav`
    width: 700px;
    height: 200px;
    background-color: #000;
    display: flex;
    aling-items: center;
    justify-content: center;

`
export const ContainerTask = styled.div`



`
export const Card =styled.div`
    border-radius: 10px;
    margin-left: 25px;
    background: #c8c8c8;
    box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;

    @media screen and (max-width: 768px) {
   
        margin-left: 10px;
        box-shadow:  10px 10px 30px #bebebe,
                     -10px -10px 30px #ffffff;
  
`