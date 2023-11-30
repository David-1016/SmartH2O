import ContactCards from "../Components/ContactCards";
import ContactFormulario from "../Components/ContactFormulario";
import ContactLogin from "../Components/ContactLogin";
import ContactText from "../Components/ContactText";
import "../app.css"

const Contact = () => {
    return (
        <>
        <br />
            <ContactText />
            <ContactCards />
            <ContactFormulario />
            <ContactLogin />
        </>
    )
}
export default Contact;