import React from 'react';
import {useState} from "react";
import {isEmpty} from "lodash/lang";

const RandomFacé = () => {
    const [face, setFace] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [hairLength, setHairLength] = useState('');

    const generateFace = (e) => {
        e.preventDefault();
        let url = `https://api.generated.photos/api/v1/faces?per_page=1`;
        if(gender) {
            url += `&gender=${gender}`
        }
        if(age) {
            url +=`&age=${age}`
        }
        if(hairLength) {
            url +=`&hair_length=${hairLength}`
        }

        fetch(url, {
            headers: {
                Authorization: 'API-Key GkWzZRe_DY7PteRqi_cyfA'
            }
        })
            .then(res => res.json())
            .then(photos => {
                console.log(photos);
                if(!isEmpty(photos)) {
                    setFace(photos.faces[0].urls[4]['512'])
                }
            })
    }
    return (
       <div>
           <form method="post" action="" onSubmit={generateFace}>
               <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                   <option value="">Gender</option>
                   <option value="male">Male</option>
                   <option value="female">Female</option>
               </select>
               <select name="age" value={age} onChange={(e) => setAge(e.target.value)} required>
                   <option value="">Age</option>
                   <option value="infant">Infant</option>
                   <option value="child">Child</option>
                   <option value="young-adult">Young-adult</option>
                   <option value="adult">Adult</option>
                   <option value="elderly">Elderly</option>
               </select>
               <select name="hair_length" value={hairLength} onChange={(e) => setHairLength(e.target.value)}  required>
                   <option value="">Hair length</option>
                   <option value="short">Short</option>
                   <option value="medium">Medium</option>
                   <option value="long">Long</option>
               </select>
               <button type='submit'>Generate Facé</button>
           </form>
           {!face ? <p>Loading...</p> : <img src={face}/>}
       </div>
    )
}

export default RandomFacé;