import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import ShipmentForm from '../component/ShipmentForm'


const SeaFreight = ({ containers, setContainers, totalQuantity, setTotalQuantity,
  totalWeight, setTotalWeight, totalVolume, setTotalVolume,
  incoterms, setIconterms, stateStarting, setStateStarting, startingAirport, setStateStartingAirport,
  stateDestination, setStateDestination, destinationAirport, setDestinationAirport, ciValueResult, setCiValueResult,
  ciCurrency, setCiCurrency }) => {


  const CiValueCurrency = [
    { name: "KRW" },
    { name: "USD" },
    { name: "EUR" },
    { name: "CNY" },
    { name: "JPY" },
  ]

  //cascading dropdown//cascading dropdown//cascading dropdown
  const countries = [
    { id: "1", name: "Korea" },
    { id: "2", name: "China" },
    { id: "3", name: "Japan" },
    { id: "4", name: "Vietnam" },
    { id: "5", name: "France" },
    { id: "6", name: "USA" },
  ]

  const states = [
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
  const [country, setCountry] = useState([])
  // const [stateStarting, setStateStarting] = useState([]);
  // const [startingAirport, setStateStartingAirport] =useState([]);
  // const [stateDestination, setStateDestination] = useState([]);
  // const [destinationAirport, setDestinationAirport] =useState([]);

  useEffect(() => {
    setCountry(countries)
  }, [])

  const handleCountryStarting = (id) => {
    const dt = states.filter(x => x.countryID == id)
    console.log("id", dt)
    setStateStarting(dt);

  }

  const handleCountryStartingAirport = (id) => {
    const dt = states.filter(x => x.id == id)
    setStateStartingAirport(dt)
    console.log(startingAirport)
  }



  const handleCountryDestination = (id) => {
    const dt = states.filter(x => x.countryID == id)
    setStateDestination(dt);
  }

  const handleCountryDestinationAirport = (id) => {
    const dt = states.filter(x => x.id == id)
    setDestinationAirport(dt)
    console.log(destinationAirport)
  }
  //cascading dropdown//cascading dropdown//cascading dropdown

  // const [containers, setContainers] = useState([{ firstInput: null, secondInput: null, third: null, forth: null, fifth: null }]);
  // const [totalQuantity, setTotalQuantity] = useState(0)
  // const [totalWeight, setTotalWeight] = useState(0)
  // const [totalVolume, setTotalVolume] = useState(0)
  // const [incoterms,setIconterms] =useState("")
  const navigate = useNavigate("")

  let totalQuantityMe = 0;
  let totalWeightMe = 0;
  let totalVolumeMe = 0;







  const add = (event) => {
    event.preventDefault();
    const container = [...containers, { firstInput: null, secondInput: null, third: null, forth: null, fifth: null }]
    setContainers(container)

  }
  const getTotal = () => {
    console.log("click")

    containers.forEach(element => {
      totalQuantityMe = totalQuantityMe + parseFloat(element.firstInput);
      totalWeightMe = totalWeightMe + parseFloat(element.fifth) * parseFloat(element.firstInput);
      totalVolumeMe = totalVolumeMe + (parseFloat(element.secondInput) * parseFloat(element.third) * parseFloat(element.forth)) * parseFloat(element.firstInput);
    });

    setTotalQuantity(totalQuantityMe.toFixed(2))

    setTotalWeight(totalWeightMe.toFixed(2))

    setTotalVolume((totalVolumeMe / 6000).toFixed(2))


  }

  const incoterm = (event) => {

    setIconterms(event.target.value)
    console.log(incoterms)
  }


  const goToThePage = () => {

    navigate("/seatotalcost")
  }

  // const deleteItem = (event, id) => {
  //     event.preventDefault();

  //     console.log("id", id)
  //     console.log("brefore", containers)

  //     // console.log("after",)
  //     containerss = containers.filter(a => a.id !== id)
  //     setContainers(containerss);
  //     console.log("after", containers)
  //     // console.log(containers);

  // }







  return (
    <div>
    <Container>

        <section>
            <h1 className='transport-route'>Transport route<span className='transport-route-mini-title'>(Sea freight)</span></h1>
            <Row>
                <Col>
                    <h3 className='countries-point'>Starting point</h3>
                    <Form>
                        <Form.Label>departure country</Form.Label>
                        <Form.Select controlId="departureCountry" id="ddlCountry" className='form-control mb-3' onChange={(event) => handleCountryStarting(event.target.value)}>

                            <option value="0">departure country</option>

                            {
                                country &&
                                    country !== undefined ?
                                    country.map((ctr, index) => (
                                        <option key={index} value={ctr.id}>{ctr.name}</option>
                                    )
                                    ) : "No country"
                            }

                        </Form.Select>



                        <Form.Label>Airport</Form.Label>
                        <Form.Select controlId="Airport" id="ddlStates" className='form-control mb-3' onChange={(event) => handleCountryStartingAirport(event.target.value)}>

                            <option value="0">Airport</option>

                            {
                                stateStarting &&
                                    stateStarting !== undefined ?
                                    stateStarting.map((ctr, index) => (
                                        <option key={index} value={ctr.id}>{ctr.name}</option>
                                    )
                                    ) : "No country"
                            }

                        </Form.Select>


                        <Form.Group className="mb-3" controlId="formBasicZipCode">
                            <Form.Label>Zip code</Form.Label>
                            <Form.Control type="zipCode" placeholder="Zip code" />
                        </Form.Group>

                    </Form>
                </Col>
                <Col>
                    <h3 className='countries-point'>destination</h3>
                    <Form>
                        <Form.Label>departure country</Form.Label>
                        <Form.Select controlId="departureCountry" id="ddlCountry" className='form-control mb-3' onChange={(event) => handleCountryDestination(event.target.value)}>

                            <option value="0">departure country</option>

                            {
                                country &&
                                    country !== undefined ?
                                    country.map((ctr, index) => (
                                        <option key={index} value={ctr.id}>{ctr.name}</option>
                                    )
                                    ) : "No country"
                            }

                        </Form.Select>
                        <Form.Label>Airport</Form.Label>
                        <Form.Select controlId="Airport" id="ddlStates" className='form-control mb-3' onChange={(event) => handleCountryDestinationAirport(event.target.value)}>

                            <option value="0">Airport</option>

                            {
                                stateDestination &&
                                    stateDestination !== undefined ?
                                    stateDestination.map((ctr, index) => (
                                        <option key={index} value={ctr.id}>{ctr.name}</option>
                                    )
                                    ) : "No country"
                            }

                        </Form.Select>


                        <Form.Group className="mb-3" controlId="formBasicZipCode">
                            <Form.Label>Zip code</Form.Label>
                            <Form.Control type="zipCode" placeholder="Zip code" />
                        </Form.Group>

                    </Form>
                </Col>
                <h3 className='countries-point'>CI VALUE</h3>


                <Col lg={3}>
                    <Form.Label>currency</Form.Label>
                    <Form.Select controlId="departureCountry" id="ddlCountry" className='form-control mb-3' onChange={event => setCiCurrency(event.target.value)}>
                        {

                            CiValueCurrency.map((item) => (
                                <option>{item.name}</option>
                            ))

                        }

                    </Form.Select>
                </Col>
                <Col lg={5}>
                    <Form.Label>amount</Form.Label>

                    <Form.Control type="number" placeholder="CI value Amount" onChange={(event) => setCiValueResult(parseInt(event.target.value))} />
                </Col>


                <h3>{ciValueResult.toLocaleString()} {ciCurrency}</h3>


            </Row>
        </section>


        <section className='mt-5'>
            <h1 className='transport-route'>Shipment</h1>

            <Col>
                <h3 className='countries-point'>cargo details</h3>


                {containers.map((item, index) => (
                    <ShipmentForm item={item} index={index} setContainers={setContainers} containers={containers} />
                ))}




                <button className='add-containers' onClick={add}>+</button>
                <button onClick={getTotal}>get total</button>


                <h3 className='countries-point'>Current total</h3>
                <Form>
                    <Row>


                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicZipCode">
                                <Form.Label>총수량</Form.Label>
                                <h3>{totalQuantity}</h3>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3 length" controlId="formBasicZipCode">
                                <Form.Label>총중량/kg</Form.Label>
                                <h3>{totalWeight}</h3>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3 length" controlId="formBasicZipCode">
                                <Form.Label>총용적/kg</Form.Label>
                                <h3>{totalVolume}</h3>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicZipCode">
                                <Form.Label>Chargeable Weight</Form.Label>
                                <h3>{parseFloat(totalWeight) >= parseFloat(totalVolume) ? totalWeight : totalVolume}</h3>
                            </Form.Group>
                        </Col>
                    </Row>


                </Form>
            </Col>
        </section>

        <section className='mt-5'>
            <h1 className='transport-route'>Incoterms</h1>

            <Col>


                <Form onClick={incoterm}>
                    <Row>


                        <Col lg={3} md={3}>
                            <Form.Group className="mb-3" controlId="formBasicZipCode">
                                <Form.Label><h5>Prepaid</h5></Form.Label>
                                <Form.Check type="radio" name="incoterms" value="prepaid" />
                            </Form.Group>
                        </Col>

                        <Col lg={3} md={3}>
                            <Form.Group className="mb-3 length" controlId="formBasicZipCode">
                                <Form.Label><h5>Collect</h5></Form.Label>
                                <Form.Check type="radio" name="incoterms" value="collect" />
                            </Form.Group>
                        </Col>
                    </Row>


                </Form>
            </Col>

            <div>
                <h5>
                    CPT
                </h5>
                <div className='description'>
                    Carriage Paid To (named place of destination). The seller has to arrange for the carriage to the named destination without bearing the risks of loss of and/or damage to the goods or additional costs due to events occurring after acceptance of the goods.
                </div>
            </div>
            <div>
                <h5>
                    FCA
                </h5>
                <div className='description'>
                    Free Carrier (named place of delivery). 매도인은 매수인이 지명 한 운송인에게 물품을 인도해야 합니다.
                </div>
            </div>

        </section>


        <section className='text-center mb-5 mt-5'>



            <Button onClick={() => goToThePage()} variant="dark" >견적구하기</Button>

        </section>
    </Container>

</div>
  )
}

export default SeaFreight
