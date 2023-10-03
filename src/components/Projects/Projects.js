import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import drums from '../../Assets/Projects/Drum_beat.png'
import dice from '../../Assets/Projects/Dice_roll.png'
import quiz from '../../Assets/Projects/Quiz.png'
import roam from '../../Assets/Projects/Roam_mates.png'
import simon_game from '../../Assets/Projects/Simon_game.png'
import events from '../../Assets/Projects/Eventeger.png'

function Projects () {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={roam}
              isBlog={false}
              title='Roam Mates'
              description='Roam Mates is a platform that connects like-minded travelers seeking adventure partners for their journeys. The users can fill in their details, preferences of their travel buddy, destination. Roam Mate will pair you with your travel buddy considering your preferences and the destinations. The frontend part is implemented with HTML, CSS, JavaScript, and Bootstrap.'
              ghLink='https://github.com/Suraj3240/The-Trojan-Horse_Clash_of_Codes'
              demoLink='https://the-trojan-horse-clash-of-codes-c2ztci323-suraj3240.vercel.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={events}
              isBlog={false}
              title='Eventeger'
              description='Event hosting and booking platform for various events. The website consists of 3 modules: Admin, Organizers, and Customers. The customers can see and book tickets for the various events which are listed in thier city. The Organisers can put up a new events and Admins can modify any event which has been listed on the website. It also includes a talkback Chat-bot feature.'
              ghLink='https://github.com/Suraj3240/Eventeger'
              demoLink='https://surajeventeger.netlify.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title='Quiz App'
              description='Primarily a quiz app which also contains a personal information about me. The quiz app is a multiple choice question based quiz. The app is made using HTML, CSS, JavaScript, and Bootstrap. It contains 2 modes to play: Practice and Test. At the end it displays the final score of the user.'
              ghLink='https://github.com/Suraj3240/Quiz-website'
              demoLink='https://surajquiz.netlify.app/'
            />
          </Col>

          <h1 className='project-heading'>
            Mini <strong className='purple'>Projects </strong>
          </h1>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={drums}
              isBlog={false}
              title='Drum Kit'
              description="It's a drum kit which plays different sounds on pressing different keys. It's made using HTML, CSS, JavaScript, and Bootstrap."
              ghLink='https://github.com/Suraj3240/Drum-Beats-website'
              demoLink='https://drumbeats.vercel.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={simon_game}
              isBlog={false}
              title='Simon Game'
              description="It's a memory game. It plays a sequence of sounds and the user has to repeat the sequence. It's made using HTML, CSS, JavaScript, and Bootstrap. When the user repeats the sequence correctly, the game plays the next sequence. If the user repeats the sequence incorrectly, the game ends."
              ghLink='https://github.com/Suraj3240/Simon-Game'
              demoLink='https://simon-game-ten-delta.vercel.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={dice}
              isBlog={false}
              title='Roll a Dice'
              description="It's a dice rolling game. It rolls a pair of dice and displays the winner with the highest number."
              ghLink='https://github.com/Suraj3240/Dice-Game-Website'
              demoLink='https://diceroll-two.vercel.app/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
