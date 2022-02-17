

function StagesItem({item}){
    return <div>
                    <h1>product name: {item.productName}</h1>
                    <img src={`${item.imageUrl}`}/>
                    <ul>
                        <li>product id: {item.id}</li>
                        <li>total footprint: {item.totalFootprint}</li>
                    </ul>
                    <ul>FootprintBreakdown:
                        <li>argiculture :{item.footprintBreakdown.argiculture}</li>
                        <li>fossilFuel : {item.footprintBreakdown.fossiFuel}</li>
                        <li> packaging : {item.footprintBreakdown.packaging}</li>
                        <li>refinement : {item.footprintBreakdown.refinement}</li>
                        <li>storage : {item.footprintBreakdown.storage}</li>
                        <li>transport : {item.footprintBreakdown.transport}</li>
                        <li> undisclosed : {item.footprintBreakdown.undisclosed}</li>
                    </ul>
                    <p>product Info: {item.productInfo}</p>
                    <hr/>


                </div>
}

export default StagesItem