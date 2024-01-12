import React from 'react'
import { useTranslation } from 'react-i18next'

function LanguageSelectionPopup({ onClose, select, en, es, it }) {
    const { t } = useTranslation()
    const { i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        onClose() //Close the popup
    }

    return (
        <div className="language-selection-popup">
            <ul>
                <li>{t('translation.select')}</li>
                <li>
                    <button onClick={() => changeLanguage('en')}>
                        {t('translation.en')}
                    </button>
                </li>
                <li>
                    <button onClick={() => changeLanguage('de')}>
                        {t('translation.de')}
                    </button>
                </li>
                <li>
                    <button onClick={() => changeLanguage('es')}>
                        {t('translation.es')}
                    </button>
                </li>
                <li>
                    <button onClick={() => changeLanguage('it')}>
                        {t('translation.it')}
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default LanguageSelectionPopup
