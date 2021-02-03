import WomanFace1 from '../img/woman-face.png';
import WomanFace2 from '../img/woman-face-2.png';

const Resdev = () => {
    return (
        <section className="container-rd" id="container-rd">
            <div className="rd-now-future">
                <h2 className="medium-title--text">Research & Development</h2>
                <div className="rd-now">
                    <div className="rd-now--text-container">
                        <h3 className="rd-now--h3-text">What can You do now?</h3>
                        <ul className="rd-now--list">
                            <li className="rd-now--list-point">Adjust sex</li>
                            <li className="rd-now--list-point">Adjust age</li>
                            <li className="rd-now--list-point">Adjust hair length</li>
                        </ul>
                    </div>
                    <div className="rd-now--img-container">
                        <img className="white-woman" src={WomanFace1} alt="blonde woman's face" />
                    </div>
                </div>
                <div className="rd-future">
                    <div className="rd-future--img-container">
                        <img className="asian-woman" src={WomanFace2} alt="asian woman's face" />
                    </div>
                    <div className="rd-future--text-container">
                        <h3 className="rd-future--h3-text">Future potential</h3>
                        <p className="rd-future--text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis eveniet
                            laborum modi numquam quibusdam repudiandae! Assumenda doloribus, esse iure nam neque nisi
                            nostrum nulla possimus quae recusandae velit, veritatis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resdev;