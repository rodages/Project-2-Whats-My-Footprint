import { useLocation, useNavigate } from  'react-router-dom'
import MyResponsiveBar from './Charts/barChar'
import DisplayPie from './Charts/pieChart'

function DisplayItemCard(){
    const navigate = useNavigate()
    const item = useLocation().state.item
    console.log(item)

    return(
        <>
        
        <div className="card column is-8 is-offset-2">
            <button  className= {"button is-ghost"} onClick={() => navigate(-1)}>Go back</button>
            <header className="card-header ">
                <p className="card-header-title is-centered">{item.productName}</p>
            </header>
            <div className="card-content">
                <div className='content'>
                        {(item.co2Breakdown)?
                            <>
                                <p>Total Carbon dioxide equivalent on the enviroment is <strong>{item.totalFootprint.toFixed(2)}kg CO₂e/kg</strong>
                                <br/>Nitrous Oxide (N₂O) contributes <strong>{item.totalN2oFootprint.toFixed(2)}kg CO₂e/kg</strong>.
                                <br/>Methane (CH₄) contributes <strong>{item.totalCH4Footprint.toFixed(2)}kg CO₂e/kg</strong>.
                                <br/>Carbon Dioxide (CO₂) footprint is <strong>{item.totalCo2Footprint.toFixed(2)}kg CO₂e/kg</strong> with following breakdown:
                                </p>
                                <MyResponsiveBar item={item}/>
                            </>
                                :
                            <>  
                                <p>Total footprint on the enviroment is <strong>{item.totalFootprint.toFixed(2)} kg CO₂e/kg</strong>. 
                                <br/>Footprint breakdown:</p>
                                <DisplayPie item={item}/>
                            </>
                            }
                </div>
            </div>
        </div>
        </>
    )
}

export default DisplayItemCard