import React from 'react';
import {useState} from "react";

//prosimy użytkownika o opcje

const RandomFacé = () => {
    const [face, setFace] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [hairLength, setHairLength] = useState('');

    const generateFace = () => {
        let url = `https://api.generated.photos/api/v1/faces?per_page=1`;
        if(gender) {
            url += `?gender=${gender}`
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
           <form method="post" action="">
               <select name="gender" required>
                   <option value="male">Male</option>
                   <option value="female">Female</option>
               </select>
               <select name="age" required>
                   <option value="infant">Infant</option>
                   <option value="child">Child</option>
                   <option value="young-adult">Young-adult</option>
                   <option value="adult">Adult</option>
                   <option value="elderly">Elderly</option>
               </select>
               <select name="hair_length" required>
                   <option value="short">Short</option>
                   <option value="medium">Medium</option>
                   <option value="long">Long</option>
               </select>
               <input type="submit" value="submit" />
           </form>
           <button onClick={() => generateFace()}>Generate Facé</button>
           {!face ? <p>Loading...</p> : <img src={face}/>}
       </div>
    )
}

export default RandomFacé;

// stworz form
//popros uzytkownika o info na temat czlowieka
// zmontuj na podstawie tych danych url - if usr +=
//po kliku na generate wyswietl zdjecie