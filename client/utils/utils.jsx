import { CHAIN } from '../config'

// Walletを検出しているかどうか
export const isDetectedWallet = () => {
  const ethereum = window.ethereum
  if (ethereum && ethereum.isConnected()) {
    return true
  } else {
    return false
  }
}

// 接続しているチェーンが正しいか確認する
export const isValidChain = async () => {
  //console.log('call isValidChain')
  const ethereum = window.ethereum
  let chainId = await ethereum.request({ method: 'eth_chainId' })
  if (chainId == CHAIN.id) {
    //console.log('Connected to chain:' + chainId)
    return true
  } else {
    //alert('You are not connected to the Mumbai Testnet!')
    alert(`${CHAIN.name}チェーンに接続してください`)
    return false
  }
}

export const connectWallet = async () => {
  //console.log('1. ethereum:', ethereum)
  if (!isDetectedWallet()) {
    alert('ウォレットが見つかりませんでした')
    return
  }
  if (!(await isValidChain())) return
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
}