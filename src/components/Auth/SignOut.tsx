import { auth } from 'services/firebase'
import { useLocalize } from '@borodutch-labs/localize-react'
import Button from '../Button'

export const SignOutButton = () => {
  const { translate } = useLocalize()
  return <Button onClick={() => auth.signOut()} title={translate('sign out')} />
}
