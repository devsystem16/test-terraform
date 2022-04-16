import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
 
function App() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-rows-2">
          <div className="bg-blue-200">A</div>
          <div className="bg-blue-300">B</div>
          <div className="bg-blue-400 col-span-2 row-span-2">C</div>
          <div className="bg-blue-500">D</div>
          <div className="bg-blue-600">E</div>
      </div>


      <div className="grid grid-flow-col grid-rows-3 grid-cols-4">
      <div className="bg-red-100">1</div>
      <div className="bg-red-200">2</div>
      <div className="bg-red-300">3</div>
      <div className="bg-red-400">4</div>
      <div className="bg-red-500">5</div>
      <div className="bg-red-600">6</div>
      <div className="bg-red-700">7</div>
      <div className="bg-red-800">8</div>
      <div className="bg-red-900">9</div>
      <div className="bg-red-900">10</div>
      </div>
    </div>
  )
}

export default App
