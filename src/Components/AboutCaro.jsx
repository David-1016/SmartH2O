import aboutCaro from "../assets/Images/aboutCaro.jpg"

const AboutCaro = () => {
    return (
        <>



            <div>
                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-light">
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3" src={aboutCaro} alt="" width="500" />
                        </div>
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Explore Who We Are</h1>
                            <p className="lead">Dive into our story, values, and the team behind SmartH2O.
                                If you have any questions or just want to say hello, we're here for you.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <a href="/contact" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Contact Us</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </>
    )

}
export default AboutCaro;