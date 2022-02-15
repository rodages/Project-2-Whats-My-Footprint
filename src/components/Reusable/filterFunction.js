 export default function filterSearchResults(arrItemArg,searchTermArg){
    const searchTerm = searchTermArg.trim().toLowerCase()
    const arrItem = arrItemArg.toLowerCase()
    // console.log(searchTerm,arrItem)
    if(!searchTerm) return arrItem
    return searchTerm&&arrItem.includes(searchTerm)
}

