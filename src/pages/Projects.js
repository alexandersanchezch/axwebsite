import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useTranslation } from 'react-i18next'
import Portfolio from 'src/components/Portfolio'

function Projects() {
    const { t } = useTranslation()
    return (
        <div>
            <Navbar
                menu1={t('navbar.menu1')}
                menu2={t('navbar.menu2')}
                menu3={t('navbar.menu3')}
            />
            <Portfolio
                title={t('portfolioprojects.title')}
                subtitle={t('portfolioprojects.subtitle')}
                description1={t('portfolioprojects.description1')}
                description2={t('portfolioprojects.description2')}
                description3={t('portfolioprojects.description3')}
                description4={t('portfolioprojects.description4')}
                ctalink="/contact"
                ctatext={t('portfolioprojects.cta')}
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

export default Projects
