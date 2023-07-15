import React from 'react'
import {Row, Table} from "react-bootstrap"
import {Col} from "react-bootstrap"



import Footer from '../components/Footer'
import ApiUser from '../components/ApiUser'
const Home = () => {
  return (
    <div className=''>
    <div className="home-top"></div>
    <Row className='text-center gap-5'>
      <Col className=''>
      <img src="./assets/cw.svg" alt="" width={"100px"} height={"100px"} className=' mt-5'/>
      <div  className='mt-5'>
        <ApiUser/>
        
      </div>
      <div  className='mt-5'>
        <Table />
      </div>
      <div  className='mt-5'>
        <Footer />
      </div>
      </Col>
    </Row>
    <div className="home-bottom"></div>
    </div>
  )
}

export default Home