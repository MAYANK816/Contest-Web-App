import React, { useState } from 'react'
import Editor from "@monaco-editor/react";
import spinner from "./spinner.svg";
import './CodeEditor.css'
import EditorNavbar from './EditorNavbar';
import axios from 'axios';
import swal from 'sweetalert';
const CodeEditor = () => {

    const [userCode, setUserCode] = useState(``);
    const [fontSize, setFontSize] = useState(20);
    // State variable to set editors default language
    const [userLang, setUserLang] = useState("java");
    const [userInput, setUserInput] = useState('');
    const options = {
        fontSize: fontSize
    }
    // State variable to set editors default theme
    const [userTheme, setUserTheme] = useState("vs-dark");

    const [userOutput, setUserOutput] = useState('');

    // Loading state variable to show spinner
    // while fetching data
    const [loading, setLoading] = useState(false);

    function compile() {
        setLoading(true);
        if (userCode === ``) {
            setLoading(false);
            swal("Oops!", "Please Enter the code", "error");
        }
        // Post request to compile endpoint
        axios.post("https://violet-panther-robe.cyclic.app/compile", {
            code: userCode,
            language: userLang,
            input: userInput
        }).then((res) => {
            if (res.data.status === 200) {
                setLoading(false);
            }
            else if (res.data.status === 404) {
                swal("Oops!", "No Uuer found", "error");
            }
            else if (res.data.status === 500) {
                swal("Oops!!", "Please check the credentials", "error");
            }
            else {
                swal("Oops!!", "Site Error", "error");
            }
            setUserOutput(res.data.output);
        }).catch((err) => {
            console.log(err);
            swal("Oops!", "Something went wrong", err);
        })

        // Set output to response data

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