import React, {useState} from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import '../styles/menu.css';
import logo from '../images/logo.png';
import logoNoText from '../images/neobank-logo-notext.png';

function MenuComponent() {
    return (
        <div className="menu">
            <div className="menu-container">
                <img className="logo" src={logoNoText}></img>

                <p
                    className="menuItem"
                    style={{
                    marginTop: "6vh"
                }}>My Wallet</p>
                <p
                    className="menuItem"
                    style={{
                    marginTop: "2vh"
                }}>Transactions</p>
                <p
                    className="menuItem"
                    style={{
                    marginTop: "10vh"
                }}>Investing</p>
                <p
                    className="menuItem"
                    style={{
                    marginTop: "2vh"
                }}>Stocks</p>
                <p
                    className="menuItem"
                    style={{
                    marginTop: "2vh"
                }}>Crypto</p>
                <p
                    className="menuItem"
                    style={{
                    marginTop: "10vh"
                }}>Spendings</p>
                <p
                    className="menuItem"
                    style={{
                    marginTop: "2vh"
                }}>Reports</p>
                <p
                    className="menuItem"
                    style={{
                    marginTop: "10vh"
                }}>Settings</p>
            </div>
        </div>
    )
}

export default MenuComponent;