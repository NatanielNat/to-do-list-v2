import styled, { css } from "styled-components";

export const Button = styled.button`
        background: red;
        border-radius: 5px;
        cursor: pointer;
        transition: background 0.5s;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border:none;
        color:#000;


        ${({ remove }) => remove && css`
        background:red;
        `}

        &:hover{
            background:hsl(0, 100%, 80%);
        }
`