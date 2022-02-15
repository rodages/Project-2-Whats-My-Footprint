import {useState} from 'react';

function SearchField({setSearchTerm,placeholder}){
    
    return<>
        <input type="text" onChange={(e)=>setSearchTerm(e.target.value)} placeholder={placeholder}/>
    </>
}

export default SearchField