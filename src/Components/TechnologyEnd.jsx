import logo from "../assets/Images/GrifoFavi.jpg"

const TechnologyEnd = () => {
    return (
        <>
            <div>
                <div className="px-4 py-5 my-5 text-center">
                    <img className="d-block mx-auto mb-4" src={logo} alt="" width="72" height="57" />
                    <h1 className="display-5 fw-bold text-body-emphasis">Empower Your Life with SmartH2O</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">As we conclude this journey, SmartH2O invites you to empower your life. Our revolutionary water purification system isn't just a product; it's a transformative experience. Embrace a life where clean, refreshing water meets innovative design, and where sustainability intertwines with elegance. With SmartH2O, every drop tells a story of purity, sophistication, 
                        and a commitment to a brighter, hydrated future. Make the smart choice. Make it SmartH2O.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <a href="/" type="button" className="btn btn-primary btn-lg px-4 gap-3 fw-bold">Home</a>
                            <a href="/Contact" type="button" className="btn btn-outline-secondary btn-lg px-4 fw-bold">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TechnologyEnd;