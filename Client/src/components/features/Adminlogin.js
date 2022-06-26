import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Adminlogin.css";


const accounts = [{ username: "pavan", email: "p.com", pasword: "123" }]
export default function Adminlogin() {
    const initialValues = { username: "", email: "", password: "" };
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")
    const [formValues, setFormvalues] = useState(initialValues)
    const handleEmailChange = (e) => {
        setemail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setpassword(e.target.value)
    }
    const handleUsernameChange = (e) => {
        setusername(e.target.value)
    }
    const handleLogin = function () {
        const index = accounts.findIndex(acc => acc.username === formValues.username)
        if (accounts[index].email === formValues.email && accounts[index].password === formValues.passwords) {
            console.log("yes signed");
        }
    }

    return (
        <div className="form-container">
            <h1>Admin login</h1>
            <form className="form">
                <label> User Name</label>
                <input
                    type="text"
                    name="username"
                    placeholder="user Name"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={handleEmailChange}
                />

                <label>Password</label>
                <input
                    type="text"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button onClick={handleLogin}><Link to='/admin/dashboard'>submit</Link></button>
            </form>
        </div>
    )
}
