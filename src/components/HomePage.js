// import {useState} from 'react'
import CountryDropdown from "./CountryDropdownButton"
import StageDropdown from "./StageDropdownButton"

function MainPage({dropdownList}){
    return (
    <>
        <h3>This is the main page</h3>
        <div class="columns is-centered">
            <div class="column is-8">
                <article class="message is-primary">
                    <div class="message-body">
                        The description of the app will go here.
                    </div>
                </article>
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title has-background-primary-dark has-text-primary-light">
                        Check out the carbon footprint of your food
                        </p>
                    </header>
                    <div class="card-content has-background-primary-light">
                        <div class="content">
                            <p>Select your market and Stage</p>
                            <div class="columns has-text-primary-dark">
                                <div class="column"><CountryDropdown dropdownList={dropdownList}/></div>
                                <div class="column"><StageDropdown/></div>
                            </div>
                            <div class="columns is-centered">
                                <div class="control">
                                    <button class="button is-primary is-small">Check CO2</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default MainPage