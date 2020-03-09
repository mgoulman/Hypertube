import React  from 'react';
import { Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MyFlash from '../commun/flash';
import renderField from '../commun/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import Divider from '@material-ui/core/Divider';
import { MDBIcon } from "mdbreact";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles(theme => ({
  
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#3E51B5',
  },
  img:{
    width: 50,
    height: 50,
  }
}));

const Login = (props) => {
  const {handleSubmit, status, errors, registredStatus} = props;
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
    {registredStatus === 'success' && <MyFlash variant="success" msg={['Registred successfully, check your e-mail']}/>}
    {status === "errorField" && <MyFlash variant="error" msg={[errors]}/>}
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
            <LockRoundedIcon />
          </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Sign in
        </Typography>
        
        <form  className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <Field
                name="username"
                label="Username"
                type = "text"
                component={renderField}
            />
            </Grid>
            <Grid item xs={12}>
            <Field
              name="password"
              type="password"
              component={renderField}
              rows='1'
              label="Password"
            />
            </Grid>
            <Grid item xs={12}>
              <Button  onClick={handleSubmit}  fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Submit</Button>
            </Grid>
          </Grid>
        </form>   
        <Grid container justify="flex-end">
          <Grid item xs>
              <Link to="/forgotPassword"  style={{textDecoration: 'none', color:'#3f51b5'}}>
                  Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" style={{textDecoration: 'none', color:'#3f51b5'}}>
                  Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
            <div>
              <Button><FacebookIcon style={{width: '50', height: '50'}}/></Button>
              <Button><GitHubIcon style={{width: '50', height: '50'}}/></Button>
              <Button><TwitterIcon style={{width: '50', height: '50'}}/></Button>
              <Button ><img className={classes.img} src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png'/></Button>
              <Button ><img className={classes.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/42_Logo.svg/1200px-42_Logo.svg.png'/></Button>
              <MDBIcon fab icon="google" />
            </div>
      </div>
    </Container>
  );
}

export default Login;