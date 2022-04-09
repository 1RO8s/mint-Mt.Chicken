import InputColor from 'react-input-color'

const ColorPicker = ({ title, ruby, setColor, initialValue }) => {
  const _title = title || '_title_'
  return (
    <div className="mx-3 my-1 flex flex-col text-left">
      <ruby>
        <span className='font-bold'>{_title}</span>
        <rt className='text-left text-xs'>{ruby}</rt>
      </ruby>
      <InputColor
        initialValue={initialValue}
        onChange={setColor}
        style={{ height: 30, width: 90, padding: 0 }}
        placement="left"
      />
    </div>
  )
}
export default ColorPicker
