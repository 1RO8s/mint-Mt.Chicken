import React from "react";
import Image from 'next/image'
import { FaTwitter } from 'react-icons/fa'
import { VscClose } from 'react-icons/vsc'
import { HiOutlineDownload } from 'react-icons/hi'

import MtChicken from './mtChicken'

const Modal = ({ showModal, setShowModal, colors, scribbles, bgColor }) => {
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
  console.log({...colors})

  const mtChickenElement = React.useRef(null)
  const imgElm = React.useRef(null)
  const downloadSVG = (e) => {
    console.log('download svg!')
    console.log(mtChickenElement)

    // SCGをBlob化したあとURL生成
    const svgText = new XMLSerializer().serializeToString(
      mtChickenElement.current
    )
    const blob = new Blob([svgText], {type: 'image/svg+xml;charset=utf-8'})
    const svgUrl = URL.createObjectURL(blob);

    // 生成したSVGのダウンロード処理
    const a = document.createElement("a");
    a.href = svgUrl
    a.download = 'MtChicken.svg'
    a.click()
    //a.dispatchEvent(new MouseEvent("click"));
    URL.revokeObjectURL(svgUrl);
  }


  if (showModal) {
    console.log('#open modal')
    return (
      <div
        id="overlay"
        className="fixed bg-gray-300"
        style={overlay}
      >
        <div id="modalContent" className="flex flex-col w-fit" style={modalContent}>
          <VscClose className="rounded hover:bg-slate-200" onClick={closeModal}/>
          <div className="flex flex-row">
            <div className="flex flex-col m-3 w-56">
              <MtChicken
              {...colors}
              {...scribbles}
              bgColor={'#ffffff'}
              ref={mtChickenElement}
              />
              <img ref={imgElm} className="hidden"/>
            </div>
            <div className="flex flex-col m-3 p-3 text-center w-56">
              <div className="flex flex-col font-bold">
              <span>ミントが完了しました！</span>
              <span className="font-lily text-sm">Mint has been completed!</span>
              </div>
              <button className="flex m-3 py-2 px-4 rounded font-bold bg-yellow-300 place-content-center" onClick={downloadSVG}>
                <span className="flex">
                <HiOutlineDownload  className="my-auto mx-1 text-slate-50" size="1.3em"/>
                <span className="mx-1 text-white">Download</span>
                </span>
              </button>
              <button className="flex m-3 py-2 px-4 rounded font-bold bg-sky-400 place-content-center">
                <a
                  className="flex"
                  href="https://tailwindcss.com/"
                  target="_blank"
                >
                  <FaTwitter className="my-auto mx-1 text-white" size="1.1em"/>
                  <span className="mx-1 text-white">Tweet</span>
                </a>
              </button>
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
