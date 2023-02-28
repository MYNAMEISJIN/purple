import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import { Routes, Route } from 'react-router-dom'
import AirFreight from './page/AirFreight'
import MaybeMore from './page/MaybeMore'
import SeaFreight from './page/SeaFreight'
import Home from './page/Home';
import AboutUs from './page/AboutUs';
import TotalCost from './page/TotalCost';
import Quarantine from './page/Quarantine';
import { useState } from 'react';
import SeaTotal from './page/SeaTotal';



function App() {

  const [containers, setContainers] = useState([{ firstInput: null, secondInput: null, third: null, forth: null, fifth: null }]);
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalWeight, setTotalWeight] = useState(0)
  const [totalVolume, setTotalVolume] = useState(0)
  const [incoterms, setIconterms] = useState("")
  const [stateStarting, setStateStarting] = useState([]);
  const [startingAirport, setStateStartingAirport] = useState([]);
  const [stateDestination, setStateDestination] = useState([]);
  const [destinationAirport, setDestinationAirport] = useState([]);
  const [ciValueResult, setCiValueResult] = useState(0);
  const [ciCurrency, setCiCurrency] = useState("KRW")

  const countries = [
    { id: "1", name: "Korea" },
    { id: "2", name: "China" },
    { id: "3", name: "Japan" },
    { id: "4", name: "Vietnam" },
    { id: "5", name: "France" },
    { id: "6", name: "USA" },
  ]

  const airport = [
    { id: "1", countryID: "1", name: "Incheon" },
    { id: "2", countryID: "1", name: "Kimhae" },
    { id: "3", countryID: "2", name: "Shanghai" },
    { id: "4", countryID: "2", name: "Beijing" },
    { id: "5", countryID: "3", name: "Tokyo" },
    { id: "6", countryID: "3", name: "Osaka" },
    { id: "7", countryID: "4", name: "Hochiminh" },
    { id: "8", countryID: "4", name: "Noi Bai" },
    { id: "9", countryID: "5", name: "Paris" },
    { id: "10", countryID: "5", name: "Lyon" },
    { id: "11", countryID: "6", name: "Los Angeles" },
    { id: "11", countryID: "6", name: "O'Hare" }
  ]





  return (
    <div >
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/airfreight' element={<AirFreight
          containers={containers}
          setContainers={setContainers}
          totalQuantity={totalQuantity}
          setTotalQuantity={setTotalQuantity}
          totalWeight={totalWeight}
          setTotalWeight={setTotalWeight}
          totalVolume={totalVolume}
          setTotalVolume={setTotalVolume}
          incoterms={incoterms}
          stateStarting={stateStarting}
          setStateStarting={setStateStarting}
          startingAirport={startingAirport}
          setStateStartingAirport={setStateStartingAirport}
          stateDestination={stateDestination}
          setStateDestination={setStateDestination}
          destinationAirport={destinationAirport}
          setDestinationAirport={setDestinationAirport}
          ciValueResult={ciValueResult}
          setCiValueResult={setCiValueResult}
          ciCurrency={ciCurrency}
          setCiCurrency={setCiCurrency}


        />} />
        <Route path='/seafreight' element={<SeaFreight
          containers={containers}
          setContainers={setContainers}
          totalQuantity={totalQuantity}
          setTotalQuantity={setTotalQuantity}
          totalWeight={totalWeight}
          setTotalWeight={setTotalWeight}
          totalVolume={totalVolume}
          setTotalVolume={setTotalVolume}
          incoterms={incoterms}
          stateStarting={stateStarting}
          setStateStarting={setStateStarting}
          startingAirport={startingAirport}
          setStateStartingAirport={setStateStartingAirport}
          stateDestination={stateDestination}
          setStateDestination={setStateDestination}
          destinationAirport={destinationAirport}
          setDestinationAirport={setDestinationAirport}
          ciValueResult={ciValueResult}
          setCiValueResult={setCiValueResult}
          ciCurrency={ciCurrency}
          setCiCurrency={setCiCurrency}
        />} />
        <Route path='/maybemore' element={<MaybeMore />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/totalcost' element={<TotalCost
          containers={containers}
          setContainers={setContainers}
          totalQuantity={totalQuantity}
          setTotalQuantity={setTotalQuantity}
          totalWeight={totalWeight}
          setTotalWeight={setTotalWeight}
          totalVolume={totalVolume}
          setTotalVolume={setTotalVolume}
          incoterms={incoterms}
          stateStarting={stateStarting}
          setStateStarting={setStateStarting}
          startingAirport={startingAirport}
          setStateStartingAirport={setStateStartingAirport}
          stateDestination={stateDestination}
          setStateDestination={setStateDestination}
          destinationAirport={destinationAirport}
          setDestinationAirport={setDestinationAirport}
          ciValueResult={ciValueResult}
          setCiValueResult={setCiValueResult}
          ciCurrency={ciCurrency}
          setCiCurrency={setCiCurrency}

        />} />
        <Route path='/quarantine' element={<Quarantine />} />
        <Route path='/seatotalcost' element={<SeaTotal
        containers={containers}
        setContainers={setContainers}
        totalQuantity={totalQuantity}
        setTotalQuantity={setTotalQuantity}
        totalWeight={totalWeight}
        setTotalWeight={setTotalWeight}
        totalVolume={totalVolume}
        setTotalVolume={setTotalVolume}
        incoterms={incoterms}
        stateStarting={stateStarting}
        setStateStarting={setStateStarting}
        startingAirport={startingAirport}
        setStateStartingAirport={setStateStartingAirport}
        stateDestination={stateDestination}
        setStateDestination={setStateDestination}
        destinationAirport={destinationAirport}
        setDestinationAirport={setDestinationAirport}
        ciValueResult={ciValueResult}
        setCiValueResult={setCiValueResult}
        ciCurrency={ciCurrency}
        setCiCurrency={setCiCurrency}
        />}/>
      </Routes>

    </div>
  );
}

export default App;
