
//totalCH4Footprint: 0
// totalN2oFootprint: 0.01643
// totalCo2Footprint: 0.1637

const FarmItem = ({item}) => {
  return (
    <div>
      <h1>product name: {item.name}</h1>
                <ul>
                    <li>id: {item.id}</li>
                    <li>productInfo: {item.productInfo}</li>
                    <li>totalClimateFootprint: {item.totalClimateFootprint}</li>
                    <li><ul>Footprint breakdown:
                        <li>totalCH4Footprint: {item.totalCH4Footprint}</li>
                        <li>totalN2oFootprint: {item.totalN2oFootprint}</li>
                        <li>totalCo2Footprint: {item.totalCo2Footprint}</li>
                        <li><ul>co2breakdown:
                            <li>drying: {item.co2Breakdown.drying}</li>
                            <li>irrigation: {item.co2Breakdown.irrigation}</li>
                            <li>farmMachinery: {item.co2Breakdown.farmMachinery}</li>
                            <li>pesticideProduction: {item.co2Breakdown.pesticideProduction}</li>
                            <li>deforestation: {item.co2Breakdown.deforestation}</li>
                            <li>OrganicSoils: {item.co2Breakdown.OrganicSoils}</li>
                            <li>fertilizerProduction: {item.co2Breakdown.fertilizerProduction}</li>
                        </ul></li>
                    </ul></li>
                </ul>
                <hr/>
    </div>
  );
};

export default FarmItem;