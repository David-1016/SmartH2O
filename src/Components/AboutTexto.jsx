import aboutImg1 from "../assets/Images/aboutImagen.jpg"

const AboutTexto = () => {
    return (
        <>
            <div className="container">
                <div className="">
                    <div className="">
                        <h1 className="fw-bold ">About SmartH2O</h1>
                        <p>
                            SmartH2O, based in <span className="badge bg-primary">TUNJA</span>,
                            is a pioneering enterprise dedicated to revolutionizing water purification.
                            Established with a mission to address the critical need for clean and accessible water,
                            SmartH2O has been a trailblazer since <span className="badge bg-primary">2022</span>. From
                            a small but ambitious team, our groundbreaking water purification system, SmartH2O, has evolved
                            to include cutting-edge filtration models. Our core principle is to ensure every customer is not just satisfied but delighted, fostering lasting relationships. The remarkable growth has led to multiple warehouse locations, skilled local talents, and innovative product lines. With an unwavering focus on superior products and service, SmartH2O stands as the definitive choice for water purification, shaping a brighter and healthier future.
                        </p>
                    </div>
                </div>
            </div>
            <br /><br /><br />

            <div className="d-flex justify-content-center">
                <img src={aboutImg1} alt="" className="w-50 h-75 " />
            </div>
            <br /><br /><br />
            <div className="container">
                <div className="">
                    <h1 className="fw-bold">SmartH2O Mision</h1>
                    <p>At SmartH2O, our mission is to provide innovative
                        solutions to address water scarcity in communities worldwide.
                        We are dedicated to purifying even the most contaminated water sources,
                        ensuring that every individual has access to safe drinking water. We tirelessly work
                        to empower communities, enhance health, and contribute to the global effort to overcome
                        water-related challenges. We believe in a future where equitable access to water is a reality for all,
                        and we are committed to leading the way
                        toward that vision through advanced technology, innovation, and an unwavering commitment to sustainability</p>
                    <br />
                    <h1 className="fw-bold">SmartH2O Purpose</h1>
                    <p>At SmartH2O, our purpose is to make clean water accessible to all. We are committed to purifying water, regardless of its source or contamination level, addressing global water scarcity, and improving the well-being of communities worldwide. With advanced technology and unwavering
                        dedication, we strive to create a healthier and more sustainable future for everyone through
                        <span className="badge bg-primary">SmartH2O</span></p>
                </div>
            </div>

        </>
    )
}
export default AboutTexto;