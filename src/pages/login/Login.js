import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
} from "@material-ui/core";
import { toast, ToastContainer } from "react-toastify";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import useStyles from "./styles";
import maui from "../../images/MAUI-mark.svg";
import google from "../../images/google.svg";
import { loginUser, registerUser } from "../../actions/userAction";
import { validateEmail } from "../../common/validate";

function Login(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTabId, setActiveTabId] = useState(0);
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const clearError = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };
  return (
    <Grid container className={classes.container}>
      <ToastContainer />
      <div className={classes.logotypeContainer}>
        <img src={maui} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Welcome</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => {
              clearError();
              setActiveTabId(id);
            }}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            <Tab label="New User" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Hello
              </Typography>
              <Button size="large" className={classes.googleButton}>
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                error={!!emailError}
                label={emailError}
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                error={!!passwordError}
                label={passwordError}
                fullWidth
              />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={
                      loginValue.length === 0 || passwordValue.length === 0
                    }
                    onClick={() => {
                      if (!validateEmail(loginValue)) {
                        setEmailError("Invalid Email");
                        return;
                      }
                      if (passwordValue.length < 5) {
                        clearError();
                        setPasswordError("Password must be at least 5 letters");
                        return;
                      }
                      setIsLoading(true);
                      clearError();
                      dispatch(
                        loginUser({
                          data: {
                            email: loginValue,
                            password: passwordValue,
                          },
                          fail: (err) => {
                            console.log("error", err, err.data.errors.msg);
                            setIsLoading(false);
                            toast.error(
                              err.data.errors.msg.replaceAll("_", " "),
                            );
                          },
                          success: () => {
                            toast.success("Login Success");
                            setIsLoading(false);
                          },
                        }),
                      );
                    }}
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Login
                  </Button>
                )}
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                >
                  Forget Password
                </Button>
              </div>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Welcome!
              </Typography>
              <Typography variant="h2" className={classes.subGreeting}>
                Create your account
              </Typography>
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                error={!!emailError}
                label={emailError}
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                error={!!passwordError}
                label={passwordError}
                fullWidth
              />
              <TextField
                id="confirmpassword"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={confirmPasswordValue}
                onChange={(e) => setConfirmPasswordValue(e.target.value)}
                margin="normal"
                placeholder="ConfirmPassword"
                type="password"
                error={!!confirmPasswordError}
                label={confirmPasswordError}
                fullWidth
              />
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                    onClick={() => {
                      if (!validateEmail(loginValue)) {
                        setEmailError("Email Invalid!");
                        return;
                      }
                      if (passwordValue.length < 5) {
                        clearError();
                        setPasswordError(
                          "Password must be at least 5 letters!",
                        );
                        return;
                      }
                      if (confirmPasswordValue === passwordValue) {
                        setIsLoading(true);
                        clearError();
                        dispatch(
                          registerUser({
                            data: {
                              email: loginValue,
                              password: passwordValue,
                            },
                            fail: (err) => {
                              setIsLoading(false);
                              toast.error(
                                err.data.errors.msg.replaceAll("_", " "),
                              );
                            },
                            success: () => {
                              toast.success("Register Success");
                              setIsLoading(false);
                            },
                          }),
                        );
                      } else {
                        clearError();
                        setConfirmPasswordError("Password doesn't match!");
                      }
                    }}
                    disabled={
                      loginValue.length === 0 ||
                      passwordValue.length === 0 ||
                      confirmPasswordValue.length === 0
                    }
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    Create your account
                  </Button>
                )}
              </div>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <Button
                size="large"
                className={classnames(
                  classes.googleButton,
                  classes.googleButtonCreating,
                )}
              >
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>
            </React.Fragment>
          )}
        </div>
        <Typography color="primary" className={classes.copyright}>
          © 2014-{new Date().getFullYear()}{" "}
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://flatlogic.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Flatlogic
          </a>
          , LLC. All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
