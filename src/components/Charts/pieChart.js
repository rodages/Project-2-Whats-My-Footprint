// import { ResponsivePie } from '@nivo/pie'


  const data = [
    {
      "id": "Agriculture",
      "label": "Agriculture",
      "value": 86
    //   "color": "hsl(336, 70%, 50%)"
    },
    {
      "id": "Packaging",
      "label": "Packaging",
      "value": 6
    //   "color": "hsl(96, 70%, 50%)"
    },
    {
      "id": "Processing",
      "label": "Processing",
      "value": 4
    //   "color": "hsl(6, 70%, 50%)"
    },
    {
      "id": "Transport",
      "label": "Transport",
      "value": 4
    //   "color": "hsl(286, 70%, 50%)"
    },
    {
      "id": "Storage",
      "label": "Storage",
      "value": 2
    //   "color": "hsl(31, 70%, 50%)"
    },
    {
      "id": "Uncategorised",
      "label": "Uncategorised",
      "value": 3
        // "color": "hsl(31, 70%, 50%)"
      }
  ]


const DisplayPie = () => (
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
        arcLabel={d => `${d.value}%`}
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
)

// export default DisplayPie