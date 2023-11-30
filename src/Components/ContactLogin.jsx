import { useState } from "react";

const ContactLogin = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email", email);
        console.log("Contraseña", password);

        const userData = {
            email: email,
            contrasena: password,
        };

        fetch("https://private-cd04eb-login664.apiary-mock.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else if (response.status === 401) {
                    return response.json();
                } else {
                    throw new Error("Error desconocido");
                }
            })

            .then((data) => {
                if (data.mensaje === "Inicio de sesión exitoso") {
                    if (
                        userData.email === "diego@santoto.edu.co" && userData.contrasena === "123456"
                    ) {
                        console.log("Inicio de sesión exitoso");
                    } else {
                        console.log("Inicio de sesión fallido: Datos incorrectos");
                    }
                } else if (data.mensaje === "Inicio de sesión fallido") {
                    console.log("Inicio de sesión fallido")
                } else {
                    console.log("Respuesta inesperada de la API");
                }
            })

            .catch((error) => {
                console.log("Hubo un error en la solicitud" + { error });
            });

    };




    return (


        <>

            <div className="container col-xl-10 col-xxl-8 px-4 py-5">

                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">

                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Access Your Account</h1>
                        <p className="col-lg-10 fs-4">Welcome back! Log in to access your account..</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">

                        <form onSubmit={handleSubmit}
                            className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                            <div className="form-floating mb-3">
                                <input type="email"
                                    id="email"
                                    className="form-control"
                                    value={email}
                                    placeholder="name@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password"
                                    id="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required
                                />

                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                            <hr className="my-4" />
                            <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactLogin;