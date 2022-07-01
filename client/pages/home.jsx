import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import MtChicken from '../components/mtChicken'
import Modal from '../components/modal'
import Loading from '../components/loading'
import Header from '../components/layout/Header'
import ColorSelector from '../components/organisms/ColorSelector'
import DoodleSelector from '../components/organisms/DoodleSelector'
import { FaTwitter } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
import { ethers } from 'ethers'
import { CONTRACT_ADDRESS, CHAIN, NFT } from '../config'

const Home = () => {
  let ethereum
  const [connectBtnMsg, setConnectBtnMsg] = React.useState('Connect wallet')

  // 初回マウント時の副作用
  React.useEffect(() => {
    if (!isDetectedWallet()) return
    ethereum = window.ethereum
    ;(async () => {
      // リロード時にアカウント取得（接続済のみ）
      const acts = await ethereum.request({ method: 'eth_accounts' })
      //setAccount(acts)
    })()

    // イベント定義
    ethereum.on('accountsChanged', (_accounts) => {
      //setAccount(_accounts)
    })
  }, [])

  // マウント時の副作用
  React.useEffect(() => {
    //
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

    // mint後のモーダル表示
    if (miningStatus == 2) {
      setShowModal(true)
    } else {
      setShowModal(false)
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
    if (chainId == CHAIN.id) {
      //console.log('Connected to chain:' + chainId)
      return true
    } else {
      //alert('You are not connected to the Mumbai Testnet!')
      alert(`${CHAIN.name}チェーンに接続してください`)
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
  const [isLoading, setIsLoading] = React.useState(false)
  const [newItemId, setNewItemId] = React.useState(null)
  //console.log('#1 miningStatus',miningStatus)

  // ミント実行
  const mintChicken = async () => {
    console.log('preparing mint...')
    ethereum = window.ethereum
    setIsLoading(true)
    try {
      if (!isDetectedWallet()) {
        alert('ウォレットが見つかりませんでした')
        throw 'Wallet not found'
        return false
      }
      if (!(await isValidChain())) throw 'invalid chain'
      const _accounts = await ethereum.request({ method: 'eth_accounts' })
      if (0 == _accounts.length) {
        alert('ウォレットを接続してください')
        throw 'Wallet not connected'
        return
      }

      // コントラクト取得
      console.log('getting contract...')
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const nftContract = new ethers.Contract(CONTRACT_ADDRESS, NFT.abi, signer)

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
      ]
      console.log('minting...')
      let nftTx = await nftContract.mint(hex2Colors, [
        hasForehead,
        hasNose,
        hasCheek,
        hasBerry,
      ])
      console.log('waiting tx...', nftTx.hash)
      setMiningStatus(1)
      //console.log('#2 miningStatus',miningStatus)

      // wait()が終わるまでローディング表示
      setIsLoading(true)

      let tx = await nftTx.wait()
      console.log('minted: ', tx)
      setMiningStatus(2)
      setIsLoading(false)
      //console.log('#3 miningStatus:', miningStatus)

      let event = tx.events[0]
      let value = event.args[2]
      let tokenId = value.toNumber()
      setNewItemId(tokenId)
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

  const pickersInfo = [
    {
      title: 'アウトライン',
      ruby: 'Outline',
      color: outlineColor,
      setColor: setOutlineColor,
    },
    {
      title: 'とさか',
      ruby: 'Cockscomb',
      color: tosakaColor,
      setColor: setTosakaColor,
    },
    {
      title: 'め',
      ruby: 'Eyes',
      color: eyeColor,
      setColor: setEyeColor,
    },
    {
      title: 'かお',
      ruby: 'Face',
      color: headColor,
      setColor: setHeadColor,
    },
    {
      title: 'かおの影',
      ruby: 'Face shadow',
      color: headShadowColor,
      setColor: setHeadShadowColor,
    },
    {
      title: 'からだ',
      ruby: 'Body',
      color: bodyColor,
      setColor: setBodyColor,
    },
    {
      title: 'からだの影',
      ruby: 'Body shadow',
      color: bodyShadowColor,
      setColor: setBodyShadowColor,
    },
    {
      title: 'しっぽ',
      ruby: 'Tail',
      color: tailColor,
      setColor: setTailColor,
    },
    {
      title: 'しっぽの影',
      ruby: 'Tail shadow',
      color: tailShadowColor,
      setColor: setTailShadowColor,
    },
    {
      title: 'にくぜん',
      ruby: 'Wattle',
      color: moustacheColor,
      setColor: setMoustacheColor,
    },
    {
      title: 'くちばし',
      ruby: 'Beak',
      color: beakColor,
      setColor: setBeakColor,
    },
    {
      title: 'あし',
      ruby: 'Foot',
      color: footColor,
      setColor: setFootColor,
    },
  ]

  const scribbles = {
    hasForehead,
    hasNose,
    hasCheek,
    hasBerry,
  }

  const doodlesInfo = [
    {
      title: 'おでこ',
      ruby: 'foreahead',
      state: hasForehead,
      setState: setForehead,
    },
    {
      title: 'ほお',
      ruby: 'cheek',
      state: hasCheek,
      setState: setCheek,
    },
    {
      title: 'ひげ',
      ruby: 'mustache',
      state: hasNose,
      setState: setNose,
    },
    {
      title: 'おなか',
      ruby: 'berry',
      state: hasBerry,
      setState: setBerry,
    }
  ]

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
      <div className="sm:flex h-screen flex-col  items-center justify-center">
        <Header btnState={{
          connectBtnMsg,
          setConnectBtnMsg
        }}/>
        <main className="bg-main-color grow-1 flex w-full flex-1 justify-center overflow-y-scroll text-center flex-col sm:flex-row">
          <div id="MtChicken" className="flex h-max w-full sm:w-1/2 flex-col mt-[-50px] sm:pl-10">
            <MtChicken {...colors} {...scribbles} bgColor={'#16adff'} />
          </div>
          <div
            id="selectors"
            className="h-full w-full sm:w-1/2 overflow-y-scroll sm:pr-10"
          >
            <ColorSelector pickersInfo={pickersInfo} />
            <DoodleSelector doodlesInfo={doodlesInfo}/>
            <div className="my-4 flex flex-col sm:flex-row px-1">
              <button
                className="mx-3 my-3 sm:my-0 flex sm:w-1/2 place-content-center rounded border-2 border-sky-200 bg-sky-400 py-2 px-4 font-bold hover:bg-sky-300"
                onClick={setRandomColor}
              >
                <span className="flex">
                  <span className="mx-1 flex font-mplus1 text-white">
                    おまかせ
                  </span>
                </span>
              </button>
              <button
                className="mx-3 flex sm:w-1/2 place-content-center rounded bg-yellow-300 py-2 px-4 font-bold hover:bg-yellow-200"
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
            <div className="my-4 text-left mx-3">
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
        setMiningStatus={setMiningStatus}
        colors={colors}
        scribbles={scribbles}
        tokenId={newItemId}
      />
      <Loading isLoading={isLoading} />
    </>
  )
}
export default Home
