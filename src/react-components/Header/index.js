import React from "react";
import "./styles.css";

class Header extends React.Component{
    render(){
        return(
            <div>
                <header className = "header">
                    <img src = "waterloo_logo.png"></img>
                    Auto-GPA Calculator
                </header>
                <hr></hr>
                <div className = "steps">
                    <h3 className = "steps-header">Steps</h3>
                        <ol className = "steps-list">
                            <li>Log into <a href="https://uwaterloo.ca/quest/">Quest</a></li>
                            <li>Go to <em><strong>Grades {'->'} My Academics {'->'} Unofficial Transcript</strong></em></li>
                            <li>Select your applicable Report Type, then click <strong>View Report</strong></li>
                            <li>A PDF of your transcript should automatically open. Here, do CTRL-A and CTRL-C</li>
                            <li>CTRL-V into the box below and hit Calculate</li>
                        </ol>
                </div> 
            </div>
            
        )
    }
}

export default Header;