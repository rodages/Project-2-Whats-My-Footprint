import { ResponsivePie } from '@nivo/pie'




const DisplayPie = ({item}) => {
  const {agriculture,fossilFuel,packaging,refinement,storage,transport,undisclosed} = item.footprintBreakdown
  const data = [
    {
      "id": "Agriculture",
      "label": "Agriculture",
      "value": agriculture,
      "percentage": `${item.totalFootprint}`
    },
    {
      "id": "Packaging",
      "label": "Packaging",
      "value": packaging,
      "percentage": `${item.totalFootprint}`
    },
    {
      "id": "Processing",
      "label": "Processing",
      "value": refinement,
      "percentage": `${item.totalFootprint}`
    },
    {
      "id": "Transport",
      "label": "Transport",
      "value": transport,
      "percentage": `${item.totalFootprint}`
    },
    {
      "id": "Storage",
      "label": "Storage",
      "value": storage,
      "percentage": `${item.totalFootprint}`
    },
    {
      "id": "Uncategorised",
      "label": "Uncategorised",
      "value": undisclosed,
      "percentage": `${item.totalFootprint}`
      },
      {
        "id": "Fossils",
        "label": "Fossil Fuel",
        "value": fossilFuel,
        "percentage": `${item.totalFootprint}`
        }
  ]
  return(
    <div style={{height: 400}}>
    <ResponsivePie

        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.7}
        padAngle={2}
        cornerRadius={3}
        reverse={true}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        isInteractive={true}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLabel={d => `${(d.data.value/d.data.percentage*100).toFixed(2)}%`}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
    />
    </div>
)}

export default DisplayPie