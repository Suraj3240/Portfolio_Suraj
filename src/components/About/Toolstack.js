import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsGithub } from 'react-icons/bs'
import {
  SiVisualstudiocode,
  SiPostman,
  // SiSlack,
  // SiVercel,
  SiEclipseide,
  SiRoblox
  // SiRobloxstudio
} from 'react-icons/si'
function Toolstack () {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <BsGithub />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiRoblox />
      </Col>
      {/* <Col xs={4} md={2} className='tech-icons'>
        <SiRobloxstudio />
      </Col> */}
      {/* <Col xs={4} md={2} className='tech-icons'>
        <SiVercel />
      </Col> */}
      {/* <Col xs={4} md={2} className='tech-icons'>
        <SiSlack />
      </Col> */}
    </Row>
  )
}

export default Toolstack
