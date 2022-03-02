import Form from './Form/Form'


function MainPage(){
    return (
    <>
        <br></br>
        <div className="columns is-centered">
            <div className="column is-8">
                <article className="message is-primary">
                    <div className="message-body">
                        <q>Food production accounts for one-quarter of the world’s greenhouse gas emissions and takes up half of the planet’s habitable surface.</q>
                        <br></br>
                        <figcaption>-CarbonBrief</figcaption>
                        <br></br>
                        <p>Scroll through the food items from all around the world and learn about their carbon footprint at the different stages of the food production chain.</p>
                    </div>
                </article>

                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title has-background-primary-dark has-text-primary-light">
                        Explore the carbon footprint of your food
                        </p>
                    </header>
                    <div className="card-content has-background-primary-light">
                        <Form prompt={"Check out food items by markets and food production stages:"}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default MainPage