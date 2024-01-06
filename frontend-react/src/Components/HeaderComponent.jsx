import { Link } from "react-router-dom"
import { useAuth } from "../SecurityContext/AuthContext"

export default function HeaderComponenet(params) {
    const AuthContext = useAuth()
    function logout() {
        logout()
    }

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand ms-2 fs-2 fw-bold text-black" to="/welcome">TaskTracker</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                <Link className="nav-link" to="/tasks">Tasks</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                          {!AuthContext.isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}
                        </li>
                        <li className="nav-item fs-5">
                        {AuthContext.isAuthenticated && <Link className="nav-link" to="/logout" onClick={logout} >Logout</Link>}
                            </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    )
    
}