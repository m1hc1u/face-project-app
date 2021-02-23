import {useState} from "react";


const Feedback = () => {
    const [feedback, setFeedback] = useState('');

    const send = (e) => {
        e.preventDefault();
        console.log(feedback);
    }
    return (
        <section className="container-contact-feedback" id="container-contact-feedback">
            <div className="medium-title--text"><h2>Constructive Feedback from You</h2></div>
            <form className="form-feedback" onSubmit={send}>
                <div className="form-feedback--info">
                    <label className="form-feedback--info-text" htmlFor="e-mail">e-mail</label>
                    <input id="e-mail" className="form-input e-mail" type="email" />
                </div>
                <div className="form-feedback--info">
                    <label className="form-feedback--info-text" htmlFor="feedback">your feedback</label>
                    <input
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        id="feedback"
                        className="form-input feedback"
                        type="text"
                    />
                </div>
                <a className="form-feedback--btn" href="#">Send</a>
            </form>
        </section>
    );
}

export default Feedback;

//feedback formularzem kontrolowanym
//value, onchange, onstate