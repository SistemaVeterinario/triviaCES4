import React, { Fragment, useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LoginContext from "../context/Login/loginContext";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">Poli JIC</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 400,
        margin: 0,
        marginBottom: 10
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Login = (props) => {
  const classes = useStyles();

const loginContext = useContext(LoginContext);
const {saveUser} = loginContext;

  const [user, setUser] = useState({
       userName: '',
       category:'',
       difficulty: ''
  });

  const {userName,category, difficulty} = user;  

  const onSubmit = e => {
      e.preventDefault();
      saveUser(user);
      props.history.push('/home');
  }

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
        ...user,
        [name]: value
    })
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Open Trivia
        </Typography>
        <form 
        onSubmit={onSubmit}
        className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User"
            name="userName"
            autoFocus
            value={userName}
            onChange={handleChange}
          />
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Category*</InputLabel>
            <Select
              required
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              onChange={handleChange}
              value={category}
              name="category"
            >
              <MenuItem value={21}>Sports</MenuItem>
              <MenuItem value={9}>General Knowledge</MenuItem>
              <MenuItem value={14}>Entertainment: Television</MenuItem>
              <MenuItem value={18}>Science: Computers</MenuItem>
              <MenuItem value={20}>Mythology</MenuItem>
              <MenuItem value={24}>Politics</MenuItem>
              <MenuItem value={12}>Entertainment: Music</MenuItem>
              <MenuItem value={22}>Geography</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Difficulty*</InputLabel>
            <Select
              required
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              onChange={handleChange}
              value={difficulty}
              name="difficulty"
            >
              <MenuItem value={"any"}>Any Difficulty</MenuItem>
              <MenuItem value={"easy"}>Easy</MenuItem>
              <MenuItem value={"medium"}>Medium</MenuItem>
              <MenuItem value={"hard"}>Hard</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Login;
