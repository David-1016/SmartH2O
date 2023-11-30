import Img1 from "../assets/Images/NiñoAfricano.jpg"

const Stretched = () => {
    return (
        <>
            <div className="row g-0 bg-body-secondary position-relative">
                <div className="col-md-6 mb-md-0 p-md-4">
                    <img src={Img1} className="w-100" alt="..." />
                </div>
                <div className="col-md-6 p-4 ps-md-0 d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <h5 className="mt-0 fs-2">Unsafe water, sanitation and hygiene: a persistent health burden</h5>
                        <p className="fs-4">An editorial in the September 2023 WHO Bulletin highlights the persistent health risks of inadequate water, sanitation and hygiene (WASH). WHO estimates that up to 1.4 million deaths annually could be averted with better access to these essential services.</p>
                        <a href="/contact" className="stretched-link"></a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Stretched;