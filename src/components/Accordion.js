import React, { useState, useRef } from 'react'

function Accordion({ question, answer }) {
    const [open, setopen] = useState(false)
    const menuRef = useRef(null)

    const handler = () => {
        setopen(!open)
    }

    return (
        <div className="faq_accordion">
            <div
                className="faq_accordion_btn"
                onClick={handler}
                onKeyDown={() => {}}
            >
                <p className="fs-16px weight-6">{question}</p>

                <div>
                    <div className="faq_accordion_icon">
                        <img
                            src="./assets/img/plus.png"
                            className={open ? 'active' : ''}
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div
                className="faq_accordion_body"
                ref={menuRef}
                style={{
                    height: open ? menuRef.current.scrollHeight + 'px' : 0,
                }}
            >
                <div className="faq_accordion_content">
                    <p className="gray fs-16px">{answer}</p>
                </div>
            </div>
        </div>
    )
}

export default Accordion
