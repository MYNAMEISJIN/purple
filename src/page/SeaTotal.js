import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react';

const SeaTotal = (
    { containers, setContainers, totalQuantity, setTotalQuantity,
        totalWeight, setTotalWeight, totalVolume, setTotalVolume,
        incoterms, setIconterms, stateStarting, setStateStarting, startingAirport, setStateStartingAirport,
        stateDestination, setStateDestination, destinationAirport, setDestinationAirport, ciValueResult, setCiValueResult,
        ciCurrency, setCiCurrency }
) => {


    const chargeableWeight = totalWeight >= totalVolume ? totalWeight : totalVolume;
    const airfreightUnitPrice = 0;
    const impCustomsPer = 2 / 1000
    const customsDutyUnitPrice = 0.03
    ///////////////////////////////////////////  공항나라 이름 구하기 위해서 
    const countries = [
        { id: "1", name: "Korea" },
        { id: "2", name: "China" },
        { id: "3", name: "Japan" },
        { id: "4", name: "Vietnam" },
        { id: "5", name: "France" },
        { id: "6", name: "USA" },
    ]

    let startingCountry;
    let startingCountryAirport = startingAirport[0].name;
    let destinationCountry;
    let destinationCountryAirport = destinationAirport[0].name;
    const [totalPrice, setTotalPrice] = useState(0)
    const [unitPrice, setUnitPrice] = useState(0)
    const [fuelAmount, setFuelAmount] = useState(0)
    const [securityAmount, setSecurityAmount] = useState(0);
    //dsfsdfsdf
    const [pickUpTotal, setPickUpTotal] = useState(0);
    const [packingTotal, setPackingTotal] = useState(0);
    const [pickUpAmountValue, setPickUpAmountValue] = useState(0);
    const [pickUpVatValue, setPickUpVatValue] = useState(0);
    const [packingAmountValue, setPackingAmountValue] = useState(0);
    const [packingVatValue, setPackingVatValue] = useState(0);
    //sdfsdfsdf

    let totalCost = 0;
    let moneyByWeight = 0;
    let handingAmountByChargeableWeight = 0;
    let awbAmount = 6500




    for (let i = 0; i < countries.length; i++) {
        if (stateStarting[0].countryID == countries[i].id) {
            startingCountry = countries[i].name


        }
        if (stateDestination[0].countryID == countries[i].id) {
            destinationCountry = countries[i].name

        }

    }
    ///////////////////////////////////////////  공항나라 이름 구하기 위해서  


    function choosingPrice(startingCountry, startingCountryAirport, destinationCountry, destinationCountryAirport) {
        // const airport = [
        //     { id: "1", countryID: "1", name: "Incheon"},
        //     { id: "2", countryID: "1", name: "Kimhae" },
        //     { id: "3", countryID: "2", name: "Shanghai" },
        //     { id: "4", countryID: "2", name: "Beijing" },
        //     { id: "5", countryID: "3", name: "Tokyo" },
        //     { id: "6", countryID: "3", name: "Osaka" },
        //     { id: "7", countryID: "4", name: "Hochiminh" },
        //     { id: "8", countryID: "4", name: "Noi Bai" },
        //     { id: "9", countryID: "5", name: "Paris" },
        //     { id: "10", countryID: "5", name: "Lyon" },
        //     { id: "11", countryID: "6", name: "Los Angeles" },
        //     { id: "11", countryID: "6", name: "O'Hare" }

        //   ]



        if (startingCountry == "Korea") {



            if (startingCountryAirport == "Incheon") {
                if (destinationCountry == "China") {
                    const discount = 40 / 100;
                    if (destinationCountryAirport == "Shanghai") {
                        console.log("Incheon to shaghai")

                        if (chargeableWeight < 45) {
                            moneyByWeight = 9500 - (9500 * discount);
                            console.log("~45", moneyByWeight)
                        }
                        else if (100 > chargeableWeight && chargeableWeight >= 45) {
                            moneyByWeight = 8500 - (8500 * discount);
                            console.log("45~100", moneyByWeight)
                        }
                        else if (300 > chargeableWeight && chargeableWeight >= 100) {
                            moneyByWeight = 6500 - (6500 * discount);
                            console.log("100~300", moneyByWeight)
                        }
                        else if (500 > chargeableWeight && chargeableWeight >= 300) {
                            moneyByWeight = 5000 - (5000 * discount);
                            console.log("300~500", moneyByWeight)
                        }
                        else if (1000 > chargeableWeight && chargeableWeight >= 500) {
                            moneyByWeight = 4500 - (4500 * discount);
                            console.log("500~1000", moneyByWeight)
                        }
                        else if (1000 <= chargeableWeight) {
                            moneyByWeight = 4000 - (4000 * discount);
                            console.log("1000~", moneyByWeight)
                        }
                        totalCost = moneyByWeight * chargeableWeight
                        if (totalCost <= 65000) totalCost = 65000;

                    }
                }
                else if (destinationCountry == "Japan") {
                    const discount = 40 / 100;
                    if (destinationCountryAirport == "Tokyo") {
                        console.log(" Incheon to Tokyo")
                        if (chargeableWeight < 45) {
                            moneyByWeight = 9500 - (9500 * discount);
                            console.log("~45", moneyByWeight)
                        }
                        else if (100 > chargeableWeight && chargeableWeight >= 45) {
                            moneyByWeight = 8500 - (8500 * discount);
                            console.log("45~100", moneyByWeight)
                        }
                        else if (300 > chargeableWeight && chargeableWeight >= 100) {
                            moneyByWeight = 6500 - (6500 * discount);
                            console.log("100~300", moneyByWeight)
                        }
                        else if (500 > chargeableWeight && chargeableWeight >= 300) {
                            moneyByWeight = 5000 - (5000 * discount);
                            console.log("300~500", moneyByWeight)
                        }
                        else if (1000 > chargeableWeight && chargeableWeight >= 500) {
                            moneyByWeight = 4500 - (4500 * discount);
                            console.log("500~1000", moneyByWeight)
                        }
                        else if (1000 <= chargeableWeight) {
                            moneyByWeight = 4000 - (4000 * discount);
                            console.log("1000~", moneyByWeight)
                        }
                        totalCost = moneyByWeight * chargeableWeight
                        if (totalCost <= 65000) totalCost = 65000;

                    }
                }
                else if (destinationCountry == "Vietnam") {
                    const discount = 40 / 100;
                    if (destinationCountryAirport == "Hochiminh") {
                        console.log("Incheon to Hochiminh")
                        if (chargeableWeight < 45) {
                            moneyByWeight = 9500 - (9500 * discount);
                            console.log("~45", moneyByWeight)
                        }
                        else if (100 > chargeableWeight && chargeableWeight >= 45) {
                            moneyByWeight = 8500 - (8500 * discount);
                            console.log("45~100", moneyByWeight)
                        }
                        else if (300 > chargeableWeight && chargeableWeight >= 100) {
                            moneyByWeight = 6500 - (6500 * discount);
                            console.log("100~300", moneyByWeight)
                        }
                        else if (500 > chargeableWeight && chargeableWeight >= 300) {
                            moneyByWeight = 5000 - (5000 * discount);
                            console.log("300~500", moneyByWeight)
                        }
                        else if (1000 > chargeableWeight && chargeableWeight >= 500) {
                            moneyByWeight = 4500 - (4500 * discount);
                            console.log("500~1000", moneyByWeight)
                        }
                        else if (1000 <= chargeableWeight) {
                            moneyByWeight = 4000 - (4000 * discount);
                            console.log("1000~", moneyByWeight)
                        }
                        totalCost = moneyByWeight * chargeableWeight
                        if (totalCost <= 65000) totalCost = 65000;

                    }
                }
                else if (destinationCountry == "France") {
                    const discount = 30 / 100;
                    if (destinationCountryAirport == "Paris") {
                        console.log("Incheon to Paris")
                        if (chargeableWeight < 45) {
                            moneyByWeight = 12000 - (12000 * discount);
                            console.log("~45", moneyByWeight)
                        }
                        else if (100 > chargeableWeight && chargeableWeight >= 45) {
                            moneyByWeight = 9500 - (9500 * discount);
                            console.log("45~100", moneyByWeight)
                        }
                        else if (300 > chargeableWeight && chargeableWeight >= 100) {
                            moneyByWeight = 8500 - (8500 * discount);
                            console.log("100~300", moneyByWeight)
                        }
                        else if (500 > chargeableWeight && chargeableWeight >= 300) {
                            moneyByWeight = 6500 - (6500 * discount);
                            console.log("300~500", moneyByWeight)
                        }
                        else if (1000 > chargeableWeight && chargeableWeight >= 500) {
                            moneyByWeight = 6000 - (6000 * discount);
                            console.log("500~1000", moneyByWeight)
                        }
                        else if (1000 <= chargeableWeight) {
                            moneyByWeight = 6000 - (6000 * discount);
                            console.log("1000~", moneyByWeight)
                        }
                        totalCost = moneyByWeight * chargeableWeight
                        if (totalCost <= 75000) totalCost = 75000;
                    }
                }
                else if (destinationCountry == "USA") {
                    const discount = 30 / 100;
                    if (destinationCountryAirport == "Los Angeles") {
                        console.log("Incheon to Los Angeles")
                        if (chargeableWeight < 45) {
                            moneyByWeight = 13000 - (13000 * discount);
                            console.log("~45", moneyByWeight)
                        }
                        else if (100 > chargeableWeight && chargeableWeight >= 45) {
                            moneyByWeight = 11000 - (11000 * discount);
                            console.log("45~100", moneyByWeight)
                        }
                        else if (300 > chargeableWeight && chargeableWeight >= 100) {
                            moneyByWeight = 9500 - (9500 * discount);
                            console.log("100~300", moneyByWeight)
                        }
                        else if (500 > chargeableWeight && chargeableWeight >= 300) {
                            moneyByWeight = 8500 - (8500 * discount);
                            console.log("300~500", moneyByWeight)
                        }
                        else if (1000 > chargeableWeight && chargeableWeight >= 500) {
                            moneyByWeight = 8000 - (8000 * discount);
                            console.log("500~1000", moneyByWeight)
                        }
                        else if (1000 <= chargeableWeight) {
                            moneyByWeight = 7500 - (7500 * discount);
                            console.log("1000~", moneyByWeight)
                        }
                        totalCost = moneyByWeight * chargeableWeight
                        if (totalCost <= 75000) totalCost = 75000;
                    }
                }


            }
        }

        console.log("totalCost", totalCost)
        console.log("moneyByweight", moneyByWeight)


    }
    choosingPrice(startingCountry, startingCountryAirport, destinationCountry, destinationCountryAirport)

    useEffect(() => {
        setUnitPrice(moneyByWeight);
        setTotalPrice(totalCost);
        setPickUpTotal(parseInt(pickUpAmountValue) + parseInt(pickUpVatValue))
        setPackingTotal(parseInt(packingAmountValue) + parseInt(packingVatValue))
    }, [moneyByWeight, totalCost, pickUpAmountValue, pickUpVatValue, packingAmountValue, packingVatValue])


    const unitPriceFuel = (event) => {
        let fuel = Math.round(parseFloat(chargeableWeight) * parseFloat(event.target.value));
        setFuelAmount(fuel)

    }
    const unitPriceSecurity = (event) => {
        let security = Math.round(parseFloat(chargeableWeight) * parseFloat(event.target.value));
        setSecurityAmount(security)
    }

    const handlingAmount = () => {

        if (chargeableWeight < 100) {
            handingAmountByChargeableWeight = 35000;
        }
        else if (100 <= chargeableWeight && chargeableWeight < 300) {
            handingAmountByChargeableWeight = 45000;
        }
        else if (300 <= chargeableWeight && chargeableWeight < 500) {
            handingAmountByChargeableWeight = 55000;
        }
        else if (500 <= chargeableWeight && chargeableWeight < 1000) {
            handingAmountByChargeableWeight = 65000;
        }
        else if (1000 <= chargeableWeight) {
            handingAmountByChargeableWeight = 75000;
        }


    }

    handlingAmount();




    return (
        <div>
            <Container>

                <Table striped bordered hover className='mb-5'>
                    <thead>
                        <tr className='cost-headline'>
                            <td>Sea Freight</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Exchange Rate:</td>
                            <td>KRW</td>
                            <td>0.00</td>
                            <td>1.00</td>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="text-center pb-4">Charge</th>
                            <th>Per</th>
                            <th>Unit Price</th>
                            <th>Total Amount</th>
                            <th>Amount</th>
                            <th>Vat</th>
                            <th>Total Amount</th>
                            <th rowSpan={2} className="text-center pb-4">Remarks</th>
                        </tr>
                        <tr>
                            <th>Chargeable Weight</th>
                            <th colSpan={2} className="text-center">KRW</th>
                            <th colSpan={3} className="text-center">KRW</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{color: "blue"}}> Ocean Freight</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>O/F</td>
                            <td>{chargeableWeight}</td>
                            <td>{unitPrice?.toLocaleString()}</td>
                            <td></td>
                            <td>{totalPrice?.toLocaleString()}</td>
                            <td></td>
                            <td>{totalPrice?.toLocaleString()}</td>
                            <td className='remark-font-size'>Oceanfreight</td>
                            
                        </tr>
                        <tr>
                            <td>PSS</td>
                            <td>{chargeableWeight}</td>
                            <td><input className='unit-price-fuel-security' placeholder='숫자 입력' type="number" onChange={unitPriceFuel} /></td>
                            <td></td>
                            <td>{fuelAmount?.toLocaleString()}</td>
                            <td></td>
                            <td>{fuelAmount?.toLocaleString()}</td>
                            <td className='remark-font-size'>Peak Season Surcharge</td>
                        </tr>
                        <tr>
                            <td>CRS/ECS/CRC/BRS</td>
                            <td>{chargeableWeight}</td>
                            <td><input className='unit-price-fuel-security' placeholder='숫자 입력' type="number" onChange={unitPriceSecurity} /></td>
                            <td></td>
                            <td>{securityAmount?.toLocaleString()}</td>
                            <td></td>
                            <td>{securityAmount?.toLocaleString()}</td>
                            <td className='remark-font-size'>Emergency Cost Recovery</td>
                        </tr>
                        <tr>
                            <td>LSF/LSS/ECA</td>
                            <td>{chargeableWeight}</td>
                            <td></td>
                            <td></td>
                            <td>{handingAmountByChargeableWeight.toLocaleString()}</td>
                            <td></td>
                            <td>{handingAmountByChargeableWeight.toLocaleString()}</td>
                            <td className='remark-font-size'>Low Sulphur Surchg</td>
                        </tr>
                        <tr>
                            <td>EBS</td>
                            <td>{chargeableWeight}</td>
                            <td></td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td className='remark-font-size'>Emergency Bunker Surchg</td>

                        </tr>
                        <tr>
                            <td>BAF</td>
                            <td>{chargeableWeight}</td>
                            <td></td>
                            <td></td>
                            <td><input className='unit-price-fuel-security' placeholder='숫자 입력' type="number" onChange={(event) => setPickUpAmountValue(parseInt(event.target.value))} /></td>
                            <td><input className='unit-price-fuel-security' placeholder='숫자 입력' type="number" onChange={(event) => setPickUpVatValue(parseInt(event.target.value))} /></td>
                            <td>{pickUpTotal.toLocaleString()}</td>
                            <td className='remark-font-size'>Bunker Adjustment Factor</td>
                        </tr>
                        <tr>
                            <td>CAF</td>
                            <td>{chargeableWeight}</td>
                            <td></td>
                            <td></td>
                            <td><input className='unit-price-fuel-security' placeholder='숫자 입력' onChange={(event) => setPackingAmountValue(parseInt(event.target.value))} /></td>
                            <td><input className='unit-price-fuel-security' placeholder='숫자 입력' onChange={(event) => setPackingVatValue(parseInt(event.target.value))} /></td>
                            <td>{packingTotal.toLocaleString()}</td>
                            <td className='remark-font-size'>Currency Adjustment Factor</td>
                        </tr>
                        <tr>
                            <td>CIC/CIS</td>
                            <td>{chargeableWeight}</td>
                            <td></td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td className='remark-font-size'>Container Imbalance chg</td>
                        </tr>
                        <tr>
                            <td>ISPS/CSS</td>
                            <td>{chargeableWeight}</td>
                            <td></td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td className='remark-font-size'>Intl Ship, Port Security</td>
                        </tr>
                        <tr>
                            <td>THC</td>
                            <td>{chargeableWeight}</td>
                            <td></td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td className='remark-font-size'>Terminal Handling</td>
                        </tr>
                        <tr>
                            <td>CFS</td>
                            <td>{chargeableWeight}</td>
                            <td></td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td className='remark-font-size'>CFS Devanning</td>
                        </tr>
                        <tr>
                            <td>W/F</td>
                            <td>{chargeableWeight}</td>
                            <td></td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td className='remark-font-size'>Wharfage</td>
                        </tr>
                        <tr>
                            <td>CCF</td>
                            <td>{chargeableWeight}</td>
                            <td></td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td className='remark-font-size'>Container Cleaning Fee</td>
                        </tr>
                         <tr>
                            <td>DRAYGE/SHUTTLE</td>
                            <td>{chargeableWeight}</td>
                            <td></td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td className='remark-font-size'>CY to CFS</td>
                        </tr>
                        <tr>
                            <td>VGM FEE</td>
                            <td>Shipment</td>
                            <td></td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td className='remark-font-size'>Verified Gross Mass</td>
                        </tr>
                        <tr>
                            <td>PALLET PACKING</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td className='remark-font-size'>Packing</td>
                        </tr>
                        <tr>
                            <td>D/FEE,B/L FEE</td>
                            <td>Shipment</td>
                            <td></td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td className='remark-font-size'>Carrier DOC FEE</td>
                        </tr>
                        <tr>
                            <td>HCA</td>
                            <td>Shipment</td>
                            <td></td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>IT Trans/Carrier interface</td>
                            <td>Shipment</td>
                            <td></td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                            <td>{awbAmount.toLocaleString()}</td>
                            <td></td>
                        </tr>
                        <tr className='emphasise'>
                            <th >S.Total</th>
                            <th></th>
                            <th>KRW</th>
                            <th></th>
                            <th>{(totalPrice + fuelAmount + securityAmount + handingAmountByChargeableWeight + awbAmount + pickUpAmountValue + packingAmountValue).toLocaleString()}</th>
                            <th>{(pickUpVatValue + packingVatValue).toLocaleString()}</th>
                            <th>{(totalPrice + fuelAmount + securityAmount + handingAmountByChargeableWeight + awbAmount + pickUpTotal + packingTotal).toLocaleString()}</th>
                            <td></td>
                        </tr>
                        <tr>
                            <td>INSURANCE</td>
                            <td>(CI Value * 1.3) * Tariff</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>IMP CUSTOMS</td>
                            <td>0.20%</td>
                            <td></td>
                            <td></td>
                            <td>{ciValueResult * impCustomsPer}</td>
                            <td>{Math.round((ciValueResult * impCustomsPer) * 0.1)}</td>
                            <td>{ciValueResult * impCustomsPer + Math.round((ciValueResult * impCustomsPer) * 0.1)}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>CUSTOMS DUTY</td>
                            <td>CIF Value *</td>
                            <td>3.00%</td>
                            <td></td>
                            <td>{Math.round(((totalPrice + fuelAmount + ciValueResult) * customsDutyUnitPrice)).toLocaleString()}</td>
                            <td></td>
                            <td>{Math.round(((totalPrice + fuelAmount + ciValueResult) * customsDutyUnitPrice)).toLocaleString()}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>CUSTOMS TAX</td>
                            <td>(CIF Value+관세) *</td>
                            <td>10.00%</td>
                            <td></td>
                            <td></td>
                            <td>{(Math.round((ciValueResult + Math.round(((totalPrice + fuelAmount + ciValueResult) * customsDutyUnitPrice))) * 0.1)).toLocaleString()}</td>
                            <td>{(Math.round((ciValueResult + Math.round(((totalPrice + fuelAmount + ciValueResult) * customsDutyUnitPrice))) * 0.1)).toLocaleString()}</td>
                            <td></td>
                        </tr>
                        <tr className='emphasise'>
                            <th >S.Total</th>
                            <th></th>
                            <th>KRW</th>
                            <th></th>
                            <th>Amount</th>
                            <th>Vat</th>
                            <th>Total Amount</th>
                            <td></td>
                        </tr>

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default SeaTotal
