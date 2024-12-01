// importing styles 
import "../styles/signUp.css"
// importing react, libraries and other...
import { TextField, Button } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isLogedInProps } from "../services/types";

const SignUp: React.FC<isLogedInProps> = ({isLogedIn, setIsLogedIn}) => {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigate = useNavigate();

    const toggleSignUp = () => {
        const isValid = email.includes("@") && password.length >= 8;
        if(isValid){
            setIsLogedIn(true);
            const userData = {
                email,
                password,
                name,
                lastName,
            }
            localStorage.setItem('userData', JSON.stringify(userData));
            navigate("/sign-in");
        }else{
            setErrorMessage("The password or email address entered is incorrect.")
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    }
  return (
    <section className="signup">
        <div className="logo logo__signup"></div>
        <div className="form__container">
            <div className="signup__input__grp">
                <div className="input__container">
                    <h2 className="signup__input__title">Sign up</h2>
                    <div className="input__grp">
                        <label >Email address</label>
                        <TextField required 
                        id="outlined-required" 
                        label="Your email addres" 
                        className="input"
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="inputs__grp">
                        <div className="input__grp__small">
                            <label >First name</label>
                            <TextField 
                            required 
                            id="outlined-required" 
                            label="Your first name" 
                            className="input__small"
                            onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="input__grp__small">
                            <label >Last name</label>
                            <TextField 
                            required 
                            id="outlined-required" 
                            label="Your last name" 
                            className="input__small"
                            onChange={(event) => setLastName(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input__grp">
                        <label >Password</label>
                        <TextField
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        className="input"
                        fullWidth
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                onClick={togglePasswordVisibility}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <h4 className="green__link">Forgot password?</h4>
                    <Button  onClick={toggleSignUp} variant="contained" className="btn__signin" endIcon={<ArrowForwardIcon/>}>
                        Sign in
                    </Button>
                    {errorMessage && (
                        <h5 className="error">{errorMessage}</h5>
                    )}
                    <NavLink className="link" to="/sign-in">Already have an account? <span>Sign In</span></NavLink>
                </div>
            </div>
            <div className="signup__info__grp">
                <div className="signup__info__container">
                    <h1 className="info__title">Get Your FREE <br /> 30-Days Trial Now!</h1>
                    <div className="info__txt__container">
                        <div className="info__txt">
                            <div className="icons dolar__icon"></div>
                            <div className="info__txt__grp">
                                <h3>Absolutely FREE</h3>
                                <p>No hidden charges, No credit <br /> card required</p>
                            </div>
                        </div>
                        <div className="info__txt">
                            <div className="icons block__icon"></div>
                            <div className="info__txt__grp">
                                <h3>Fast & Easy</h3>
                                <p>Get access instantly, no <br /> downloads required</p>
                            </div>
                        </div>
                        <div className="info__txt">
                            <div className="icons man__icon"></div>
                            <div className="info__txt__grp">
                                <h3>Your Own Data</h3>
                                <p>Enjoy the Free Trial with your <br /> company data</p>
                            </div>
                        </div>
                        <div className="info__txt">
                            <div className="icons star__icon"></div>
                            <div className="info__txt__grp">
                                <h3>Unlimited Features</h3>
                                <p>Access all features of the <br /> world's #1 business software!</p>
                            </div>
                        </div>
                    </div>
                    <h3 className="callus">Call us at <span> 800 1301 448</span></h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SignUp
