import { ResponsiveBar } from '@nivo/bar'


  const MyResponsiveBar = ({item}) => {
    const {Deforestation,FertilizerProduction,OrganicSoils,drying,farmMachinery,irrigation,pesticideProduction} = item.co2Breakdown

    const data = [
      {
        "id": "Drying",
        "label": "Drying",
        "value": drying
      },
      {
        "id": "Irrigation",
        "label": "Irrigation",
        "value": irrigation
      },
      {
        "id": "Farm machinery",
        "label": "Farm machinery",
        "value": farmMachinery
      },
      {
        "id": "Pesticide production",
        "label": "Pesticide production",
        "value": pesticideProduction
      },
      {
        "id":"Farming on drained wetlands (Organic soils)",
        "label": "Farming on drained wetlands (Organic soils)",
        "value": OrganicSoils
      },
      {
          "id":"Fertilizer production",
          "label": "Farming on drained wetlands (Organic soils)",
          "value": FertilizerProduction
        }
    ]

    return(
    <div style={{height: 300, width:'auto'}}>
    <ResponsiveBar
        data={data}
        margin={{ top: 40, right: 300, bottom: 80, left: 300 }}
        padding={0.3}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        colorBy={'indexValue'}
        role="application"
        ariaLabel="CO₂e/kg breakdown bar chart"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
    </div>
)}

export default MyResponsiveBar