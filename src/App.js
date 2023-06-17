import React from "react";
import Tasks from "./Tasks";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Countdown from "./features/countdown/Countdown";
import { StyledNav, StyledUl, StyledLi } from "./styled"
import SingleTaskPage from "./features/tasks/SingleTaskPage"
import styled from "styled-components";

const StyledLink = styled(Link)`
color:grey;
text-decoration:none;
cursor:pointer;
transition: .5s;

&:hover{
    color:#fff;
}
`

export default () => (
    <BrowserRouter>
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to="/zadania">Zadania 😉</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/countdown">Countdown 😂</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>

        <Switch>
            <Route path="/zadania/:id">
                <SingleTaskPage />
            </Route>
            <Route path="/zadania">
                <Tasks />
            </Route>
            <Route path="/countdown">
                <Countdown />
            </Route>
        </Switch>
    </BrowserRouter>









);