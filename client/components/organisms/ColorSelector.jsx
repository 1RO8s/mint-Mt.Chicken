import ColorPicker from '../color-picker'

const ColorSelector = ({pickersInfo}) => {
  return (
    <div className="m-3 rounded-xl bg-white p-3">
      <h2 className="mb-1 text-left text-xl">
        <span className="font-mplus1 font-bold">色選択</span>
        <span className="mx-2 font-ubuntu text-sm">Color Select</span>
      </h2>
      <hr style={{ border: 'solid 1px black' }} />
      <div className="flex flex-wrap">
        {pickersInfo.map(({title, ruby, color, setColor}) => (
          <ColorPicker
            key={ruby}
            title={title}
            ruby={ruby}
            color={color}
            setColor={setColor}
          />
        ))}
      </div>
    </div>
  )
}
export default ColorSelector;
