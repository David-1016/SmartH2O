import imagen from "../assets/Images/imagenContact.jpg"


const BlogHero = () => {
    return (
        <>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={imagen} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Stay updated with stories from our team</h1>
                        <p className="lead">Explore the latest stories, updates, and experiences shared by our team as we work towards a better future.</p>

                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogHero;