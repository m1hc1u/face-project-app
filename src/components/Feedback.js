const Feedback = () => {
    return (
        <section className="container-contact-feedback" id="container-contact-feedback">
            <div className="medium-title--text"><h2>Constructive Feedback from You</h2></div>
            <form className="form-feedback">
                <div className="form-feedback--info">
                    <label className="form-feedback--info-text" htmlFor="e-mail">e-mail</label>
                    <input id="e-mail" className="form-input e-mail" type="email" />
                </div>
                <div className="form-feedback--info">
                    <label className="form-feedback--info-text" htmlFor="feedback">your feedback</label>
                    <input id="feedback" className="form-input feedback" type="text" />
                </div>
                <a className="form-feedback--btn" href="#">Send</a>
            </form>
        </section>
    );
}

export default Feedback;