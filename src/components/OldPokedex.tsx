import React from 'react'
import UpperScreen from './UpperScreen'
import LowerScreen from './LowerScreen'

const OldPokedex: React.FC = () => {
  return (
    <>
      <main className="pokedex">
        <div className="pokedex__top">
          <div className="pokedex__top--left">
            <div className="pokedex__top--left--spacer"></div>
            <div className="pokedex__top--left--content">
              <div className="black-dot__wrapper--container">
                <div className="black-dot__wrapper black-dot__wrapper1">
                  <div className="black-dot"></div>
                </div>
                <div className="black-dot__wrapper black-dot__wrapper2">
                  <div className="black-dot"></div>
                  <div className="black-dot"></div>
                </div>
                <div className="black-dot__wrapper black-dot__wrapper3">
                  <div className="black-dot"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="pokedex__top--center">
            <div className="center-card">
              <div className="center-card__black-square">
                <div className="black-dot__container">
                  <div className="black-dot"></div>
                </div>
              </div>
              <div className="center-card__screen--border">
                <div className="center-card__screen">
                  <UpperScreen />
                  <div className="center-card__screen--glare"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="pokedex__top--right"></div>
        </div>
        <div className="pokedex__center">
          <div className="pokedex__center--dotWrapper">
            <div className="pokedex__center--dot"></div>
          </div>
          <div className="glare"></div>
        </div>
        <div className="pokedex__bottom">
          <div className="pokedex__bottom--left">
            <div className="cross__outer">
              <div className="cross__inner">
                <div className="cross">
                  <div className="cross--square cross--square1"></div>
                  <div className="cross--square cross--square2"></div>
                  <div className="cross--square cross--square3"></div>
                  <div className="cross--square cross--square4"></div>
                  <div className="cross--square cross--square5"></div>
                  <div className="cross--square cross--square6"></div>
                  <div className="cross--square cross--square7"></div>
                  <div className="cross--square cross--square8"></div>
                  <div className="cross--square cross--square9"></div>
                </div>
              </div>
            </div>
            <div className="green-square"></div>
          </div>

          <div className="pokedex__bottom--center">
            <div className="center-card">
              <div className="center-card__black-square">
                <div className="white-dots__container">
                  <div className="white-dots">
                    <div className="white-dots--dot"></div>
                    <div className="white-dots--dot"></div>
                  </div>
                </div>
              </div>
              <div className="center-card__screen--border">
                <div className="center-card__screen">
                  <LowerScreen />
                  <div className="center-card__screen--glare"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="pokedex__bottom--right">
            <div className="gps__outer--container">
              <div className="gps__outer">
                <div className="gps__inner">
                  <div className="gps"></div>
                  <div className="gps--little-dot"></div>
                </div>
                <div className="glare"></div>
              </div>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </main>
    </>
  )
}

export default OldPokedex
