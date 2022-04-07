import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, Create work out of fun, Food waste machine, and like to
            learn new thing !!!
          </p>

          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
              idx={15}
            />
          </h1>
          <div className="education">
            <div className="major">
              <h2>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={[
                    'A',
                    'g',
                    'r',
                    'i',
                    'c',
                    'u',
                    'l',
                    't',
                    'u',
                    'r',
                    'e',
                    '',
                    't',
                    'e',
                    'c',
                    'h',
                    'n',
                    'o',
                    'l',
                    'o',
                    'g',
                    'y',
                  ]}
                  idx={15}
                />
              </h2>
            </div>
            <p>Rajamangala University of Technologies</p>
            <div>
              <p>
                Bachelor of science, Agriculture of Technology.
                <br />
                Second class honors.
              </p>
            </div>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
