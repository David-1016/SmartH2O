const Mensaje = () => {
    return (
        <>
            <div className="">
                <div className="alert alert-primary alert-dismissible fade show bg-white text-center" role="alert">
                    Unidos por un <span className="badge bg-secondary">MEJOR</span>  mañana.
                    <button type="button" className="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

            </div>

<hr  className="mt-0"/>
            <div className="d-flex bg-white ">
                <div>
                    <h5 >AYUDA A CAMBIAR VIDAS CON  <span className=" badge bg-primary fw-bold">SMARTH2O</span></h5>
                </div>
                <div className="dropdown ms-auto ">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent text-dark border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        LatinoAmerica
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Estados Unidos</a></li>
                        <li><a className="dropdown-item" href="#">Europa</a></li>
                        <li><a className="dropdown-item" href="#">Asia</a></li>
                    </ul>
                </div>
            </div>
            <hr className="my-0" />


        </>
    )
}
export default Mensaje;