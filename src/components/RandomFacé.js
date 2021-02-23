import React from 'react';
import {useState} from "react";

//prosimy uzytkowanika o opcje

const RandomFacé = () => {
    const [face, setFace] = useState('');
    const [eye, setEye] = useState('');
    const generateFace = () => {
        let url = `https://api.generated.photos/api/v1/faces?per_page=1`;
        if(eye) {
            url += `?eye_color=${eye}`
        }
        fetch(url, {
            headers: {
                Authorization: 'API-Key GkWzZRe_DY7PteRqi_cyfA'
            }
        })
            .then(res => res.json())
            .then(photos => {
                console.log(photos);
                console.log(photos.faces[0].urls);
                setFace(photos.faces[0].urls[4]['512'])
            })
    }
    return (
       <div>
           <form>
               eye, hair
           </form>
           <button onClick={() => generateFace()}>Generate Facé</button>
           {!face ? <p>loading</p> : <img src={face}/>}
       </div>
    )
}

export default RandomFacé;

// stworz form
//popros uzytkownika o info na temat czlowieka
// zmontuj na podstawie tych danych url - if usr +=
//po kliku na generate wyswietl zdjecie