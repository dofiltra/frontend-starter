import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth'
import { auth } from 'services/firebase'
import { useCallback, useState } from 'react'
import { useEffect } from 'preact/hooks'
import AuthContext, { User } from './AuthContext'
import Button from 'components/Button'
// import SignInButton from './SignInButton'

const AuthContextProvider: React.FC = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const [user, setUser] = useState<null | User>(null)

  useEffect(() => {
    return onAuthStateChanged(auth, (im) => {
      if (im) {
        setIsInitialized(true)
        return setUser({
          displayName: im.displayName || '',
          email: im.email || '',
          photo: im.photoURL || '',
          uid: im.uid,
        })
      }

      setIsInitialized(true)
      setUser(null)
    })
  }, [])

  const getContent = useCallback(() => {
    if (!isInitialized) {
      return <div>Loading...</div>
    }
    if (user === null) {
      return (
        <Button
          onClick={() => {
            const provider = new GoogleAuthProvider()
            provider.addScope(
              'https://www.googleapis.com/auth/contacts.readonly'
            )
            auth.languageCode = 'en'
            // signInWithPopup(auth, provider)
            //   .then((result) => {
            //     // This gives you a Google Access Token. You can use it to access the Google API.
            //     const credential =
            //       GoogleAuthProvider.credentialFromResult(result)
            //     const token = credential?.accessToken
            //     // The signed-in user info.
            //     const user = result.user

            //     console.log(token, user)

            //     // ...
            //   })
            //   .catch((error) => {
            //     console.log(error)

            //     // Handle Errors here.
            //     const errorCode = error.code
            //     const errorMessage = error.message
            //     // The email of the user's account used.
            //     const email = error.email
            //     // The AuthCredential type that was used.
            //     const credential = GoogleAuthProvider.credentialFromError(error)
            //     // ...
            //   })

            signInWithRedirect(auth, provider)
              .then((x) => console.log(x))
              .catch((e) => console.log(e))
          }}
          title={'Sign in with Google'}
        />
      )
    }
    return children
  }, [isInitialized, user, children])

  return (
    <AuthContext.Provider value={{ user }}>{getContent()}</AuthContext.Provider>
  )
}

export default AuthContextProvider
