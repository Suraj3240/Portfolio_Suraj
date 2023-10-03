import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CgCPlusPlus } from 'react-icons/cg'
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava
} from 'react-icons/di'
import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'
import { SiBootstrap, SiExpress, SiMysql, SiJquery } from 'react-icons/si'
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql
// } from 'react-icons/si'
// import { TbBrandGolang } from 'react-icons/tb'

function Techstack () {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJava />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaJs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiJquery />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col> */}
    </Row>
  )
}

export default Techstack
