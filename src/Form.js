import React, {useState} from 'react'


const Form = (props) => {

 const [name, setName] = useState("")


 const handleInput = (e) => {
     //console.log(e.target.value)
     setName(e.target.value)
 }

 const handleSubmit = (e) => {
    e.preventDefault()
    props.handleOnSubmit(name)
    setName("")
 }
 
    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" value={name} onChange={handleInput}></input>
            <input type="submit" name="name"></input>
        </form>
                  
    )
}
export default Form;