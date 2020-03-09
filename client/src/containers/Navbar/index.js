import React, {useState} from 'react';
import {connect} from "react-redux";
import {LogoutAction} from '../../actions/logoutAction';
import NavBar from '../../components/NavBar';
import MyModal from "../../components/commun/modal";
import Profile from '../../containers/Profile';

const NavBarContainer = (props) => {
    const {user, handleLogout} = props;
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleProfileOpen = () => {
        setOpen(true);

    }
    return(
        <>
            <NavBar handleProfileOpen={handleProfileOpen} handleLogout={handleLogout} user={user} />
            {open && <MyModal isOpen={open}  handleClose={handleClose}>
                <Profile   user={user} />
            </MyModal>}
        </>
    )
}

const mapStateToProps = (state) => (
{
    "user" : state.user,
});
const mapDispatchToProps = {
    "logoutAction": LogoutAction,
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleLogout" : () => {
        dispatchProps.logoutAction();
    }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(NavBarContainer);
 