import React from 'react'
import Typewriter from 'typewriter-effect'

function Type () {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Developer',
          'Competitive Programmer',
          'MERN Stack Developer',
          'Programmer'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  )
}

export default Type
