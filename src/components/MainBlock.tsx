import { BodyText } from 'components/Text'
import { SignOutButton } from './Buttons/SignOut'
import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { useLocalize } from '@borodutch-labs/localize-react'
import AuthContext from './Auth/AuthContext'
import useUserCount from 'hooks/useUserCount'

export default function MainBlock() {
  const { userCount } = useUserCount()
  const { translate } = useLocalize()
  const { user } = useContext(AuthContext)
  console.log(user)

  return (
    <>
      <BodyText>{translate('userCount', { count: userCount || '~' })}</BodyText>
      <BodyText>{translate('title')}</BodyText>
      <SignOutButton />
    </>
  )
}
