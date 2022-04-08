import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Me from '../../assets/images/My-Logo-(w).png'
import Jamming from '../../assets/images/Jamming.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import './Project.scss'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container project-page">
        <img src={Me} alt="Logo" className="projectLogo" />
        <div className="text-zone">
          <div className="banner">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={15}
              />
            </h1>
          </div>
          <div>
            <div className="cardProject">
              <div className="project">
                <h2>Spotify Jamming</h2>
                <img
                  src={Jamming}
                  alt="projectJamming"
                  className="projectPic"
                />
                <p>
                  It's a project while learning JSD#1. <br />
                  Learning about how to use React, and learning to use function
                  such as Props, useState, useEffect, splitting Component and
                  using APIs elsewhere
                </p>
                <a
                  href="https://spoti-sua.surge.sh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFolderOpen} color="#adff2f" />
                </a>
              </div>
              <div className="project">
                <h2>Infinity Tracking app</h2>
                <img
                  src={Jamming}
                  alt="projectJamming"
                  className="projectPic"
                />
                <p>
                  It's a project while learning JSD#1. <br />
                  Learning about how to use React, and learning to use function
                  such as Props, useState, useEffect, splitting Component and
                  using APIs elsewhere
                </p>
                <a
                  href="https://spoti-sua.surge.sh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFolderOpen} color="#adff2f" />
                </a>
              </div>
              <div className="project">
                <h2>MongoBD Database</h2>
                <img
                  src={Jamming}
                  alt="projectJamming"
                  className="projectPic"
                />
                <p>
                  It's a project while learning JSD#1. <br />
                  Learning about how to use React, and learning to use function
                  such as Props, useState, useEffect, splitting Component and
                  using APIs elsewhere
                </p>
                <a
                  href="https://spoti-sua.surge.sh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFolderOpen} color="#adff2f" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects