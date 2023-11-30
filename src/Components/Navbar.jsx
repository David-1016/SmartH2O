import { Link } from "react-router-dom";
import Logo from "../assets/Images/GrifoFavi.jpg"

const Navbar = () => {
    return (
        <>


            <div className=" text-center"> {/* Añadido container-fluid y text-center */}
                <nav className="navbar navbar-expand-lg bg-light border-bottom border-body" data-bs-theme="light">
                    <div className="container">
                        <Link className="navbar-brand d-flex align-items-center text-black fw-bold" to="/">
                            <img src={Logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
                            <span className="badge text-black">SmartH2O</span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto ms-auto"> {/* Cambiado a ms-auto */}
                                <li className="nav-item">
                                    <Link className="nav-item nav-link link-body-emphasis mx-3 my-2" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-item nav-link link-body-emphasis mx-3 my-2" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-item nav-link link-body-emphasis mx-3 my-2" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-item nav-link link-body-emphasis mx-3 my-2" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-item nav-link link-body-emphasis mx-3 my-2" to="/technology">Technology</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2 bg-primary " style={{ color: 'blue' }} type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary  " type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                
            </div>



        </>
    )
}
export default Navbar;