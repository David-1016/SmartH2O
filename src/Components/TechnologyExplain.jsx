import img1 from "../assets/Images/img1Technology.jpg"
import img2 from "../assets/Images/img2Technology.jpg"
import img3 from "../assets/Images/img3Technology.jpg"


const TechnologyExplain = () => {
    return (
        <>
            <div>
                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-light">

                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">The Science Behind SmartH2O: A Brief Overview</h1>
                            <p className="lead">SmartH2O uses an advanced combination of water purification technologies to provide an effective and efficient solution.
                                Our system is based on reverse osmosis, a process that uses semi-permeable membranes to remove contaminants, impurities and microorganisms from the water. In addition, we incorporate intelligent sensors that constantly monitor water quality,
                                allowing automatic adjustments to ensure optimal performance.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3" src={img1} alt="" width="500" />
                        </div>

                    </div>

                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-light">
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3" src={img2} alt="" width="500" />
                        </div>
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Technological Core: The Invisible Revolution of SmartH2O</h1>
                            <p className="lead">"At the heart of SmartH2O is a revolutionary purification technology that redefines the standards of excellence. Our system uses a state-of-the-art nanostructured membrane,
                                inspired by the complexity and efficiency of the most advanced biological structures. This membrane, composed of state-of-the-art nanocomposite materials,
                                acts as an intelligent barrier that filters impurities from the water at the molecular level.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            </div>
                        </div>
                    </div>

                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-light">

                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Innovative Elegance in Water Purification</h1>
                            <p className="lead">SmartH2O redefines the landscape of water purification with its innovative and elegant design. Beyond the traditional confines of purification systems, our product introduces a new standard of sophistication. The sleek lines, thoughtfully crafted details, and modern aesthetic seamlessly integrate into any space, making SmartH2O not just a purifier but a design statement. Our commitment goes beyond functionality; it extends to the visual allure of a product that marries technology with elegance. Step into a world where water purification meets design innovation, and elevate your surroundings with SmartH2O's unparalleled blend of form and function.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3" src={img3} alt="" width="500" />
                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}
export default TechnologyExplain;