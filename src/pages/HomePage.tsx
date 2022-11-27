import React from "react";
import { useAuth } from "../hook/useAuth";
import {removeUser} from '../store/slices/userSlice'
import {useAppDispatch} from '../hook/redux-hooks';
import { Navigate } from "react-router-dom";
import { Button } from "@mui/material";

function HomePage() {
    const dispatch = useAppDispatch();

    const {isAuth, email} = useAuth();

    return isAuth ? (
        <div>
            <h1>Welcome {email}</h1>

            <Button variant="contained"
                onClick={()=> dispatch(removeUser())}
            >Log out</Button>
        </div>
    ) : (
        <Navigate to="/signin" />
    )
}

export default HomePage;
