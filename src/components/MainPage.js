// import {useState} from 'react'
import CountryDropdown from "./CountryDropdownButton"
import StageDropdown from "./StageDropdownButton"

import Form from './Form/Form'

function MainPage({dropdownList}){
    return (
    <>
        <h3>This is the main page</h3>
        <div className="columns is-centered">
            <div className="column is-8">
            
                <article className="message is-primary">
                    <div className="message-body">
                        The description of the app will go here.
                    </div>
                </article>


                <div className="card">

                    <header className="card-header">
                        <p className="card-header-title has-background-primary-dark has-text-primary-light">
                        Check out the carbon footprint of your food
                        </p>
                    </header>

                    <div className="card-content has-background-primary-light">
                    <Form dropdownList={dropdownList} className="card-content has-background-primary-light" />
                        {/* <div className="content">

                            <p>Select your market and Stage</p>
                            <div className="columns has-text-primary-dark">
            
                                <div className="column"><CountryDropdown dropdownList={dropdownList}/></div>
                                <div className="column"><StageDropdown/></div>

                            </div>

                            <div className="columns is-centered">
                                <div className="control">
                                    <button className="button is-primary is-small">Check CO2</button>
                                </div>
                            </div>

                        </div> */}
                    </div>
                </div>

            </div>
        </div>

    </>
    )
}

export default MainPage