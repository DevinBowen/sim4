import React from 'react';
import './home.css';

export default function Home() {
    return (
        <div className="box">
            <img src={require("../../assets/logo.png")} alt="logo"/>
            <h1>Helo</h1>
            <a href={process.env.REACT_APP_LOGIN}>
                <button>LOGIN / REGISTER</button>
            </a>
        </div>
    )
}