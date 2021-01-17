import React, {useState} from 'react';
import Form from './Form';

function People() {
    const [person, setPerson] = useState({
        name: "",
        age: 21
    })

    const getYounger =() => {
        setPerson({...person, age: person.age -1})
    }

    const changeName = (data) => {
        console.log(data)
        setPerson({...person, name: data})
    }

    return (
        
        <div>
            <Form handleOnSubmit={changeName} />
            <h2>Hello my Name is {person.name}</h2>
            
            <h4>And I am {person.age} Years Old</h4>
             <button onClick={getYounger}>Get Younder</button>
        </div>
    )
}
export default People;