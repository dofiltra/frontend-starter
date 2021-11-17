import { GoogleAuthProvider, signInWithRedirect } from '@firebase/auth'
import { auth } from 'services/firebase'
import { useLocalize } from '@borodutch-labs/localize-react'
import AppStore from 'stores/AppStore'
import Button from './Button'

export const SignInButtons = () => {
  const { translate } = useLocalize()

  return (
    <Button
      onClick={() => {
        const provider = new GoogleAuthProvider()
        auth.languageCode = AppStore.language

        signInWithRedirect(auth, provider)
          .then((x) => console.log(x))
          .catch((e) => console.log(e))
      }}
      title={translate('sign in')}
    />
  )
}
