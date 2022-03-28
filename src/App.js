import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
    
    const { user } = useAuthListener();

    // function RequireAuth({ children, redirectTo, user }) {
    //     return user ? children : <Navigate to={redirectTo} />;
    // }

    return (
        // <Router>
        //     <Routes>

        //         <Route path={ROUTES.HOME} element={<Home />} />
        //         <Route 
        //             path={ROUTES.SIGN_IN} 
        //             element={user ? <Browse/> : <Signin />}
        //         />
        //         <Route 
        //             path={ROUTES.SIGN_UP} 
        //             element={user ? <Browse/> : <Signup />}
        //         />
        //         <Route 
        //             path={ROUTES.BROWSE} 
        //             element={
        //                 <RequireAuth redirectTo={ROUTES.SIGN_IN} user={user}>
        //                     <Browse />
        //                 </RequireAuth>
        //             }
        //         />

        //     </Routes>
        // </Router>


        <Router>
            <Switch>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                    <Signin />
                </IsUserRedirect>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                    <Signup />
                </IsUserRedirect>
                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse />
                </ProtectedRoute>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                    <Home />
                </IsUserRedirect>
            </Switch>
        </Router>
    );
}