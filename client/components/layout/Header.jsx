import { useEffect} from 'react'
import Button from '../atoms/Button'
import {
  BaseButton,
  ExSmallButton,
  SmallButton,
  BsButton,
  LargeButton,
  ExLargeButton,
  BuyButton
} from '../atoms/Button'
import { BiWalletAlt } from 'react-icons/bi'
import { connectWallet, isDetectedWallet } from '../../utils/utils'

const Header = ({btnState:{connectBtnMsg,setConnectBtnMsg}}) => {

  useEffect(() => {
    if (!isDetectedWallet()) return
    ethereum = window.ethereum
    ;(async () => {
      // リロード時にアカウント取得（接続済のみ）
      const _accounts = await ethereum.request({ method: 'eth_accounts' })
      console.log('_accounts:', _accounts)
      if (0 == _accounts.length) {
        setConnectBtnMsg('Connect wallet')
      } else {
        setConnectBtnMsg('Connected')
      }
    })()
  })


  return (
    <header
      className="flex w-full flex-row justify-between h-24"
      style={{ borderBottom: 'solid 10px black' }}
    >
      <div className="flex w-1/3 justify-start">
        <h2 className="my-auto ml-3 sm:mx-auto align-middle font-lily text-3xl text-sky-400">
          Mt.Chicken
        </h2>
      </div>
      <div className="flex w-1/3 justify-center">
        <div className="top-circle" />
      </div>
      <div className="flex w-1/3 pr-2 sm:pr-16 items-center justify-end">
        <Button onClick={connectWallet}>
          <BiWalletAlt className="my-auto mx-1 hidden sm:block" />
          <span>{connectBtnMsg}</span>
        </Button>
      </div>
    </header>
  )
}
export default Header
