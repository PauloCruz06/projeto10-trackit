import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../contexts/UserContext";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";

export default function Menu(){
    const { userdata } = useContext(UserContext);
    const [percentage, setPercentage] = useState(0);

    if(userdata.todays !== undefined){
        const done = userdata.todays.filter((hab) => (hab.done));
        setPercentage(100 * done.length / userdata.todays.length);
    }

    return(
        <Div>
            <Link to={"/habitos"}>
                <button>Hábitos</button>
            </Link>
            <div>
                <Link to={"/hoje"}>
                    <CircularProgressbar
                        value={percentage}
                        text=""
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                    <p>Hoje</p>
                </Link>
            </div>
            <Link to={"/historico"}>
                <button>Histórico</button>
            </Link>
        </Div>
    );
}

const Div = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0px;
    left: 0px;
    padding-left: 34px;
    padding-right: 34px;
    box-sizing: border-box;
    button{
        width: auto;
        height: auto;
        background: none;
        border: none;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 17px;
        color: #52B6FF;
    }
    > div{
        width: 91px;
        height: 91px;
        display: flex;
        position: relative;
    }
    .CircularProgressbar{
        width: 91px;
        height: 91px;
        position: absolute;
        left: 0px;
        top: -32px;
    }
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        position: absolute;
        left: 26px;
        bottom: 70px;
        z-index: 2;
    }

    @media(max-width: 320px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`