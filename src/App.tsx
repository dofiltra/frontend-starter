import AuthContextProvider from 'components/Auth/AuthContextProvider'
import FooterSmall from 'components/Footer/FooterSmall'
import LanguageButtons from 'components/LanguageButtons'
import LocalizationProvider from 'localization/LocalizationProvider'
import MainBlock from 'components/MainBlock'
import Navbar from 'components/Navbar/Navbar'
import Root from 'components/Root'

const App = () => {
  return (
    <Root>
      <LocalizationProvider>
        <AuthContextProvider>
          <Navbar />
          <MainBlock />
          <LanguageButtons />
          <FooterSmall absolute={true} />
        </AuthContextProvider>
      </LocalizationProvider>
    </Root>
  )
}

export default App
