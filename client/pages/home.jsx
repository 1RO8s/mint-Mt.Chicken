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

import NFT from '../utils/MtChickenNFT.json'
import { ethers } from 'ethers'
const nftContractAddress = '0x865ccbfe3cac3ce0834c006c2581c08fd5ebc468'

const opensea = 'https://testnets.opensea.io/assets/mumbai' // testnet
//const opensea = 'https://opensea.io/assets/matic'


const Home = () => {
  //let accounts;
  //const isConneted = accounts == undefined;


  const connectWallet = async () => {
    const { ethereum } = window
    if (!ethereum) {
      console.log('Metamask not detected')
      return
    } else {
      console.log('Metamask')
      console.log(ethereum)
    }

    let chainId = await ethereum.request({ method: 'eth_chainId' })
    console.log('Connected to chain:' + chainId)
    //const rinkebyChainId = '0x4'
    const mumbaiChainId = '0x13881'

    if (chainId !== mumbaiChainId) {
      alert('You are not connected to the Mumbai Testnet!')
      return
    }

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

    console.log('Found account', accounts[0])
    console.log('connect!')
  }

  const [txError, setTxError] = React.useState(null)
  const [miningStatus, setMiningStatus] = React.useState(null) // 0:minting, 1:minted
  const [loadingState, setLoadingState] = React.useState(0) // 0:loading, 1:loaded
  const [isMinting, setIsMinting] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [newItemId, setNewItemId] = React.useState(null)
  const mintChicken = async () => {
    console.log('# mint start')
    try {
      const { ethereum } = window

      if (!ethereum) {
        console.log('Metamask not detected')
        return
      }

      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const nftContract = new ethers.Contract(
        nftContractAddress,
        NFT.abi,
        signer
      )
      console.log('# contract')
      console.log(nftContract)
      console.log(signer)

      const hexToInt = (s) => parseInt(s, 16)
      console.log('## colors:',colors)
      console.log('## colors.replace:',[
        hexToInt(outlineColor.hex.slice(1,7)), // outline
        hexToInt(tosakaColor.hex.slice(1,7)), // cockscomb
        hexToInt(eyeColor.hex.slice(1,7)), // eyes
        hexToInt(headColor.hex.slice(1,7)),  // face
        hexToInt(headShadowColor.hex.slice(1,7)), // face shadow
        hexToInt(bodyColor.hex.slice(1,7)), // body
        hexToInt(bodyShadowColor.hex.slice(1,7)), // body shadow
        hexToInt(tailColor.hex.slice(1,7)), // tail
        hexToInt(tailShadowColor.hex.slice(1,7)), // tail shadow
        hexToInt(moustacheColor.hex.slice(1,7)), // wattle
        hexToInt(beakColor.hex.slice(1,7)), // beak
        hexToInt(footColor.hex.slice(1,7)), // foot
      ])

      
      let nftTx = await nftContract.mint(
        [
          hexToInt(outlineColor.hex.slice(1,7)), // outline
          hexToInt(tosakaColor.hex.slice(1,7)), // cockscomb
          hexToInt(eyeColor.hex.slice(1,7)), // eyes
          hexToInt(headColor.hex.slice(1,7)),  // face
          hexToInt(headShadowColor.hex.slice(1,7)), // face shadow
          hexToInt(bodyColor.hex.slice(1,7)), // body
          hexToInt(bodyShadowColor.hex.slice(1,7)), // body shadow
          hexToInt(tailColor.hex.slice(1,7)), // tail
          hexToInt(tailShadowColor.hex.slice(1,7)), // tail shadow
          hexToInt(moustacheColor.hex.slice(1,7)), // wattle
          hexToInt(beakColor.hex.slice(1,7)), // beak
          hexToInt(footColor.hex.slice(1,7)), // foot
        ],
        //[false, true, false, false]
        [
          hasForehead,
          hasNose,
          hasCheek,
          hasBerry
        ]
      )
      console.log('Mining....', nftTx.hash)
      console.log("hexToInt('999999'):",hexToInt('999999'))
      setMiningStatus(0)
      
      // wait()が終わるまでローディング表示
      setIsLoading(true)

      let tx = await nftTx.wait()
      setLoadingState(1)
      setIsLoading(false)
      console.log('Mined!', tx)
      let event = tx.events[0]
      let value = event.args[2]
      let tokenId = value.toNumber()
      setNewItemId(tokenId)
      //console.log(`https://testnets.opensea.io/assets/mumbai/${nftContractAddress}/${tokenId}`)
      console.log(`${opensea}/${nftContractAddress}/${tokenId}`)
      alert(`${opensea}/${nftContractAddress}/${tokenId}`)


    } catch (error) {
      console.log('Error minting character', error)
      setTxError(error.message)
    }
  }


  // カラー設定
  const [outlineColor, setOutlineColor] = React.useState({})
  const [tosakaColor, setTosakaColor] = React.useState({})
  const [headColor, setHeadColor] = React.useState({})
  const [headShadowColor, setHeadShadowColor] = React.useState({})
  const [eyeColor, setEyeColor] = React.useState({})
  const [beakColor, setBeakColor] = React.useState({})
  const [bodyColor, setBodyColor] = React.useState({})
  const [bodyShadowColor, setBodyShadowColor] = React.useState({})
  const [footColor, setFootColor] = React.useState({})
  const [moustacheColor, setMoustacheColor] = React.useState({})
  const [tailColor, setTailColor] = React.useState({})
  const [tailShadowColor, setTailShadowColor] = React.useState({})

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

  const scribbles= {
    hasForehead,
    hasNose,
    hasCheek,
    hasBerry
  }


  console.log('colors:')
  console.log(colors)

  // ランダム機能
  const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }
  const setRandomColor = () => {
    setOutlineColor({ hex: randomColor() })
    setTosakaColor({ hex: randomColor() })
    setHeadColor({ hex: randomColor() })
    setHeadShadowColor({ hex: randomColor() })
    setEyeColor({ hex: randomColor() })
    setBeakColor({ hex: randomColor() })
    setBodyColor({ hex: randomColor() })
    setBodyShadowColor({ hex: randomColor() })
    setFootColor({ hex: randomColor() })
    setMoustacheColor({ hex: randomColor() })
    setTailColor({ hex: randomColor() })
    setTailShadowColor({ hex: randomColor() })
  }

  // Modal実装
  const [showModal, setShowModal] = React.useState(false)
  
  const openModal = async () => {
    await mintChicken()
    //alert('minted')
    setShowModal(true)
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
        <header className="flex-between flex w-full flex-row justify-between" style={{borderBottom: "solid 10px black"}}>
          <h2 className="m-auto mx-28 align-middle font-lily text-3xl text-sky-400">
            Mt.Chicken
          </h2>
          <button
            className="m-5 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-400"
            onClick={connectWallet}
          >
            <span className="flex">
              <BiWalletAlt className="my-auto mx-1" />
              <span>connect Wallet</span>
            </span>
          </button>
        </header>
        <main className="bg-main-color grow-1 flex w-full flex-1 flex-col justify-center overflow-y-scroll px-20 text-center sm:flex-row">
          <div
            id="MtChicken"
            className="flex h-max w-full justify-center sm:w-1/2"
          >
            <MtChicken
              outlineColor={outlineColor}
              headColor={headColor}
              headShadowColor={headShadowColor}
              eyeColor={eyeColor}
              tailColor={tailColor}
              tailShadowColor={tailShadowColor}
              beakColor={beakColor}
              tosakaColor={tosakaColor}
              footColor={footColor}
              moustacheColor={moustacheColor}
              bodyColor={bodyColor}
              bodyShadowColor={bodyShadowColor}
              hasForehead={hasForehead}
              hasCheek={hasCheek}
              hasNose={hasNose}
              hasBerry={hasBerry}
              bgColor={"#16adff"}
            />
          </div>
          <div id="color-pickers" className="w-1/2 overflow-y-scroll pt-3 h-full">
            <div className="m-3 rounded-xl bg-white p-3">
              <h2 className="m-1 text-left text-xl font-bold">色選択</h2>
              <hr style={{ border: 'solid 1px black' }} />
              <div className="flex flex-wrap">
                <ColorPicker
                  title="アウトライン"
                  ruby="Outline"
                  setColor={setOutlineColor}
                  initialValue="#999"
                />
                <ColorPicker
                  title="とさか"
                  ruby="Cockscomb"
                  setColor={setTosakaColor}
                  initialValue="#b3b3b3"
                />
                <ColorPicker
                  title="め"
                  ruby="Eyes"
                  setColor={setEyeColor}
                  initialValue="#999"
                />
                <ColorPicker
                  title="かお"
                  ruby="Face"
                  setColor={setHeadColor}
                  initialValue="#fff"
                />
                <ColorPicker
                  title="かおの影"
                  ruby="Face shadow"
                  setColor={setHeadShadowColor}
                  initialValue="#ccc"
                />
                <ColorPicker
                  title="からだ"
                  ruby="Body"
                  setColor={setBodyColor}
                  initialValue="#e6e6e6"
                />
                <ColorPicker
                  title="からだの影"
                  ruby="Body shadow"
                  setColor={setBodyShadowColor}
                  initialValue="#b3b3b3"
                />
                <ColorPicker
                  title="しっぽ"
                  ruby="Tail"
                  setColor={setTailColor}
                  initialValue="#fff"
                />
                <ColorPicker
                  title="しっぽの影"
                  ruby="Tail shadow"
                  setColor={setTailShadowColor}
                  initialValue="#ccc"
                />
                <ColorPicker
                  title="にくぜん"
                  ruby="Wattle"
                  setColor={setMoustacheColor}
                  initialValue="#b3b3b3"
                />
                <ColorPicker
                  title="くちばし"
                  ruby="Beak"
                  setColor={setBeakColor}
                  initialValue="#ccc"
                />
                <ColorPicker
                  title="あし"
                  ruby="Foot"
                  setColor={setFootColor}
                  initialValue="#ccc"
                />
              </div>
            </div>
            <div className="m-3 rounded-xl bg-white p-3">
              <h2 className="m-1 text-left text-xl font-bold">らくがき選択</h2>
              <hr></hr>
              <div className="flex flex-row">
                <Toggle title="額の傷" ruby="forehead" state={hasForehead} setState={setForehead}/>
                <Toggle title="頬の傷" ruby="cheek" state={hasCheek} setState={setCheek}/>
                <Toggle title="ひげ" ruby="nose" state={hasNose} setState={setNose}/>
                <Toggle title="腹の傷" ruby="belly" state={hasBerry} setState={setBerry}/>
              </div>
            </div>
            <div className="my-4 flex flex-row px-1">
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
              <button className="mx-3 flex w-1/2 place-content-center rounded bg-slate-50 py-2 px-4 font-bold">
                <a
                  className="flex"
                  href="https://tailwindcss.com/"
                  target="_blank"
                >
                  <FaTwitter
                    className="my-auto mx-1 flex text-sky-400"
                    size="1.3em"
                  />
                  <span className="mx-1 flex text-sky-400">Tweet</span>
                </a>
              </button>
            </div>
            <div className="my-4 flex flex-row px-1">
            <button
              className="mx-3 flex w-fit place-content-center rounded bg-sky-400 border-sky-200 border-2 py-2 px-4 font-bold"
              onClick={setRandomColor}
            >
              <span className="flex">
                <span className="mx-1 flex text-white">ランダム</span>
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
      <Loading
        isLoading={isLoading}
      />
    </>
  )
}
export default Home