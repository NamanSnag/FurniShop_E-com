import React from 'react'

import './style.scss'

const FurnitureType = () => {

    const data = [
      {
        image: "https://plus.unsplash.com/premium_photo-1678447671053-74ab9d0e2dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        amount: 1008,
        type : "Table"
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1661764050606-dc7db26936cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        amount: 6000,
        type : "Chair"
      },
      {
        image: "https://images.unsplash.com/photo-1593286120049-2dee3bb42a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGRvb3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        amount: 1060,
        type : "Door"
      },
      {
        image: "https://images.unsplash.com/photo-1551907234-fb773fb08a2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHN0b29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        amount: 1077,
        type : "Stool"
      },
      {
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        amount: 1077,
        type : "Stool"
      }
      ];

  return (
    <div className="fList">
        {data.map((item, index) => {
          return (
            <div key={index} className="fListItem">
              <img
                className="fListImg"
                src={item.image}
                alt="lt"
              />
              <h1>{item.type}</h1>
              <h2>{item.amount}</h2>
            </div>
          );
        })}
  </div>
  )
}

export default FurnitureType
