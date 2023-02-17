import React, { useState } from 'react'
import Editor from "@monaco-editor/react";
import Axios from 'axios';
import spinner from "./spinner.svg";
import './CodeEditor.css'
import EditorNavbar from './EditorNavbar';
const CodeEditor = () => {

    const [userCode, setUserCode] = useState(``);
    const [fontSize, setFontSize] = useState(20);
    // State variable to set editors default language
    const [userLang, setUserLang] = useState("java");
    const [userInput, setUserInput] = useState("");
    const options = {
        fontSize: fontSize
    }
    // State variable to set editors default theme
    const [userTheme, setUserTheme] = useState("vs-dark");

    const [userOutput, setUserOutput] = useState("");

    // Loading state variable to show spinner
    // while fetching data
    const [loading, setLoading] = useState(false);

    function compile() {
        setLoading(true);
        if (userCode === ``) {
            return
        }
        // Post request to compile endpoint
        Axios.post(`https://violet-panther-robe.cyclic.app/compile`, {
            code: userCode,
            language: userLang,
            input: userInput
        }).then((res) => {
            setUserOutput(res.data.output);
        }).then(() => {
            setLoading(false);
        })
    }

    function clearOutput() {
        setUserOutput("");
    }
    return (
        <>
            <div className="AppEditor">
                <EditorNavbar
                    userLang={userLang} setUserLang={setUserLang}
                    userTheme={userTheme} setUserTheme={setUserTheme}
                    fontSize={fontSize} setFontSize={setFontSize}
                />
                <div className='main'>

                    <div className="left-container">
                        <Editor
                            options={options}
                            height="calc(100vh - 50px)"
                            width="100%"
                            theme={userTheme}
                            language={userLang}
                            defaultValue="Enter your code here"
                            onChange={(value) => { setUserCode(value) }}
                        />
                        <button className="run-btn" onClick={() => compile()}>
                            Run
                        </button>
                    </div>

                    <div className="right-container">
                        <h4>Input:</h4>
                        <div className="input-box">
                            <textarea id="code-inp" onChange=
                                {(e) => setUserInput(e.target.value)}>
                            </textarea>
                        </div>
                        <h4>Output:</h4>
                        {loading ? (
                            <div className="spinner-box">
                                <img src={spinner} alt="Loading..." />
                            </div>
                        ) : (
                            <div className="output-box">
                                <pre>{userOutput}</pre>
                                <button onClick={() => { clearOutput() }}
                                    className="clear-btn">
                                    Clear
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>

    )
}

export default CodeEditor