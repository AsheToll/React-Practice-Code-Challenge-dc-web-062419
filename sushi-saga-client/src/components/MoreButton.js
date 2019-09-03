import React from 'react'

const MoreButton = (props) => {
  console.log("Checking the MoreButton component props", props)
    return <button onClick={props.moreSushi}>
            More sushi!
          </button>
}

export default MoreButton