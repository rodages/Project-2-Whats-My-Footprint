 export default function filterSearchResults(arrItemArg,searchTermArg){
    const searchTerm = searchTermArg.trim().toLowerCase()
    const arrItem = arrItemArg.toLowerCase()
    if(!searchTerm) return arrItem
    return searchTerm&&arrItem.includes(searchTerm)
}

