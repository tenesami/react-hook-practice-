import React, {useState} from 'react'


const Form = () => {

 const [name, setName] = useState("")
 
    return (
        <form>
            <label>Name: </label>
            <input type="text" value={name}></input>
            <input type="submit" name="name"></input>
        </form>
                  
    )
}
export default Form;