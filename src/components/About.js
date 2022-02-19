import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import brands, { faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useHref } from 'react-router'

function About() {
    return (
    <>
    <br></br>
    <div className="columns is-centered">
            <div className="column ">
                <section className="section is-medium is-primary">
                    <h1 className="title is-primary"><strong>Zan Makarov</strong></h1>
                    <hr></hr>
                    <h2 className="subtitle is-primary">
                        <FontAwesomeIcon icon={faGithub}/>
                        <a href="https://github.com/rodages" target="_blank">    rodages</a>
                    </h2>
                    <h2 className="subtitle is-primary">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <a href="https://www.linkedin.com/in/zanmakarov/" target="_blank">    Zan M. Linkedin</a>
                    </h2>
                </section>
            </div>
                <div className="column">
                <section className="section is-medium is-primary">
                    <h1 className="title is-primary"><strong>Emilie Allen</strong></h1>
                    <hr></hr>
                    <h2 className="subtitle is-primary">
                        <FontAwesomeIcon icon={faGithub}/>
                        <a href="https://github.com/emilieallen" target="_blank">    emilieallen</a>
                    </h2>
                    <h2 className="subtitle is-primary">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <a href="https://www.linkedin.com/in/%C3%A9milie-allen-79759a62/" target="_blank">    Emilie A. Linkedin</a>
                    </h2>
                </section>
            </div>
        </div>
    </>
    )
}

export default About