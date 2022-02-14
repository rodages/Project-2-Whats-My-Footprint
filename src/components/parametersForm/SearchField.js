import {useState} from 'react';

function searchField({setSearchTerm}){
    
    return<>
        <input type="text" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="type in country name"/>
    </>
}

export default searchField