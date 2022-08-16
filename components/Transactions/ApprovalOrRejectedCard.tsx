import React from "react";
import Image from "next/image";
const ApprovalOrRejectedCard = () => {
  return (
  

    
    <div className="border-2 border-grey flex justify-around items-center p-1 rounded-xl mt-2 gap-10 px-6">
      <div className="text-primaryblue font-bold text-lg">1</div>
      
      <img
        src="/example.jpg"
        width={85}
        height={85}
        className="min-h-[80px] rounded-lg"
        
      />
     
      <div className="text-primaryblue font-bold text-lg">
      ABC Comp Pvt Ltd.
      </div>
      <div className="text-lg text-primaryblue">
     Warehouse Name
      </div>
      <div className="text-lg text-primaryblue">
      LR Number : 14215
      </div>
      <div className="text-lg text-primaryblue">
      Invoice No: 12345
      </div>
      <button className="text-lg text-secondaryblue">
      Approve
      </button>
    </div>
  
  );
};

export default ApprovalOrRejectedCard
