import React from 'react'
import Navbar from '../components/Navbar'
import ServiceContact from '../components/ServiceContact'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

function Contact() {
    const { t } = useTranslation()

    return (
        <div>
            <Navbar
                menu1={t('navbar.menu1')}
                menu2={t('navbar.menu2')}
                menu3={t('navbar.menu3')}
            />
            <ServiceContact
                title={t('servicecontact.title')}
                subtitle={t('servicecontact.description')}
                start={t('servicecontact.start')}
                cta1="https://outlook.office365.com/owa/calendar/GianmarcoSanchezAIAdvertising@lvdere.com/bookings/"
                icon1title={t('servicecontact.icon1title')}
                icon1description={t('servicecontact.icon1description')}
                cta2="https://outlook.office365.com/owa/calendar/GianmarcoSanchezAIAdvertising@lvdere.com/bookings/"
                icon2title={t('servicecontact.icon2title')}
                icon2description={t('servicecontact.icon2description')}
                cta3="https://outlook.office365.com/owa/calendar/GianmarcoSanchezAIAdvertising@lvdere.com/bookings/"
                icon3title={t('servicecontact.icon3title')}
                icon3description={t('servicecontact.icon3description')}
                cta4="https://outlook.office365.com/owa/calendar/GianmarcoSanchezAIAdvertising@lvdere.com/bookings/"
                icon4title={t('servicecontact.icon4title')}
                icon4description={t('servicecontact.icon4description')}
                cta5="https://outlook.office365.com/owa/calendar/GianmarcoSanchezAIAdvertising@lvdere.com/bookings/"
                icon5title={t('servicecontact.icon5title')}
                icon5description={t('servicecontact.icon5description')}
                cta6="https://outlook.office365.com/owa/calendar/GianmarcoSanchezAIAdvertising@lvdere.com/bookings/"
                icon6title={t('servicecontact.icon6title')}
                icon6description={t('servicecontact.icon6description')}
                cta7="https://outlook.office365.com/owa/calendar/GianmarcoSanchezAIAdvertising@lvdere.com/bookings/"
                icon7title={t('servicecontact.icon7title')}
                icon7description={t('servicecontact.icon7description')}
                cta8="https://outlook.office365.com/owa/calendar/GianmarcoSanchezAIAdvertising@lvdere.com/bookings/"
                icon8title={t('servicecontact.icon8title')}
                icon8description={t('servicecontact.icon8description')}
            />

            <Footer
                subtitle={t('footerhome.subtitle')}
                title={t('footerhome.title')}
                description={t('footerhome.description')}
                cta={t('footerhome.cta')}
            />
        </div>
    )
}

export default Contact
