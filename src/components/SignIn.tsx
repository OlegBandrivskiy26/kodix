// importing styles
import "../styles/signIn.css";
// reused styles from signUp.css
import "../styles/signUp.css";
// importing react, libraries and other...
import { TextField, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logedInProps, UserData } from "../services/types";

const SignIn: React.FC<logedInProps> = ({ setIsLogedIn }) => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const storedData = localStorage.getItem("userData");
  const userData: UserData = storedData
    ? JSON.parse(storedData)
    : { email: "", password: "", name: "", lastName: "" };

  const toggleSignIn = () => {
    if (
      enteredEmail === userData.email &&
      enteredPassword === userData.password
    ) {
      setIsLogedIn(true);
      navigate("/");
    } else {
      setErrorMessage("Incorrect password or email");
      setIsLogedIn(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <section className="signup">
      <div className="logo logo__signup"></div>
      <div className="form__container">
        <div className="signup__input__grp signin__input__grp">
          <div className="input__container">
            <h2 className="signup__input__title">Sign in</h2>
            <div className="input__grp input__grp__signin">
              <label>Email address</label>
              <TextField
                required
                id="outlined-required"
                label="Your email addres"
                className="input"
                onChange={(event) => setEnteredEmail(event.target.value)}
              />
            </div>
            <div className="input__grp input__grp__signin">
              <label>Password</label>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                className="input"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={(event) => setEnteredPassword(event.target.value)}
              />
            </div>
            <h4 className="green__link">Forgot password?</h4>
            <Button
              onClick={toggleSignIn}
              variant="contained"
              className="btn__signin"
              endIcon={<ArrowForwardIcon />}
            >
              Sign in
            </Button>
            {errorMessage && <h5 className="error">{errorMessage}</h5>}
            <NavLink className="link" to="/sign-up">
              Already have an account? <span>Sign Up</span>
            </NavLink>
          </div>
        </div>
        <div className="signup__info__grp">
          <div className="signin__info__container">
            <div className="info__logo__grp">
              <h1>Kodix</h1>
              <div className="icon__pro">
                <h5>PRO</h5>
              </div>
            </div>
            <p>
              Unlimited traffic, strategic <br /> support, and AI-driven upsells
            </p>
            <h4>Learn More</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
