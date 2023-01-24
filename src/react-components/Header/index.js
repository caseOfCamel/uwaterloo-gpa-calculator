import React from "react";
import "./styles.css";

class Header extends React.Component{
    render(){
        return(
            <div>
                <header className="header">
                    <img src={require('../../img/waterloo_logo.png')} alt=""></img>
                    Auto-GPA Calculator
                </header>
                <hr></hr>
                <div className="steps">
                    <h3 className="steps-header">Steps</h3>
                        <ol className="steps-list">
                            <li>Log into <a href="https://uwaterloo.ca/quest/">Quest</a></li>
                            <li>Go to <em><strong>Grades {'->'} My Academics {'->'} Unofficial Transcript</strong></em></li>
                            <li>Select your applicable Report Type, then click <strong>View Report.</strong> A PDF of your transcript should open automatically. </li>
                            <li>Here, <strong>copy</strong> the entire transcript: 
                                <ul>
                                    <li>
                                        <em>On Windows: CTRL + A and CTRL + C</em>
                                    </li>
                                    <li>
                                        <em>On Mac: Command + A and Command + C</em>
                                    </li>
                                </ul>
                                Then <strong>paste</strong> your transcript into the box below:
                                <ul>
                                    <li>
                                        <em>On Windows: CTRL + V</em>
                                    </li>
                                    <li>
                                        <em>On Mac: Command + V</em>
                                    </li>
                                </ul>
                            </li>
                            <li>Hit <strong>Calculate</strong> to reveal your GPA!</li>
                        </ol>
                </div> 
            </div>
            
        )
    }
}

export default Header;