import React from 'react'
import Teams from '../components/Home/Teams'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { useLanguage } from '../i18n/LanguageContext'

const Ekibimiz = () => {
  const { t } = useLanguage()
  useDocumentMeta(t("meta.teamTitle"), t("meta.teamDesc"))

  return (
    <div className="pt-28">
      <Teams />
    </div>
  )
}

export default Ekibimiz
