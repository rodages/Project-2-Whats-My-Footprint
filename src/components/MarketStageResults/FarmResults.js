import { useState, useEffect, useContext } from 'react'
import List from '../List/List'
import ListItem from '../List/ListItem'
import TopLists from './TopLists'
import DisplayTabs from '../DisplayTabs'
import iso3SortedList from '../Reusable/iso3SortedList'

function Farm({ market, stage }) {
    const [data, setData] = useState(undefined)
    const [availableMarkets, setAvailableMarkets] = useState(undefined)
    const [displayPrimaryTab, updateDisplayPrimaryTab] = useState(true)
    useEffect(() => {
        async function getCountryFarmData() {
            const response = await fetch(
                'https://api.carboncloud.com/v0/search?q=&market=GBR&gate=Farm',
                {
                    headers: {
                        Accept: 'application/json',
                        'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
                    },
                }
            )

            const data = await response.json()
            const hits = data.hits
            const narr = hits.map((item) => {
                const nested = item.contents[1]
                return {
                    id: item.contents[0],
                    productName: nested.productName,
                    market: nested.market,
                    totalFootprint: nested.totalClimateFootprint,

                    totalCH4Footprint: nested.totalCh4ClimateFootprint,
                    totalN2oFootprint: nested.totalN2oClimateFootprint,
                    totalCo2Footprint: nested.totalCo2ClimateFootprint,

                    co2Breakdown: {
                        drying: nested.co2Drying,
                        irrigation: nested.co2Irrigation,
                        farmMachinery: nested.co2Machinery,
                        pesticideProduction: nested.co2PesticideProduction,
                        Deforestation: nested.co2LandUseChange,
                        OrganicSoils: nested.co2OrganicSoils,
                        FertilizerProduction: nested.co2FertilizerProduction,
                    },
                    productInfo: `https://apps.carboncloud.com/climatehub/agricultural-reports/benchmarks/${item.contents[0]}`,
                }
            })
            setAvailableMarkets(
                iso3SortedList(Object.keys(data.aggregations.markets))
            )
            narr.sort((current, next) =>
                current.productName.localeCompare(next.productName)
            )
            setData(narr)
        }
        getCountryFarmData()
    }, [])

    if (!data) {
        return <h1>Loading</h1>
    }
    if (data.length < 1) {
        return (
            <NoCountryData
                stage={stage}
                market={market}
                availableMarkets={availableMarkets}
            />
        )
    }

    return (
        <>
            <DisplayTabs
                displayPrimaryTab={displayPrimaryTab}
                updateDisplayPrimaryTab={updateDisplayPrimaryTab}
            />
            {displayPrimaryTab ? (
                <List
                    data={data}
                    description="List of All Items"
                    filter={true}
                />
            ) : (
                <TopLists data={data} />
            )}
        </>
    )
}

export default Farm
