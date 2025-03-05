import { createContext, useState } from 'react'
import { dictionaryList, languageOptions } from '../dictionary'

export const LanguageContext = createContext({
  language: 'en',
  dictionary: dictionaryList.en,
  userLanguageChange: (selected: string) => {
    console.log(selected)
  },
})

export const LanguageProvider = ({ children }: any): JSX.Element => {

  const [userLanguage, setUserLanguage] = useState<keyof typeof dictionaryList>('pt')

  const provider = {
    language: userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected: string) => {
      const newLanguage = languageOptions[selected] ? selected : 'en'
      setUserLanguage(newLanguage as keyof typeof dictionaryList)
    }
  }

  return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>
}
