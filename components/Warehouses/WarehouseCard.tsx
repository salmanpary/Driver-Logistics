import React from "react";
import { GrLocation } from "react-icons/gr";
import { TbBuildingWarehouse } from "react-icons/tb";
const WarehouseCard = () => {
  return (
    <div className="flex flex-col bg-grey p-2 gap-4 border rounded-lg border-grey w-[500px] warehousecard:w-[400px] xl:max-w-[300px] text-primaryblue ">
      <div className="flex gap-3">
        <TbBuildingWarehouse className="text-3xl text-primaryblue"  />
        <p className="grid place-items-center">Warehouse 1</p>
      </div>
      <div className="flex gap-2 text-primaryblue">
        <GrLocation className="text-3xl" color="red" />
        <div>
          <p>3330, Cali Beach, CA 92660</p>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
};

export default WarehouseCard;
