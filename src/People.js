import React, {useState} from 'react';
import Form from './Form';

function People() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(21)

    const getYounger =() => {
        setAge( age -1)
    }

    const changeName = (data) => {
        console.log(data)
        setName(data)
    }

    return (
        
        <div>
            <Form handleOnSubmit={changeName} />
            <h2>Hello my Name is {name}</h2>
            <h4>And I am {age} Years Old</h4>
             <button onClick={getYounger}>Get Younder</button>
        </div>
    )
}
export default People;