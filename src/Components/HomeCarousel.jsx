
import Img3 from "../assets/Images/NiñosConBalde.jpg"

const HomeCarousel = () => {
    return (
        <>
            <div>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://img.freepik.com/free-photo/washing-hands-soap-prevent-diseases_1150-28351.jpg?size=626&ext=jpg" className="rounded w-100" style={{ height: '80vh' }} alt="..." />
                            <div className="carousel-caption d-none d-md-block text-dark">
                                <h5>Water Crisis</h5>
                                <p className="font-weight-bold">Potable water scarcity is a global threat. Learn how we're addressing this challenge.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://img.freepik.com/foto-gratis/reflejo-montana-sobre-aguas-tranquilas-al-atardecer-generado-ia_188544-27887.jpg?w=1060&t=st=1701317547~exp=1701318147~hmac=e676cca01c7bf14af9ec8ea15b235907f4b490edf87f6f018c6da17258590d40" className="d-block w-100" style={{ height: '80vh' }} alt="..." />
                            <div className="carousel-caption d-none d-md-block text-dark">
                                <h5 className="text-light">Environmental Impact</h5>
                                <p className="text-light">Discover how our purification solutions contribute to reducing environmental impact and preserving natural resources.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Img3} className="d-block w-100" style={{ height: '80vh' }} alt="..." />
                            <div className="carousel-caption d-none d-md-block text-dark">
                                <h5>Social Commitment</h5>
                                <p>Learn how we conduct donation drives to provide access to clean water in communities in need.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


        </>
    )
}
export default HomeCarousel;