import React, { useRef } from 'react'
import ManyFaces from '../img/smiling-faces-happy-group.jpg';

const Moreinfo = () => {
    const imageRef = useRef();

    function handleButtonClick () {
        imageRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="container">
            <div className="encourage-to-know">
                <h1>discover Facé</h1>
                <p>Our algorithm will generate a Human according to the parameters you choose</p>
                <div className="know-more">
                    <button type="button" className="know-more--btn" onClick={handleButtonClick}>
                        Find out more
                    </button>
                </div>
                {/*// <!-- przewijanie w prawo automatycznie -->*/}
                <img ref={imageRef} src={ManyFaces} alt="faces"
                     className="many-faces" id="many-faces" />
            </div>
        </section>
    );
}

export default Moreinfo;