import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard () {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'> Suraj Shinde </span>
            from <span className='purple'> Mumbai, India.</span>
            <br /> I am a Third Year student pursuing B.Tech in Computer Science
            and Engineering (IoT, Cybersecurity, Blockchain Technology) from
            Dwarkadas J. Sanghvi College of Engineering, Mumbai .
            <br />
            I love solving problems and learning new things. I solve DSA
            problems on Leetcode and I am also a 2 ⭐ coder on Codechef.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Playing Games (Outdoor)
            </li>
            <li className='about-activity'>
              <ImPointRight /> Watching Movies
            </li>
            <li className='about-activity'>
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "The pain of discipline is far better than the pain of regret!"{' '}
          </p>
          <footer className='blockquote-footer'>Someone</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
