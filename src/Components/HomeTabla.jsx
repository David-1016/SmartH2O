const HomeTabla = () => {
    return (
        <>



            <div className="container mt-5">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Country</th>
                            <th scope="col">Affected People</th>
                            <th scope="col">Actions Taken</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-active">
                            <th scope="row">1</th>
                            <td>Global</td>
                            <td>Several billion</td>
                            <td>International awareness campaigns and sustainable water management initiatives.</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>India</td>
                            <td>120 million</td>
                            <td>Awareness programs and well drilling projects.</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2" className="table-active">Sub-Saharan Africa</td>
                            <td>Projects for access to clean water and infrastructure development.</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Brazil</td>
                            <td>50 million</td>
                            <td>Community-based water conservation programs and river cleanup initiatives.</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>China</td>
                            <td>80 million</td>
                            <td>Government-led water purification projects and pollution control measures.</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <br />
            <hr />
            <div className="text-center mt-5">
                <h1 className="fw-bold">Change Starts with Each of Us</h1>
                <p>If you want to contribute to your community or become part of our team, don't hesitate to get in touch with us.</p>
                <p><a className="btn btn-primary" href="/contact">CONTACT US »</a></p>

                <h2 className="badge bg-primary mt-3">IT TAKES ALL OF US IF WE WANT REAL CHANGE</h2>
            </div>


        </>
    )
}
export default HomeTabla;