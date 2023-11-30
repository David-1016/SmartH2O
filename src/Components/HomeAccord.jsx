

const HomeAccord = () => {
    return (
        <>

<div>
    <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed text-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    The Global Water Crisis
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    Currently, millions of people worldwide lack access to clean water. Water scarcity is a global crisis that affects health, economic development, and overall well-being. [Product Name] stands as a direct response to this issue, offering a tangible and effective solution.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Impact on Health and Communities
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    Consumption of contaminated water can have devastating consequences for health. <code>SmartH2O</code> not only aims to provide safe water but also to improve community health by reducing water-related diseases. Join us on this journey to make access to clean water a reality for everyone.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Why Water is Essential
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    Water is a fundamental resource for life. It plays a crucial role in various bodily functions, agriculture, and overall ecosystem balance. Ensuring access to clean water is not only a matter of survival but also vital for sustainable development and the well-being of communities worldwide.
                </div>
            </div>
        </div>
    </div>
</div>


        </>

    )
}
export default HomeAccord;