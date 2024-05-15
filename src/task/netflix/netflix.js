import './main.css'

const Netflix = () => {
    return (
        <div>
            <h1>Netflix</h1>
            <div className='netflixImages'>
            <img src={require("./1899.jpg")} alt="1899 Poster"></img>
            <img src={require("./Dark.jpg")} alt="Dark Poster"></img>
            <img src={require("./Strangerthings.jpg")} alt="Stranger Things Poster"></img>
            <img src={require("./Witcher.jpg")} alt="The Witcher show Poster" ></img>
            <img src={require("./Wednesday.jpg")} alt="The Wednesday show Poster" ></img>
            </div>
            

            
        </div>
    )
}


export default Netflix 