import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
// コンポーネント
import MtChicken from '../components/mtChicken'
import Toggle from '../components/toggle'
import ColorPicker from '../components/color-picker'
import Modal from '../components/modal'
import Loading from '../components/loading'
// アイコン
import { BiWalletAlt } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'

import NFT from '../utils/MtChickenNFT.json'
import { ethers } from 'ethers'

const nftContractAddress = '0x865ccbfe3cac3ce0834c006c2581c08fd5ebc468'
const opensea = 'https://testnets.opensea.io/assets/mumbai' // testnet
//const opensea = 'https://opensea.io/assets/matic' // production

const chains = {
  main: { name: 'matic', id: '' },
  test: { name: 'mumbai', id: '0x13881' },
}

const chain = chains.test

const Home = () => {
  //let accounts;
  //const isConneted = accounts == undefined;

  let ethereum

  const [walletConnected, setWalletConnected] = React.useState(0)

  useEffect(() => {
    console.log("useEffect 01")
    ethereum = window.ethereum
    console.log('# ethereum:', ethereum)
    console.log('ethereum.isConnected():', ethereum.isConnected())

    // イベント定義
    ethereum.on('accountsChanged',(accounts) => {
      console.log("# accountChanged:",accounts)
      if(0 == accounts.length) {
        setConnectBtnMsg('Connect wallet')
      } else {
        setConnectBtnMsg('Connected')
      }
    });

  },[]) // 初回マウント時

  // Walletを検出しているかどうか
  const isDetectedWallet = () => {
    ethereum = window.ethereum
    if (ethereum && ethereum.isConnected()) {
      return true
    } else {
      return false
    }
  }

  // 接続しているチェーンが正しいか確認する
  const isValidChain = async () => {
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    if (chainId == chain.id) {
      console.log('Connected to chain:' + chainId)
      return true
    } else {
      //alert('You are not connected to the Mumbai Testnet!')
      alert(`${chain.name}チェーンに接続してください`)
      return false
    }
  }

  const [connectBtnMsg, setConnectBtnMsg] = React.useState('Connect wallet')
  const connectWallet = async () => {
    if (!isDetectedWallet()) return
    if (! await isValidChain()) return
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
  }

  const [txError, setTxError] = React.useState(null)
  const [miningStatus, setMiningStatus] = React.useState(0) // 0:before mint 1:minting, 2:minted
  //const [loadingState, setLoadingState] = React.useState(0) // 0:loading, 1:loaded
  //const [isMinting, setIsMinting] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [newItemId, setNewItemId] = React.useState(null)

  // ミント実行
  const mintChicken = async () => {
    console.log('# mint start')
    try {
      if (!isDetectedWallet) return false
      if (! await isValidChain()) return false

      // コントラクト取得
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const nftContract = new ethers.Contract(
        nftContractAddress,
        NFT.abi,
        signer
      )
      console.log('# nftContract:',nftContract)
      console.log("# signer:",signer)

      // ミント
      console.log('## colors:', colors)
      const hexToInt = (s) => parseInt(s, 16)
      let nftTx = await nftContract.mint(
        [
          hexToInt(outlineColor.slice(1, 7)), // outline
          hexToInt(tosakaColor.slice(1, 7)), // cockscomb
          hexToInt(eyeColor.slice(1, 7)), // eyes
          hexToInt(headColor.slice(1, 7)), // face
          hexToInt(headShadowColor.slice(1, 7)), // face shadow
          hexToInt(bodyColor.slice(1, 7)), // body
          hexToInt(bodyShadowColor.slice(1, 7)), // body shadow
          hexToInt(tailColor.slice(1, 7)), // tail
          hexToInt(tailShadowColor.slice(1, 7)), // tail shadow
          hexToInt(moustacheColor.slice(1, 7)), // wattle
          hexToInt(beakColor.slice(1, 7)), // beak
          hexToInt(footColor.slice(1, 7)), // foot
        ],
        [hasForehead, hasNose, hasCheek, hasBerry]
      )
      console.log('minting...', nftTx.hash)
      setMiningStatus(1)
      console.log('1.miningStatus:', miningStatus)

      // wait()が終わるまでローディング表示
      setIsLoading(true)

      let tx = await nftTx.wait()
      console.log('Minted!', tx)
      setMiningStatus(2)
      setIsLoading(false)
      console.log('2.miningStatus:', miningStatus)

      let event = tx.events[0]
      let value = event.args[2]
      let tokenId = value.toNumber()
      setNewItemId(tokenId)
      console.log(`${opensea}/${nftContractAddress}/${tokenId}`)
    } catch (error) {
      console.log('Error minting character', error)
      setTxError(error.message)
    }
  }

  // カラー設定
  const [outlineColor, setOutlineColor] = React.useState('#999999')
  const [tosakaColor, setTosakaColor] = React.useState('#b3b3b3')
  const [headColor, setHeadColor] = React.useState('#ffffff')
  const [headShadowColor, setHeadShadowColor] = React.useState('#cccccc')
  const [eyeColor, setEyeColor] = React.useState('#999999')
  const [beakColor, setBeakColor] = React.useState('#cccccc')
  const [bodyColor, setBodyColor] = React.useState('#e6e6e6')
  const [bodyShadowColor, setBodyShadowColor] = React.useState('#b3b3b3')
  const [footColor, setFootColor] = React.useState('#cccccc')
  const [moustacheColor, setMoustacheColor] = React.useState('#b3b3b3')
  const [tailColor, setTailColor] = React.useState('#ffffff')
  const [tailShadowColor, setTailShadowColor] = React.useState('#cccccc')
  // 落書き設定
  const [hasForehead, setForehead] = React.useState(false)
  const [hasNose, setNose] = React.useState(false)
  const [hasCheek, setCheek] = React.useState(false)
  const [hasBerry, setBerry] = React.useState(false)

  //
  const colors = {
    outlineColor,
    tosakaColor,
    headColor,
    headShadowColor,
    eyeColor,
    beakColor,
    bodyColor,
    bodyShadowColor,
    footColor,
    moustacheColor,
    tailColor,
    tailShadowColor,
  }

  const scribbles = {
    hasForehead,
    hasNose,
    hasCheek,
    hasBerry,
  }

  console.log('colors:')
  console.log(colors)

  // ランダム
  const setRandomColor = () => {
    const randomColor = () => {
      return (
        '#' +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0')
      )
    }
    setOutlineColor(randomColor())
    setTosakaColor(randomColor())
    setHeadColor(randomColor())
    setHeadShadowColor(randomColor())
    setEyeColor(randomColor())
    setBeakColor(randomColor())
    setBodyColor(randomColor())
    setBodyShadowColor(randomColor())
    setFootColor(randomColor())
    setMoustacheColor(randomColor())
    setTailColor(randomColor())
    setTailShadowColor(randomColor())
  }

  // Modal実装
  const [showModal, setShowModal] = React.useState(false)
  const openModal = async () => {
    await mintChicken()
    //alert('minted')
    console.log('3.miningStatus:', miningStatus)
    // console.log("# minted:",minted)
    if (miningStatus == 2) {
      setShowModal(true)
    } else {
      setShowModal(false)
    }
  }

  return (
    <>
      <Head>
        <title>Mt.Chicken</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex h-screen flex-col  items-center justify-center py-2">
        <header
          className="flex-between flex w-full flex-row justify-between"
          style={{ borderBottom: 'solid 10px black' }}
        >
          <h2 className="m-auto mx-28 align-middle font-lily text-3xl text-sky-400">
            Mt.Chicken
          </h2>
          <div className="top-circle"></div>
          <button
            className="m-5 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-400"
            onClick={connectWallet}
          >
            <span className="flex">
              <BiWalletAlt className="my-auto mx-1" />
              <span>{connectBtnMsg}</span>
            </span>
          </button>
        </header>
        <main className="bg-main-color grow-1 flex w-full flex-1 flex-col justify-center overflow-y-scroll px-20 text-center sm:flex-row">
          <div id="MtChicken" className="flex h-max w-1/2 flex-col">
            <MtChicken
              {...colors}
              {...scribbles}
              bgColor={'#16adff'}
            />
          </div>
          <div
            id="color-pickers"
            className="h-full w-1/2 overflow-y-scroll pt-3"
          >
            <div className="m-3 rounded-xl bg-white p-3">
              <h2 className="m-1 text-left text-xl font-bold">
                <span>色選択</span>
                <span className="mx-2 text-sm">Color Select</span>
              </h2>
              <hr style={{ border: 'solid 1px black' }} />
              <div className="flex flex-wrap">
                <ColorPicker
                  title="アウトライン"
                  ruby="Outline"
                  color={outlineColor}
                  setColor={setOutlineColor}
                  initialValue="#999"
                />
                <ColorPicker
                  title="とさか"
                  ruby="Cockscomb"
                  color={tosakaColor}
                  setColor={setTosakaColor}
                  initialValue="#b3b3b3"
                />
                <ColorPicker
                  title="め"
                  ruby="Eyes"
                  color={eyeColor}
                  setColor={setEyeColor}
                  initialValue="#999"
                />
                <ColorPicker
                  title="かお"
                  ruby="Face"
                  color={headColor}
                  setColor={setHeadColor}
                  initialValue="#fff"
                />
                <ColorPicker
                  title="かおの影"
                  ruby="Face shadow"
                  color={headShadowColor}
                  setColor={setHeadShadowColor}
                  initialValue="#ccc"
                />
                <ColorPicker
                  title="からだ"
                  ruby="Body"
                  color={bodyColor}
                  setColor={setBodyColor}
                  initialValue="#e6e6e6"
                />
                <ColorPicker
                  title="からだの影"
                  ruby="Body shadow"
                  color={bodyShadowColor}
                  setColor={setBodyShadowColor}
                  initialValue="#b3b3b3"
                />
                <ColorPicker
                  title="しっぽ"
                  ruby="Tail"
                  color={tailColor}
                  setColor={setTailColor}
                  initialValue="#fff"
                />
                <ColorPicker
                  title="しっぽの影"
                  ruby="Tail shadow"
                  color={tailShadowColor}
                  setColor={setTailShadowColor}
                  initialValue="#ccc"
                />
                <ColorPicker
                  title="にくぜん"
                  ruby="Wattle"
                  color={moustacheColor}
                  setColor={setMoustacheColor}
                  initialValue="#b3b3b3"
                />
                <ColorPicker
                  title="くちばし"
                  ruby="Beak"
                  color={beakColor}
                  setColor={setBeakColor}
                  initialValue="#ccc"
                />
                <ColorPicker
                  title="あし"
                  ruby="Foot"
                  color={footColor}
                  setColor={setFootColor}
                  initialValue="#ccc"
                />
              </div>
            </div>
            <div className="m-3 rounded-xl bg-white p-3">
              <h2 className="m-1 text-left text-xl font-bold">
                <span>らくがき選択</span>
                <span className="mx-2 text-sm">Doodle Select</span>
              </h2>
              <hr></hr>
              <div className="flex flex-row">
                <Toggle
                  title="額の傷"
                  ruby="forehead"
                  state={hasForehead}
                  setState={setForehead}
                />
                <Toggle
                  title="頬の傷"
                  ruby="cheek"
                  state={hasCheek}
                  setState={setCheek}
                />
                <Toggle
                  title="鼻毛"
                  ruby="nose"
                  state={hasNose}
                  setState={setNose}
                />
                <Toggle
                  title="腹の傷"
                  ruby="belly"
                  state={hasBerry}
                  setState={setBerry}
                />
              </div>
            </div>
            <div className="my-4 flex flex-row px-1">
              <button
                className="mx-3 flex w-fit place-content-center rounded border-2 border-sky-200 bg-sky-400 py-2 px-4 font-bold"
                onClick={setRandomColor}
              >
                <span className="flex">
                  <span className="mx-1 flex text-white">ランダム</span>
                </span>
              </button>
              <button
                className="mx-3 flex w-1/2 place-content-center rounded bg-yellow-300 py-2 px-4 font-bold"
                onClick={openModal}
              >
                <span className="flex">
                  <Image
                    src="/polygon-matic-logo.svg"
                    alt="matic logo"
                    width={25}
                    height={25}
                    className="my-auto mx-1"
                    style={{ fill: '#fff' }}
                  />
                  <span className="mx-1 flex text-white">mint Mt.Chicken</span>
                </span>
              </button>
            </div>
          </div>
        </main>
        <footer className="flex h-12 w-full items-center justify-center border-t">
          <a
            className="flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </footer>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        colors={colors}
        scribbles={scribbles}
        tokenId={newItemId}
      />
      <Loading isLoading={isLoading} />
    </>
  )
}
export default Home
