import InputColor from 'react-input-color'
import { ChromePicker } from 'react-color'
import React from 'react'

const ColorPicker = ({ title, ruby, color, setColor, initialValue }) => {
  //const _title = title || '_title_'

  const [isOpen, setIsOpen] = React.useState(false)


  const handleChange = (color) => {
    setColor(color.hex);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };


  const Picker = () => (
    <div className='popover z-10 absolute'>
      <div className='cover fixed top-0 right-0 left-0 bottom-0' onClick={handleClose}/>
      <ChromePicker color={color} onChange={setColor} />
    </div>
  )

  

  
  return (
    <div className="-grow mx-1 my-1 flex flex-col items-center text-left">
      <div className="flex flex-col">
        <span className="text-xs">{ruby}</span>
        <span className="text-sm">{title}</span>
        <InputColor
          initialValue={initialValue}
          onChange={setColor}
          style={{ height: 30, width: 90, padding: 0 }}
          placement="left"
        />
      </div>
    </div>
  )

  return (
    <div className="-grow mx-1 my-1 flex flex-col items-center text-left">
      <div className="flex flex-col">
        <span className="text-xs">{ruby}</span>
        <span className="text-sm">{title}</span>
        <ChromePicker color={color} onChange={setColor} />
      </div>
    </div>
  )
}
export default ColorPicker
