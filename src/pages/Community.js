import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Optimistic from '../components/Optimistic'
import ServiceSelect from '../components/ServiceSelect'
import VideoSection from '../components/VideoSection'
import Faq from 'src/components/Faq'
import { useTranslation } from 'react-i18next'

function Community() {
    const { t } = useTranslation()
    return (
        <div>
            <Navbar
                menu1={t('navbar.menu1')}
                menu2={t('navbar.menu2')}
                menu3={t('navbar.menu3')}
            />
            <Hero
                img="./assets/img/herocommunitypro.png"
                dots={true}
                btnText={t('herocommunity.cta')}
                btnLink="https://chat.whatsapp.com/F2orSvSqDpnB57CLseLp7X"
                title={t('herocommunity.title')}
                subtitle={t('herocommunity.description')}
            />
            <Optimistic
                title={t('optimisticcommunity.title')}
                description1={t('optimisticcommunity.description1')}
                description2={t('optimisticcommunity.description2')}
            />
            <ServiceSelect
                title={t('serviceselectcommunity.title')}
                service1title={t('serviceselectcommunity.service1title')}
                service1description={t(
                    'serviceselectcommunity.service1description'
                )}
                service2title={t('serviceselectcommunity.service2title')}
                service2description={t(
                    'serviceselectcommunity.service2description'
                )}
                service3title={t('serviceselectcommunity.service3title')}
                service3description={t(
                    'serviceselectcommunity.service3description'
                )}
                service4title={t('serviceselectcommunity.service4title')}
                service4description={t(
                    'serviceselectcommunity.service4description'
                )}
                service5title={t('serviceselectcommunity.service5title')}
                service5description={t(
                    'serviceselectcommunity.service5description'
                )}
                step1title={t('serviceselectcommunity.step1title')}
                step1description={t('serviceselectcommunity.step1description')}
                step2title={t('serviceselectcommunity.step2title')}
                step2description={t('serviceselectcommunity.step2description')}
                step3title={t('serviceselectcommunity.step3title')}
                step3description={t('serviceselectcommunity.step3description')}
                cta={t('serviceselectcommunity.cta')}
                ctalink="https://chat.whatsapp.com/F2orSvSqDpnB57CLseLp7X"
            />
            <VideoSection
                card1number={t('videosectioncommunity.card1number')}
                card2number={t('videosectioncommunity.card2number')}
                card3number={t('videosectioncommunity.card3number')}
                card4number={t('videosectioncommunity.card4number')}
            />

            <Faq
                faqtitle={t('faqcommunity.faqtitle')}
                faqsubtitle={t('faqcommunity.faqsubtitle')}
                faq1question={t('faqcommunity.question1')}
                faq1answer={t('faqcommunity.answer1')}
                faq2question={t('faqcommunity.question2')}
                faq2answer={t('faqcommunity.answer2')}
                faq3question={t('faqcommunity.question3')}
                faq3answer={t('faqcommunity.answer3')}
                faq4question={t('faqcommunity.question4')}
                faq4answer={t('faqcommunity.answer4')}
                faq5question={t('faqcommunity.question5')}
                faq5answer={t('faqcommunity.answer5')}
            />

            <Faq
                faqtitle={t('faqsubscription.faqtitle')}
                faqsubtitle={t('faqsubscription.faqsubtitle')}
                faq1question={t('faqsubscription.question1')}
                faq1answer={t('faqsubscription.answer1')}
                faq2question={t('faqsubscription.question2')}
                faq2answer={t('faqsubscription.answer2')}
                faq3question={t('faqsubscription.question3')}
                faq3answer={t('faqsubscription.answer3')}
                faq4question={t('faqsubscription.question4')}
                faq4answer={t('faqsubscription.answer4')}
                faq5question={t('faqsubscription.question5')}
                faq5answer={t('faqsubscription.answer5')}
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

export default Community
