import { auth } from 'services/firebase'
import { useLocalize } from '@borodutch-labs/localize-react'
import Button from '../Button'

export const SignOutButton = () => {
  const { translate } = useLocalize()

  const logout = async () => {
    await auth.signOut()
  }

  return <Button onClick={() => logout()} title={translate('sign out')} />
}
