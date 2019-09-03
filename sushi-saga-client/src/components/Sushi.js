import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log("Logging Sushi Props", props)
  const {name, img_url, price} = props.sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatSushi(props.sushi)}>
        { 
          props.eatenSushi.includes(props.sushi) ?
            null
          :
            <img src={img_url} width="100%" alt={name}/>
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi