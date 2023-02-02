import styled from "styled-components";


export const Button = styled.button`
padding: 5px;
border: 2px solid #000;
border-radius: 5px;
background: teal;
font-size: 20px;
color: #fff;
transition: 0.5s;
cursor: pointer;


&:hover{
    background: hsl(180, 100%, 55%);
    color: #000;
};

&:disabled {
    color: grey;
    background: hsl(180, 100%, 15%);
}


`;
export const Wrapper = styled.div`
margin-top: 20px;
display: flex;
gap: 10px;

@media(max-width:700px){
    display: flex;
    flex-direction: column;
    text-aligne:center;
    gap:10px;
}
`;



