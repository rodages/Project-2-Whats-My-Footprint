import { useLocation, useNavigate } from  'react-router-dom'
import MyResponsiveBar from './Charts/barChar'
import DisplayPie from './Charts/pieChart'

function DisplayItemCard(){
    const navigate = useNavigate()
    const item = useLocation().state.item


    return(
        <>
        <button  className= {"button is-ghost"} onClick={() => navigate(-1)}>Go back</button>
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">{item.productName}</p>
                
                
            </header>
            {(item.co2Breakdown)?
                    <MyResponsiveBar item={item}/>:
                    <DisplayPie item={item}/>
                }
        </div>
        </>
    )
}

export default DisplayItemCard