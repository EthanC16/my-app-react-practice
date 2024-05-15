import './main.css'

const Airbnb = () => {
    return (
        <div>
            <h1>Airbnb</h1>
            <div className='airbnbImages'>
            <div>
                    <img src={require("./Home.jpg")} alt="1899 Poster" width={250} height={350}></img>
                    
                    <p>Entire homes</p>
                </div>
            <div>
            <img src={require("./Unique.jpg")} alt="1899 Poster" width={250} height={350}></img>
            
            <p>Unique stays</p>
            </div>
            <div>
            <img src={require("./Cabin.jpeg")} alt="1899 Poster" width={250} height={350}></img>
           
            <p>Cabins and cottages</p>
            </div>
            <div>
            <img src={require("./Pets.jpeg")} alt="1899 Poster" width={250} height={350}></img>
           
            <p>Pets allowed</p>
            </div>
           
            </div>
            

            
        </div>
    )
}

export default Airbnb 