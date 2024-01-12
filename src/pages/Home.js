import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import { useTranslation } from 'react-i18next'

/**This is the Homepage of our Website, we are using the i18n for the translate */

function Home() {
    const { t } = useTranslation()
    return (
        <div>
            <Navbar
                menu1={t('navbar.menu1')}
                menu2={t('navbar.menu2')}
                menu3={t('navbar.menu3')}
            />
            <Hero
                img="./assets/img/hero.png"
                dots={true}
                btnText={t('herohome.cta')}
                btnLink="/contact"
                title={t('herohome.title')}
                subtitle={t('herohome.description')}
            />
            <Services
                title={t('serviceshome.title')}
                subtitle={t('serviceshome.description')}
                icon1title={t('serviceshome.icon1title')}
                icon1description={t('serviceshome.icon1description')}
                icon2title={t('serviceshome.icon2title')}
                icon2description={t('serviceshome.icon2description')}
                icon3title={t('serviceshome.icon3title')}
                icon3description={t('serviceshome.icon3description')}
                icon4title={t('serviceshome.icon4title')}
                icon4description={t('serviceshome.icon4description')}
                icon5title={t('serviceshome.icon5title')}
                icon5description={t('serviceshome.icon5description')}
                icon6title={t('serviceshome.icon6title')}
                icon6description={t('serviceshome.icon6description')}
                icon7title={t('serviceshome.icon7title')}
                icon7description={t('serviceshome.icon7description')}
                icon8title={t('serviceshome.icon8title')}
                icon8description={t('serviceshome.icon8description')}
            />

            {/*
            <About

                
                title={t('abouthome.title')}
                subtitle={t('abouthome.description')}
                
                review1={t('abouthome.review1')}
                review2={t('abouthome.review2')}
                review3={t('abouthome.review3')}
                
            />
             */}
            <Footer
                subtitle={t('footerhome.subtitle')}
                title={t('footerhome.title')}
                description={t('footerhome.description')}
                cta={t('footerhome.cta')}
            />
        </div>
    )
}

export default Home
