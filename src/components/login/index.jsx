import React from 'react'
import { Link } from "react-router-dom";

const Login = props => (
    <div>
        <p>Login</p>
        <Link to="/Dashboard">
            <input type="submit" className="form__btnsubmit" name="submit" value="SIGN IN" />
        </Link>
    </div>
)

export default Login