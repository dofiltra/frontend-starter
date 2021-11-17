import AuthContextProvider from 'components/Auth/AuthContextProvider'
import LanguageButtons from 'components/LanguageButtons'
import LocalizationProvider from 'localization/LocalizationProvider'
import MainBlock from 'components/MainBlock'
import Root from 'components/Root'

const App = () => {
  return (
    <Root>
      <LocalizationProvider>
        <AuthContextProvider>
          <MainBlock />
          <LanguageButtons />
        </AuthContextProvider>
      </LocalizationProvider>
    </Root>
  )
}

export default App
