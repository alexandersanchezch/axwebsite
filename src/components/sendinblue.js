import React, { Component } from 'react'
import homedata from '../../data/sendinblue.json'

class SendinBlue extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target)

        const options =
            ('https://api.sendinblue.com/v3/contacts',
            {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    'api-key':
                        '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',
                },
                body: JSON.stringify({
                    updateEnabled: false,
                    emailBlacklisted: false,
                    email: data.get('email'),
                }),
            })

        fetch('https://api.sendinblue.com/v3/contacts', options)
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((err) => console.error(err))
    }

    render() {
        let getSubscriptionData = homedata.subscription
        let downloadAppsInfo = homedata.downloadApps
        let sectionHeadingInfo = downloadAppsInfo.sectionHeading
        let publicUrl = process.env.PUBLIC_URL
        let getData = homedata.subscription

        return (
            <section id="sendinblue" className="pt100 pb100 bg-dark">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 text-center subscribe-area md-m-50px-b">
                            <div className="subscribe-wrap p-25px">
                                <h4 className="m-15px-b">
                                    {getSubscriptionData.title}
                                </h4>
                                <h5>{getSubscriptionData.shortDesc}</h5>
                                <h2 className="m-15px-b">
                                    {getSubscriptionData.bigIdea}
                                </h2>

                                <form
                                    className="subscription-form form-inline d-flex justify-content-center"
                                    onSubmit={this.handleSubmit}
                                >
                                    <input
                                        className="form-control input-box"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Inserisci la tua mail preferita"
                                    />
                                    <button className="primary-btn">
                                        Registrati al prossimo evento
                                        Gratuitamente!
                                    </button>
                                    <script>
                                        document.getElementById('primary-btn').addEventListener('click',
                                        function(){' '}
                                        {(window.location.href = '/thankyou')});
                                    </script>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-7 text-center">
                            <img
                                className="img-fluid"
                                src={publicUrl + getData.img}
                                alt={getData.title}
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SendinBlue
