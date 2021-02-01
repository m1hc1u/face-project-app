// import ScrollDown from 'ScrollDown';

const Moreinfo = () => {
    return (
        <section className="container">
            <div className="encourage-to-know">
                <h1>discover Facé</h1>
                <p>Our algorithm will generate a Human according to the parameters you choose</p>
                <div className="know-more">
                    <button type="button" className="know-more--btn"
                            onClick="smoothScroll(document.getElementById('many-faces'))">
                        Find out more
                    </button>
                </div>
                {/*// <!-- przewijanie w prawo automatycznie -->*/}
                <img src="/src/img/smiling-faces-happy-group.jpg" alt="faces"
                     className="many-faces" id="many-faces" />
            </div>
        </section>
    );
}

export default Moreinfo;