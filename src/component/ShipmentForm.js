import React from 'react'
import { Form,Row,Col } from 'react-bootstrap'

const ShipmentForm = ({item,setContainers,containers,index}) => {
    
    const deleteItem = (event,index) => {
        event.preventDefault();
        const deleteItem=[...containers]
        deleteItem.splice(index,1)
        setContainers(deleteItem)
    }

    const check = (event,item)=>{
        event.preventDefault();
        console.log("item",item)
        console.log("index",index)
    }
    
    const quantityHandleChange = (event,index)=>{
        const inputData = [...containers]

        
        
        inputData[index].firstInput=event.target.value
        
        
        
        setContainers(inputData)
    }
    const lengthHandleChange = (event,index)=>{
        const inputData = [...containers]
        
        inputData[index].secondInput=event.target.value
        setContainers(inputData)
    }
    const widthHandleChange = (event,index)=>{
        const inputData = [...containers]
        
        inputData[index].third=event.target.value
        setContainers(inputData)
    }
    const heightHandleChange = (event,index)=>{
        const inputData = [...containers]
        
        inputData[index].forth=event.target.value
        setContainers(inputData)
    }
    const weightHandleChange = (event,index)=>{
        const inputData = [...containers]
        console.log(event)
        inputData[index].fifth=event.target.value
        setContainers(inputData)
    }
   
    return (
        <div>
            <Form>
                <Row>
                <div>{item.id}</div>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>수량</Form.Label>
                            <Form.Control type="text" value={item.firstInput} onChange={event => quantityHandleChange(event, index)}  placeholder="Quantity" />
                            
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group className="mb-3 length">
                            <Form.Label>길이/cm</Form.Label><div className='x'>x</div>
                            <Form.Control type="text" value={item.secondInput} onChange={event => lengthHandleChange(event, index)} placeholder="Length" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3 length">
                            <Form.Label>폭/cm</Form.Label><div className='x'>x</div>
                            <Form.Control type="number" value={item.third} onChange={event => widthHandleChange(event, index)} placeholder="Width" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>높이/cm</Form.Label>
                            <Form.Control type="number" value={item.forth} onChange={event => heightHandleChange(event, index)} placeholder="Height" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>중량/kg</Form.Label>
                            <Form.Control type="number" value={item.fifth} onChange={event => weightHandleChange(event, index)} placeholder="Weight" />
                        </Form.Group>
                    </Col>
                    
                        <Col lg={1} md={1} className="delete-button">
                            <button onClick={(event)=>deleteItem(event,index)}>D</button>
                        </Col> 

                        
                </Row>


            </Form>
        </div>
    )
}

export default ShipmentForm
