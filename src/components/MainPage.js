// import {useState} from 'react'
import CountryDropdown from "./CountryDropdownButton"
import StageDropdown from "./StageDropdownButton"

import Form from './Form/Form'
import DisplayPie from "./pieChart"
import MyResponsiveBar from "./barChar"

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

                    </div>
                </div>

            </div>
        </div>
        <DisplayPie/>
        <MyResponsiveBar/>

    </>
    )
}

export default MainPage