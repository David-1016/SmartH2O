import HombreAgua from "../assets/Images/HombreAgua.jpg"

const HomeCards = () => {
    return (
        <>
            <div>


                <div>

                    <div className="card-group">

                        <div className="card">
                            <img src={HombreAgua} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Fundraise for clean water
                                </h5>
                                <p className="card-text">Creating a campaign helps raise money for clean water projects for people in need.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://img.freepik.com/foto-gratis/ninos-africanos-tiro-completo-jugando-juntos_23-2148860432.jpg?w=996&t=st=1701311560~exp=1701312160~hmac=ccc0c7c996b1b5647ab1d5924024734ad192881882537254f85b880f0f89bece" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Sponsor a water project
                                </h5>
                                <p className="card-text">Transform an entire community, school, or health clinic. with a gift of $10,000 or more.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>


                </div>


            </div>




        </>
    )
}
export default HomeCards;