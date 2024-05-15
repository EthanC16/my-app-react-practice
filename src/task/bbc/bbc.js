import './main.css'

const BBC = () => {
    return (
        <div>
            <h1>BBC News</h1>
            <div className='BBCImages'>
            <div>
                    <img src={require("./Pandemic.jpg")} alt="1899 Poster" width={250} height={350}></img>
                    <h3>Don't think pandemic is over, Whitty warns</h3>
                    <p>Unlocking too quickly would lead to a substantial surge in infection, UK chief medical advisor says.</p>
                </div>
            <div>
            <img src={require("./NHSdoctors.jpg")} alt="1899 Poster" width={250} height={350}></img>
            <h3>Pay rise was set to be 2.1% - NHS chief</h3>
            <p>NHS England boss backs ministers over pay dispute but does not rule out a one-off bonus for workers.</p>
            </div>
            <div>
            <img src={require("./Piersmorgan.jpg")} alt="1899 Poster" width={250} height={350}></img>
            <h3>Charity criticises Morgan's comments about Meghan</h3>
            <p>Mental health charity mind says it is "disappointed" by comments Piers Morgan made on Mondays.</p>
            </div>
            <div>
            <img src={require("./Unilever.jpg")} alt="1899 Poster" width={250} height={350}></img>
            <h3>Unilever drops word 'normal' from beauty products</h3>
            <p>The owner of Dove and Vaseline will remove the word from about 200 products in a push for inclusivity.</p>
            </div>
           
            </div>
            

            
        </div>
    )
}

export default BBC 