import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages'; 
import * as ROUTES from './constants/routes';
// import {IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {

    const { user } = useAuthListener();

    function RequireAuth({ children, redirectTo, user }) {
        // let isAuthenticated = getAuth();
        return user ? children : <Navigate to={redirectTo} />;
    }

    return (
        // OLD:
        // <Router>
        //     <Routes>
        //         <Route exact path="/browse" element={<Browse />} />
        //         <Route exact path="/signin" element={<Signin />} />
        //         <Route exact path="/signup" element={<Signup />} />
        //         <Route exact path={ROUTES.HOME} element={<Home />} />
        //     </Routes>
        // </Router>

        <Router>
            <Routes>

                <Route path={ROUTES.HOME} element={<Home />} />
                <Route 
                    path={ROUTES.SIGN_IN} 
                    element={user ? <Browse/> : <Signin />}
                />
                <Route 
                    path={ROUTES.SIGN_UP} 
                    element={user ? <Browse/> : <Signup />}
                />
                <Route 
                    path={ROUTES.BROWSE} 
                    element={
                        <RequireAuth redirectTo={ROUTES.SIGN_IN} user={user}>
                            <Browse />
                        </RequireAuth>
                    }
                />

            </Routes>
        </Router>
    );
}