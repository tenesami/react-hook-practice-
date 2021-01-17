import React, {useState} from 'react';
import Form from './Form';

function People() {
    const [name, setName] = useState("Tesf")
    const [age, setAge] = useState(21)

    const getYounger =() => {
        setAge( age -1)
    }

    const toggleName =() => {
        name === "Tesf" ? setName("Alem") : setName("Tesf")
    }

    return (
        
        <div>
            <h2>Hello my Name is {name}</h2>
           <button onClick={toggleName}>Change Name</button>
            <h4>And I am {age} Years Old</h4>
             <button onClick={getYounger}>Get Younder</button>
        </div>
    )
}
export default People;