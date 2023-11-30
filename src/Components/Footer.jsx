import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <div>

                <div className="container">
                    <footer className="py-3 my-4">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3 text-white">
                            <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to="/about">About Us</Link></li>
                            <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to="/blog">Blog</Link></li>
                            <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to="/contact">Contact</Link></li>
                            <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to="/technology">Technology</Link></li>

                        </ul>
                        <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
                    </footer>
                </div>




            </div>


        </>
    )
}
export default Footer;