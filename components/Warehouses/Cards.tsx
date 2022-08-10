import WarehouseCard from "./WarehouseCard";
import React from 'react'

const Cards = () => {
  return (
   <div className="grid grid-cols-2 grid-flow-row gap-6">
        <WarehouseCard />
        <WarehouseCard />
        <WarehouseCard />


   </div>
  )
}

export default Cards