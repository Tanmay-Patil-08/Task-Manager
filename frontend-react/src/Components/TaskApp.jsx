
import React from 'react';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import WelcomeComponent from './WelcomeComponent';
import ListTaskComponent from './ListTaskComponent';
import TaskUpdateCreateComponent from './TaskUpdateCreateComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import ErrorComponent from './ErrorComponent';
import HeaderComponenet from './HeaderComponent';
import { useAuth } from '../SecurityContext/AuthContext';
import { Navigate } from 'react-router-dom';
import AuthProvider from '../SecurityContext/AuthContext';



function AuthenticationRoute({ children }) {
    const authContext = useAuth()
    if (authContext.isAuthenticated) { return children }
    else {
        return <Navigate to="/" />
    }

}


export default function PatientsApp(){
    return (
        
        <div className='PatientsApp'>
            <AuthProvider>
        <BrowserRouter>
        <HeaderComponenet/>

        <Routes>

                    <Route path="/welcome" element={<AuthenticationRoute><WelcomeComponent/></AuthenticationRoute>} />
                    <Route path="/tasks" element={<AuthenticationRoute><ListTaskComponent/></AuthenticationRoute>} />
                    <Route path="/task/:id" element={<AuthenticationRoute><TaskUpdateCreateComponent/></AuthenticationRoute>} />

                    <Route path="/" element={<LoginComponent/>} />
                    <Route path="/login" element={<LoginComponent/>} />
                    <Route path="/logout" element={<LogoutComponent/>} />


                    <Route path="*" element={<ErrorComponent/>} />

        </Routes>
        </BrowserRouter>
        </AuthProvider>
        </div>
    )
}

