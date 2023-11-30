import LiveChat from "../assets/Images/liveChat.png"
import Conversation from "../assets/Images/conversacion.png"

const ContactCards = () => {
    return (
        <>

            <div>

                <div className="d-flex justify-content-center bg-primary-subtle container">
                    <div className="text-center p-3">
                        <img src={LiveChat} alt="" className="img-fluid w-50" />
                        <h2 className="text-primary ">Live Chat</h2>
                        <p className="text-bold">Average Response Time During Business Hours: 2 Minutes</p>
                        <span>Monday - Friday 9am - 4pm MST</span><br />
                        <span>Saturday - Closed </span><br />
                        <span>Sunday - Closed</span>

                    </div>


                    <div className="text-center p-3">
                        <h2>Conversation On The Go</h2>
                        <img src={Conversation} alt="" className="img-fluid w-50" />
                        <h2 className="text-primary">Text Us (800)350-4170</h2>
                        <p className="text-bold">Average Response Time During Business Hours: 2 Minutes</p>
                        <span>Monday - Friday 9am - 4pm MST</span><br />
                        <span>Saturday - Closed </span><br />
                        <span>Sunday - Closed</span>

                    </div>


                </div>

            </div>

        </>
    )
}
export default ContactCards;