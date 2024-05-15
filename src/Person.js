// import StateComponent from "./StateComponent"

const Person = ({ name, age, handleClick}) => {
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Age: {age}</p>
           <button onClick={handleClick}>delete</button>

            
        </div>
    )
}


export default Person

