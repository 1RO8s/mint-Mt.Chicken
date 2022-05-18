import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
// コンポーネント
import MtChicken from '../components/mtChicken'
import Toggle from '../components/toggle'
import ColorPicker from '../components/color-picker'
import Modal from '../components/modal'
import Loading from '../components/loading'
// アイコン
import { BiWalletAlt } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
// etherum
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
  const [accounts, setAccount] = React.useState([])
  const [connectBtnMsg, setConnectBtnMsg] = React.useState('Connect wallet')

  //console.log('#3 accounts:', accounts)
  //(0 == accounts.length)?setAccount('Connect wal'):setAccount('Connecteddd')

  React.useEffect(() => {
    //console.log('useEffect 01')

    if (!isDetectedWallet()) return
    ethereum = window.ethereum
    ;(async () => {
      // リロード時にアカウント取得（接続済のみ）
      const acts = await ethereum.request({ method: 'eth_accounts' })
      setAccount(acts)
    })()

    // イベント定義
    ethereum.on('accountsChanged', (_accounts) => {
      //console.log('# accountChanged:', _accounts)
      setAccount(_accounts)
    })
  }, []) // 初回マウント時

  React.useEffect(() => {
    //console.log('useEffect 02')
    if (0 == accounts.length) {
      setConnectBtnMsg('Connect wallet')
    } else {
      setConnectBtnMsg('Connected')
    }
  })

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
    //console.log('call isValidChain')
    ethereum = window.ethereum
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    if (chainId == chain.id) {
      //console.log('Connected to chain:' + chainId)
      return true
    } else {
      //alert('You are not connected to the Mumbai Testnet!')
      alert(`${chain.name}チェーンに接続してください`)
      return false
    }
  }

  const connectWallet = async () => {
    //console.log('1. ethereum:', ethereum)
    if (!isDetectedWallet()) {
      alert('ウォレットが見つかりませんでした')
      return
    }
    if (!(await isValidChain())) return
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
    console.log('preparing mint...')
    ethereum = window.ethereum
    setIsLoading(true)
    try {
      if (!isDetectedWallet()) {
        alert('ウォレットが見つかりませんでした')
        return false
      }
      if (!(await isValidChain())) return false
      if (0 == accounts.length) {
        alert('ウォレットを接続してください')
        throw 'ウォレットが接続されていません'
        return
      }

      // コントラクト取得
      console.log('getting contract...')
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const nftContract = new ethers.Contract(
        nftContractAddress,
        NFT.abi,
        signer
      )

      // ミント
      //console.log('## colors:', colors)
      const hexToInt = (s) => parseInt(s, 16)
      const hex2Colors = [
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
      ];
      console.log('minting...')
      let nftTx = await nftContract.mint(
        hex2Colors,
        [hasForehead, hasNose, hasCheek, hasBerry]
      )
      console.log('waiting tx...', nftTx.hash)
      setMiningStatus(1)

      // wait()が終わるまでローディング表示
      setIsLoading(true)

      let tx = await nftTx.wait()
      console.log('minted: ', tx)
      setMiningStatus(2)
      setIsLoading(false)
      //console.log('2.miningStatus:', miningStatus)

      let event = tx.events[0]
      let value = event.args[2]
      let tokenId = value.toNumber()
      setNewItemId(tokenId)
      //console.log(`${opensea}/${nftContractAddress}/${tokenId}`)
    } catch (error) {
      console.error('Error minting character:', error)
      setIsLoading(false)
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
        <link rel="icon" href="/mt-chicken.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lily+Script+One&family=M+PLUS+1:wght@400;500;700&family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex h-screen flex-col  items-center justify-center">
        <header
          className="flex-between flex w-full flex-row justify-between"
          style={{ borderBottom: 'solid 10px black' }}
        >
          <div className='w-1/3 flex justify-start'>
            <h2 className="m-auto align-middle font-lily text-3xl text-sky-400">
              Mt.Chicken
            </h2>
          </div>
          <div className='w-1/3 flex justify-center'>
            <div className="top-circle" />
          </div>
          <div className='w-1/3 flex justify-end pr-10'>
            <button
              className="m-5 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-400"
              onClick={connectWallet}
            >
              <span className="flex font-ubuntu">
                <BiWalletAlt className="my-auto mx-1" />
                <span>{connectBtnMsg}</span>
              </span>
            </button>
          </div>
        </header>
        <main className="bg-main-color grow-1 flex w-full flex-1 flex-col justify-center overflow-y-scroll text-center sm:flex-row">
          <div id="MtChicken" className="flex h-max w-1/2 flex-col pl-10">
            <MtChicken {...colors} {...scribbles} bgColor={'#16adff'} />
          </div>
          <div
            id="color-pickers"
            className="h-full w-1/2 overflow-y-scroll pr-10"
          >
            <div className="m-3 rounded-xl bg-white p-3">
              <h2 className="mb-1 text-left text-xl">
                <span className="font-mplus1 font-bold">色選択</span>
                <span className="mx-2 font-ubuntu text-sm">Color Select</span>
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
              <h2 className="m-1 text-left text-xl">
                <span className="font-mplus1 font-bold">らくがき選択</span>
                <span className="mx-2 font-ubuntu text-sm">Doodle Select</span>
              </h2>
              <hr></hr>
              <div className="flex flex-row">
                <Toggle
                  title="おでこ"
                  ruby="forehead"
                  state={hasForehead}
                  setState={setForehead}
                />
                <Toggle
                  title="ほお"
                  ruby="cheek"
                  state={hasCheek}
                  setState={setCheek}
                />
                <Toggle
                  title="ひげ"
                  ruby="mustache"
                  state={hasNose}
                  setState={setNose}
                />
                <Toggle
                  title="おなか"
                  ruby="belly"
                  state={hasBerry}
                  setState={setBerry}
                />
              </div>
            </div>
            <div className="my-4 flex flex-row px-1">
              <button
                className="mx-3 flex w-1/2 place-content-center rounded border-2 border-sky-200 bg-sky-400 py-2 px-4 font-bold hover:bg-sky-300"
                onClick={setRandomColor}
              >
                <span className="flex">
                  <span className="mx-1 flex font-mplus1 text-white">
                    おまかせ
                  </span>
                </span>
              </button>
              <button
                className="mx-3 flex w-1/2 place-content-center rounded bg-yellow-300 py-2 px-4 font-bold hover:bg-yellow-200"
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
                  <span className="mx-1 flex font-ubuntu text-white">Mint</span>
                </span>
              </button>
            </div>
            <hr
              style={{
                border: 'solid 2px rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
              }}
            />
            <div className="my-4 text-left">
              <span className="font-ubuntu font-bold text-white">
                Follow us!!
              </span>
              <div className="my-2 flex">
                <a href="https://twitter.com/MtChicken_NFT" target="_blank">
                  <FaTwitter className="my-auto mx-1 text-white" size="2rem" />
                </a>
                <a href="https://discord.gg/beZTBcRfYt" target="_blank">
                  <FaDiscord className="my-auto mx-1 text-white" size="2rem" />
                </a>
              </div>
              <div className="my-10 flex flex-row">
                <Image
                  src="/mt-chicken.png"
                  alt="Mt.Chicken logo"
                  width={65}
                  height={53}
                />
                <h2 className="my-auto mx-2 font-lily text-3xl text-white">
                  Mt.Chicken
                </h2>
              </div>
            </div>
          </div>
        </main>
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
