import {useState} from 'react'

function DisplayTabs({displayPrimaryTab,updateDisplayPrimaryTab}){
    const tabOptions = ["Top10 ","All List"]
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


function Basket(){
    const tabOptions = ["Top10 ","All List"]
    const [selectedTab, setSelectedTab] = useState(tabOptions[0])

    return (
            <div>
                <DisplayTabs tabOptions={tabOptions} selectedTab ={selectedTab} setSelectedTab={setSelectedTab} />
                <h2 class="title has-text-centered">Title 2</h2>
            </div>
        )
}

// export default Basket
