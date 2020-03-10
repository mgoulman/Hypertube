import React from 'react';
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';
import RegisterContainer from '../containers/Register';
import loginContainer from '../containers/Login';
import NotFoundPage from '../components/NotFoundPage';
import ForgotPasswordContainer from '../containers/sendEmail';
import EmailConfirmCont from '../containers/emailConfirmation';
import ResetPasswordContainer from '../containers/resetPassword';
import HomeContainer from '../containers/Home';
import omniAuth from '../containers/Login/omniAuth';


const Routes = (props) => {
    const {user} = props;
    return (
        <>
            <Switch>
                <Route exact path="/confirmation/:token"  component={user === null ? EmailConfirmCont : HomeContainer}/>
                <Route exact path="/resetPassword/:token"  component={user === null ? ResetPasswordContainer : HomeContainer}/>
                <Route exact path="/forgotPassword"  component={user === null ? ForgotPasswordContainer : HomeContainer}/>
                <Route exact path="/register"  component={user === null ? RegisterContainer : HomeContainer} />
                <Route exact path="/login"  component={user === null ? loginContainer : HomeContainer}/>
                <Route path="/omniAuth/:token" component={omniAuth}/>
                <Route exact path="/"  component={user !== null ? HomeContainer : loginContainer}/>
                <Route path="" component={NotFoundPage}/>
            </Switch>
        </>
    )
}
const mapStateToProps = (state) => (
{
    'user': state.user,
});
export default connect(mapStateToProps)(Routes);