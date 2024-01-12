import React from 'react'
import Accordion from './Accordion'

function Faq({
    faqtitle,
    faqsubtitle,
    faq1question,
    faq1answer,
    faq2question,
    faq2answer,
    faq3question,
    faq3answer,
    faq4question,
    faq4answer,
    faq5question,
    faq5answer,
}) {
    return (
        <div>
            <div id="services">
                <div className="container-fluid">
                    <div className="faq-wrapper">
                        <p className="text-center fs-48px color4 weight-6 mb-20px">
                            {faqtitle}
                        </p>
                        <p className="text-center fs-16px weight-4">
                            {faqsubtitle}
                        </p>

                        <div className="accordion-wrapper">
                            <Accordion
                                question={faq1question}
                                answer={faq1answer}
                            />

                            <Accordion
                                question={faq2question}
                                answer={faq2answer}
                            />

                            <Accordion
                                question={faq3question}
                                answer={faq3answer}
                            />

                            <Accordion
                                question={faq4question}
                                answer={faq4answer}
                            />

                            <Accordion
                                question={faq5question}
                                answer={faq5answer}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
