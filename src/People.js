import React, {useState} from 'react'


function People() {
    const [name, setName] = useState("Tesfaye")
    const [age, setAge] = useState(21)

    return (
        <div>
            <h2>Hello my Name is {name}</h2>
            <h4>And I am {age} Years Old</h4>
        </div>
    )
}
export default People;