import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Layout = () => {
    // const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning  text-black text-capitalize mb-5">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/Login" >Authentication</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" >Login </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/createAccount" >Create Account</Link>
                            </li> */}
                            {/* {isAuthenticated &&
                                <li>
                                    <img src={user.picture} alt={user.name} />
                                    <h2>{user.name}</h2>
                                    <p>{user.email}</p>
                                </li>
                            }

                            {isAuthenticated ?
                                <li className="nav-item">
                                    <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
                                </li> :
                                <li className="nav-item">
                                    <button onClick={() => loginWithRedirect()}>Log In</button>
                                </li>
                            } */}

                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
};

export default Layout;