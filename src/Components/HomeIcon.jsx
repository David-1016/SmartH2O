import img1Home from "../assets/Images/gifHome.gif"
import img2Home from "../assets/Images/contactos.gif"
import img3Home from "../assets/Images/robot.gif"

const HomeIcon = () => {
    return (
        <>
            <div className="home-icon">
                <div className="row">
                    <div className="col-lg-4 mx-auto d-flex align-items-center">
                        <img src={img1Home} alt="" width="140" height="140" />
                        <div className="ms-3">
                            <h2 className="fs-5 badge bg-dark">About Us</h2>
                            <p>We are a company dedicated to the purification and filtration of water, and we also strive to help those in need. If you want to know more, click here.</p>
                            <p><a className="btn btn-primary" href="/about">View details »</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 mx-auto d-flex align-items-center">
                        <img src={img2Home} alt="" width="140" height="140" />
                        <div className="ms-3">
                            <h2 className="fs-5 badge bg-dark">Contact</h2>
                            <p>To contact us for more information about our water purification and filtration products and services, please click here.</p>
                            <br />
                            <p><a className="btn btn-primary" href="/contact">View details »</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 mx-auto d-flex align-items-center">
                        <img src={img3Home} alt="" width="140" height="140" />
                        <div className="ms-3">
                            <h2 className="fs-5 badge bg-dark">Technology</h2>
                            <p>We explore innovative technologies to take water purification and filtration to new levels. Our advanced systems employ cutting-edge technology to ensure an efficient solution.</p>
                            <p><a className="btn btn-primary" href="/technology">View details »</a></p>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="text-center">
                        <h1 className="fs-5">Give the confidence</h1>
                        <br />
                        <img className="w-50 mx-auto" src="https://cw-contentful-assets.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fwvozpes63uc8%2F5H5cMMlhBltKlHnzL6pBFk%2F8e8a9357e302adf063cea6988083a2db%2Ftrust-banner.png?ixlib=rails-4.1.0&auto=format&w=1436&fm=png&s=d5a7232baa71d72b3b7e56e4d9aef5fe" alt="" />
                    </div>

                </div>
            </div>



        </>
    )
}
export default HomeIcon;