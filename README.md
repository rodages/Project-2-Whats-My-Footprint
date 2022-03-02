# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) GA London React Project-2-What's My Footprint

## TABLE OF CONTENTS

- [Overview](#overview)
  - [Brief](#brief)
  - [Technologies Used](#technologies)
  - [Installation](#installation)
- [Development](#development)
  - [Get Countries](#countries)
    - [Get Countries Code Snippet](#country-code)
    - [Get Countries Demo](#country-demo)
  - [Styling](#styling)
- [Difficulties](#difficulties)
  - [Known bugs](#bugs)
  - [Challenges](#challenges)
- [Future Improvements](#improvements)
- [Key Learnings](#learnings)

## <a name='overview'>Overview</a>

The second project for General Assembley (GA) Software Engineering Immersive(SEI-Flex) program was to build a React application that consumes a public API.

We have selected [Carbon Cloud API](https://carboncloud.com/climate-footprint-api/) to get products Carbon dioxide equivalent (CO2e). Our application aims to allow users to:
- Display products from various Markets based on the selected production Stage.
- Search for products by name from the rendered list.
- Show Most and Least emissive products from selected categories.
- Add selected products to "Interested In" or "Would like to Avoid" baskets
- Estimate the total impact of products in the baskets.

The app can be viewed [here](https://whatsmyfootprint.netlify.app/).

### <a name='brief'>Brief</a>

The app had to:

* Consume a public API – this could be anything but it must make sense for your project.
* The app should include a router - with several "pages".
* Include wireframes - that you designed before building the app.
* Have semantically clean HTML.
* Be deployed online and accessible to the public.

### <a name='technologies'>Technologies Used</a>

* JavaScript
* React
* React-router-dom
* Bulma
* VSCode
* Git/GitHub
* Insomnia/Postman
* @nivo/bar
* @nivo/pie
* iso-3166-1

### <a name='installation'>Installation</a>

* Clone the repo
* [Request personal Carbon Cloud Api key or use public key for private use.](https://developers.carboncloud.com/)
* Install all frontend packages (from package.json) by running `npm install`
* Start server with `npm run start`

## <a name='development'>Development</a>

### <a name='countries'>Dropdowns</a>

#### <a name='country-demo'>Get Countries Demo</a>

[![Loading Countries](./screenshots/0.loading.PNG "Loading Countries")]
[![Loaded Countries](./screenshots/1.selectMarkets.PNG "Loaded Countries")]

#### <a name='country-code'>Get Countries Code Snippet</a>
```
function iso3SortedList(arr){
    const countries = arr.map(item=>{
        const {country:countryName,alpha3:countryCode} = iso.whereAlpha3(item.key)
        return {countryName,countryCode}
    })
    return countries.sort((current,next)=>current.countryName.localeCompare(next.countryName))
}

const [dropdownList,setDropdownList] = useState(undefined);
    
    useEffect(()=>{
        async function getCountriesNames(){
            const response = await fetch('https://api.carboncloud.com/v0/search', {
                headers: {
                Accept: 'application/json',
                "X-API-KEY" : process.env.REACT_API_KEY,
                },
                })
            const data = await response.json()
            const buckets =data.aggregations.Markets.Markets.buckets
            setDropdownList(iso3SortedList(buckets))
        }
        getCountriesNames()
    }
    ,[])
```
APi returns ISO3 code of available countries from initial search


#### <a name='stages dropdown'>Stages Dropdown</a>








