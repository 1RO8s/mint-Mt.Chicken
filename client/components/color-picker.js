import InputColor from 'react-input-color'
import { ChromePicker } from 'react-color';

const ColorPicker = ({ title, ruby, color, setColor, initialValue }) => {
  const _title = title || '_title_'

  const lavel1 = (
    <>
    <span className='text-xs'>{ruby}</span>
    <span className='text-sm'>{title}</span>
    </>
  )
  const lavel2 = (
    <>
    <ruby>
        <span className='font-bold '>{_title}</span>
        <rt className='text-left text-xs'>{ruby}</rt>
      </ruby>
    </>
  )

  return (
    <div className="mx-1 my-1 flex flex-col text-left items-center -grow">
      <div className='flex flex-col'>
      {lavel1}
      <InputColor
        initialValue={initialValue}
        onChange={setColor}
        style={{ height: 30, width: 90, padding: 0}}
        placement="left"
      />
      </div>
    </div>
  )

  return (
    <div className="mx-1 my-1 flex flex-col text-left items-center -grow">
      <div className='flex flex-col'>
      <span className='text-xs'>{ruby}</span>
    <span className='text-sm'>{title}</span>
      <ChromePicker
        color={color}
        onChange={setColor}
      />
      </div>
    </div>
  )
}
export default ColorPicker