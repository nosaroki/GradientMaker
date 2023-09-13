import Gradient from "./components/Gradient"
import { useSelector } from "react-redux"
import ColorInput from "./components/inputs/ColorInput"
import AddRemoveColor from "./components/inputs/AddRemoveColor"
import RangeAngle from "./components/inputs/RangeAngle"
import SelectColor from "./components/inputs/SelectColor.jsx"
import RangeColorPosition from "./components/inputs/RangeColorPosition"
import OpenModalBtn from "./components/modal/OpenModalBtn"

function App() {

  const gradientValues = useSelector(state => state.gradient)

  return (
  <div className="relative text-orange-900 max-w-4xl mx-auto p-4 mt-20 border border-orange-800 flex">
    <div className="w-1/2 p-4 pr-8">
      <h1 className="text-center text-xl">Gradient Generator </h1>
      <p className="text-center mb-6">Bring style to your apps</p>
      <p className="mb-1">Colors (minimum 2, maximum 5)</p>
      <div className="flex mb-2">
        {gradientValues.colors.map(obj => (
            <ColorInput id={obj.id} color={obj.value} key={obj.id} />
        ))}
      </div>
      <div className="mb-5">
        <AddRemoveColor action={"remove"} text={"-"} />
        <AddRemoveColor action={"add"} text={"+"} />
      </div>
      <p>Pick and change a color's position</p>
      <SelectColor />
      <p>Color's position</p>
      <RangeColorPosition />
      <p>Gradient Global Angle</p>
      <RangeAngle />

      <OpenModalBtn />
    </div>
    <Gradient />
  </div>
  )
}

export default App
