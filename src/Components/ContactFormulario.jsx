import { useState } from "react";

const ContactFormulario = () => {

    const [formulario, setFormulario] = useState({
        name: "",
        correo: "",
        numero: "",
        description: "",
        subject: "",

    });
    const { name, correo, numero, description, subject } = formulario;


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        // const { name, description, state } = e.target;
        setFormulario({
            ...formulario, [e.target.name]: e.target.value,
        });
    }


    return (
        <>

            <div className="container mt-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-5  shadow-lg">
                    <div className="container col-sm-5 bg-light mb-5">
                        <form className="" onSubmit={(e) => handleSubmit(e)}>
                            <div className="border border-light-subtle">
                                <h2>Contact Us</h2>
                            </div>
                            <label htmlFor="email" className="form-label">
                                Full name
                            </label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="form-control mb-2"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                required
                            />




                            <label htmlFor="email" className="form-label">
                                Email:
                            </label>
                            <input

                                type="text"
                                placeholder="your@email.com"
                                className="form-control mb-2"
                                name="correo"
                                value={correo}
                                onChange={handleChange}
                                required
                            />


                            <label htmlFor="number" className="form-label">
                                Number:
                            </label>
                            <input
                                type="number"
                                placeholder="Phone"
                                className="form-control mb-2"
                                name="numero"
                                value={numero}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="number" className="form-label">
                                Message:
                            </label>
                            <textarea
                                name="description"
                                placeholder="Write your message"
                                value={description}
                                className="form-control mb-2"
                                onChange={handleChange}
                            >
                            </textarea>


                            <label htmlFor="option" className="form-label">
                                Subject:
                            </label>
                            <select
                                className="form-control mb-2"
                                name="subject"
                                value={subject}
                                onChange={handleChange}

                            >
                                <option value="selected">Selection options</option>
                                <option value="pendiente">PENDIENTE</option>
                                <option value="completado">COMPLETADO</option>

                            </select>


                            <br />
                            <div className="container text-center d-grid gap-3 mb-3">
                                <button type="submit" className="btn btn-dark  mx-auto  w-100 text-center ">Send</button>
                            </div>
                        </form >
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactFormulario;