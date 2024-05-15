import { useState } from "react"

const Form = ({handleSubmit, nameInput, setNameInput, ageInput, setAgeInput}) => {
    const [input, setInput] = useState('')

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     alert(`${input} submited`)
    // }
    return (
        <form onSubmit={handleSubmit}>
            <h1>{input}</h1>
            <label>
                Enter your name:
                <input type="text"
                       value= {nameInput}
                       onChange={(e) => setNameInput(e.target.value)} />
            </label>
            <label>
                Enter your age:
                <input type="text"
                       value={ageInput}
                       onChange={ (e) => setAgeInput (e.target.value)}
                 />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Form