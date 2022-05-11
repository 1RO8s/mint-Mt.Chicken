import React from 'react'
import Image from 'next/image'
import { FaTwitter } from 'react-icons/fa'
import { VscClose } from 'react-icons/vsc'
import { HiOutlineDownload as DownloadIcon } from 'react-icons/hi'
import MtChicken from './mtChicken'

const nftContractAddress = '0x865ccbfe3cac3ce0834c006c2581c08fd5ebc468'
const opensea = 'https://testnets.opensea.io/assets/mumbai' // testnet
//const opensea = 'https://opensea.io/assets/matic'

const Modal = ({
  showModal,
  setShowModal,
  colors,
  scribbles,
  bgColor,
  tokenId,
}) => {
  const osUrl = `${opensea}/${nftContractAddress}/${tokenId}`
  const intent = `https://twitter.com/intent/tweet?text=${encodeURI(
    'ミントが完了しました！\n' + osUrl
  )}`

  const modalContent = {
    background: 'white',
    padding: '10px',
    borderRadius: '3px',
  }

  const overlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const closeModal = () => {
    setShowModal(false)
  }

  console.log('modal.props.colors')
  console.log(colors)
  console.log('...colors')
  console.log({ ...colors })

  const mtChickenElement = React.useRef(null)
  const imgElm = React.useRef(null)
  const downloadSVG = (e) => {
    console.log('download svg!')
    console.log(mtChickenElement)

    // SCGをBlob化したあとURL生成
    const svgText = new XMLSerializer().serializeToString(
      mtChickenElement.current
    )
    const blob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' })
    const svgUrl = URL.createObjectURL(blob)

    // 生成したSVGのダウンロード処理
    const a = document.createElement('a')
    a.href = svgUrl
    a.download = 'MtChicken.svg'
    a.click()
    //a.dispatchEvent(new MouseEvent("click"));
    URL.revokeObjectURL(svgUrl)
  }

  if (showModal) {
    console.log('#open modal')
    return (
      <div id="overlay" className="fixed bg-gray-300" style={overlay}>
        <div
          id="modalContent"
          className="flex w-fit flex-col"
          style={modalContent}
        >
          <VscClose
            className="rounded hover:bg-slate-200"
            onClick={closeModal}
          />
          <div className="flex flex-row">
            <div className="flex flex-col m-3 w-56">
              <MtChicken
                {...colors}
                {...scribbles}
                bgColor={'#ffffff'}
                ref={mtChickenElement}
              />
              <img ref={imgElm} className="hidden" />
            </div>
            <div className="m-3 flex w-56 flex-col p-3 text-center">
              <div className="flex flex-col font-bold">
                <span>ミントが完了しました！</span>
                <span className="font-lily text-sm">
                  Mint has been completed!
                </span>
              </div>
              <button
                className="m-3 flex place-content-center rounded bg-yellow-300 py-2 px-4 font-bold"
                onClick={downloadSVG}
              >
                <span className="flex">
                  <DownloadIcon
                    className="my-auto mx-1 text-slate-50"
                    size="1.3em"
                  />
                  <span className="mx-1 text-white">Download</span>
                </span>
              </button>
              <a
                className="m-3 flex place-content-center rounded bg-sky-400 py-2 px-4 font-bold"
                href={intent}
                target="_blank"
              >
                <FaTwitter className="my-auto mx-1 text-white" size="1.1em" />
                <span className="mx-1 text-white">Tweet</span>
              </a>
              <a
                className="m-3 flex place-content-center rounded py-2 px-4 font-bold"
                style={{ backgroundColor: '#2081e2' }}
                href={osUrl}
                target="_blank"
              >
                <Image
                  src="/opensea.svg"
                  alt="opensea logo"
                  width={25}
                  height={25}
                />
                <span className="mx-1 text-white">Opensea</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    console.log('#close modal')
    return <></>
  }
}
export default Modal
