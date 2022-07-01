import Toggle from '../../components/toggle'

const DoodleSelector = ({ doodlesInfo }) => {
  return (
    <div className="m-3 rounded-xl bg-white p-3">
      <h2 className="m-1 text-left text-xl">
        <span className="font-mplus1 font-bold">らくがき選択</span>
        <span className="mx-2 font-ubuntu text-sm">Doodle Select</span>
      </h2>
      <hr></hr>
      <div className="flex flex-wrap">
        {doodlesInfo.map(({ title, ruby, state, setState }) => (
          <Toggle key={ruby} title={title} ruby={ruby} state={state} setState={setState} />
        ))}
      </div>
    </div>
  )
}
export default DoodleSelector
