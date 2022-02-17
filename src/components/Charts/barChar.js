// import { ResponsiveBar } from '@nivo/bar'

const data = [
    {
      "id": "Drying",
      "label": "Drying",
      "value": 86
    },
    {
      "id": "Irrigation",
      "label": "Irrigation",
      "value": 6
    },
    {
      "id": "Farm machinery",
      "label": "Farm machinery",
      "value": 4
    },
    {
      "id": "Pesticide production",
      "label": "Pesticide production",
      "value": 4
    },
    {
      "id":"Farming on drained wetlands (Organic soils)",
      "label": "Farming on drained wetlands (Organic soils)",
      "value": 0
    },
    {
        "id":"Fertilizer production",
        "label": "Farming on drained wetlands (Organic soils)",
        "value": 4
      }
  ]

  const MyResponsiveBar = () => (
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
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
    </div>
)

// export default MyResponsiveBar