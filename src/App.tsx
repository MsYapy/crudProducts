import { useEffect, useState } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Form, FormGroup, FormControl } from 'react-bootstrap';
import { GetProducts, CreateProduct, EditProduct, DeleteProduct } from './services/products';
function App() {
  const [data, setData] = useState<any>(null);
  const [cdescription, setCdescription] = useState<string>('');
  const [cprice, setCprice] = useState<number>(0);
  const [eid, setEid] = useState<number>(0);
  const [eprice, setEPrice] = useState<string>('');
  const [did, setDid] = useState<number>(0);

  useEffect(() => {  
     GetProducts()
    .then(dta=>{
     console.log(dta);
     setData(dta)
    })
  }, []);


  const cSubmit = (e: any)=>{
  
    e.preventDefault();
    console.log("*** Crear ***");
    CreateProduct(String(cdescription), Number(cprice));
  }


 const cchangeDesription = (e: any) =>{
     setCdescription(e.target.value);
 }

 const cchangePrice = (e: any) => {
     setCprice(e.target.value);
 }

  const uSubmit = (e: any)=>{
    e.preventDefault();
    console.log("*** Actualizar ***");
    EditProduct(String(eid), Number(eprice))
    
  }
  const echangeId = (e: any) => {

    setEid(e.target.value)
  }

  const echangePrice = (e: any)=>{
      setEPrice(e.target.value)
  }
  
  const dSubmit = (e: any)=>{
    e.preventDefault()
    console.log("*** Eliminar***");
    DeleteProduct(String(did));
  }

  const dchange = (e: any)=> {
    setDid(e.target.value);
  } 

  return (
    <Container>
      <Row>
        <Col>
          <h4 className='text-center'>Agregar Productos</h4>
          <Form  onSubmit={cSubmit}>
            <FormGroup className='w-100 shadow-sm d-flex flex-column aling-items-center'>
              <FormControl type='text' placeholder='Descripción' className="m-2 w-75" value={cdescription} onChange={cchangeDesription}></FormControl>
              <FormControl type='number' placeholder='Precio' className='m-2 w-75' value={cprice} onChange={cchangePrice}></FormControl>
              <Button type='submit' className='m-2 w-50 btn-dark'>Crear Producto</Button>
            </FormGroup>
          </Form>
        </Col>
        <Col>
          <h4  className='text-center'>Editar Productos</h4>
          <Form onSubmit={uSubmit}>
            <FormGroup className='w-100 shadow-sm d-flex flex-column aling-items-center'>
              <Form.Control type='numbers' placeholder='Id' className="m-2 w-50" value={eid} onChange={echangeId}></Form.Control>
              <Form.Control type='number' placeholder='Precio' className='m-2 w-50' value={eprice} onChange={echangePrice}></Form.Control>
              <Button type='submit' className='m-2 w-50 btn-dark'>Editar Producto</Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className='p-2 shadow-sm'>
          <h4  className='text-center'>Productos</h4>
          {data && data.map((dt: any, i: number)=>(
          <ListGroup key={i} className='list-group-horizontal'>
            <ListGroupItem>Id {dt.id}</ListGroupItem>
            <ListGroupItem>{dt.descripcion}</ListGroupItem>
            <ListGroupItem>${dt.precio}</ListGroupItem>

          </ListGroup>
          ))}
        </Col>
        
        <Col className='mt-2'>
          <h4  className='text-center' >Eliminar Productos</h4>
          <Form onSubmit={dSubmit}>
            <FormGroup className='p-2 w-100 shadow-sm d-flex flex-column aling-items-end'>
              <Form.Control type='numbers' placeholder='Id' className="m-2 w-50" value={did} onChange={dchange}></Form.Control>
              <Button type='submit' className='m-2 w-50 btn-dark'>Eliminar Producto</Button>
            </FormGroup>
          </Form>
        </Col>
      
      </Row>
   
    </Container>
  )
}

export default App
