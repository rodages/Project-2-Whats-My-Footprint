import {useState} from 'react'

function DisplayTabs({displayPrimaryTab,updateDisplayPrimaryTab}){
    const tabOptions = ["Full Products List","Most/Least Emmisive Products List"]
    const [selectedTab, setSelectedTab] = useState(tabOptions[0])
    return(
        <div className="tabs is-centered">
        
            <ul>
                {tabOptions.map((option,i)=>{
                    return <li 
                    key={i}
                    onClick={()=>{
                        setSelectedTab(option)
                        updateDisplayPrimaryTab(!displayPrimaryTab)
                        }}
                        className={option===selectedTab?"is-active":""}><a>{option}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default DisplayTabs