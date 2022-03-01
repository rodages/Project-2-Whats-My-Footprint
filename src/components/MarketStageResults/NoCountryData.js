import stages from '../Reusable/stagesObj'
import iso from 'iso-3166-1'
import {useNavigate} from 'react-router-dom'
import Form from '../Form/Form'

function NoCountryData({stage,market,availableMarkets}){
    const navigate=useNavigate()
    return <>
        <div className='columns is-centered'>
            <div className='column is-8'>
                <button  className= {"button is-ghost"} onClick={() => navigate(-1)}>Go back</button>
                <div className ="card has-text-centered">
                    <header className='card-header'>
                    <p
                        className='card-header-title has-background-primary-dark has-text-primary-light'
                    >{iso.whereAlpha3(market).country} does not have any products from "{stages[stage]}" stage</p>
                    </header>
                    <div className="card-content has-background-primary-light">

                        <p>If you would like to explore countries that have "{stages[stage]}" products please select one of the following countries</p>
                        <div className="select is-primary">
                            <select onChange={(e)=>{
                                const marketCode = e.target.value

                                navigate(`/search/market=${marketCode}&stage=${stage}`, {state:{market:marketCode,stage:stage}});
                                // setMarketCode(e.target.value)}
                                }}>
                                <option value="unselected" hidden>Select Market &#127757;</option>
                                {availableMarkets
                                .map(({countryName,countryCode},i) => {
                                    return <option value={countryCode} key={i}>{countryName}
                                    </option>})}
                            </select>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        {/* <p>Alternitevely, please select another market and a different stage below:</p> */}
                        <Form prompt={"Alternitevely, please select another market and a different stage below:"}/>
                    </div>
                </div>
            </div>
        </div>
        
    </>
}

export default NoCountryData