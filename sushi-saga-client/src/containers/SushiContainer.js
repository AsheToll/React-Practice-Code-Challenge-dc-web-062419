import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  console.log("Checking SushiContainer props", props.sushiBelt)
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiBelt.map(
            sushi => {
              return <Sushi
                key = {sushi.id}
                sushi = {sushi}
                eatSushi = {props.eatSushi}
                eatenSushi = {props.eatenSushi}
              />
            }
          )
        }
        
        <MoreButton
          moreSushi = {props.moreSushi}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer