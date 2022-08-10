import React from "react";

const PendingApprovalCard = () => {
  return (
    <div className="border-2 border-grey flex justify-around items-center p-1 rounded-xl w-[1170px]">
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
      <div className="text-lg text-primaryblue">Warehouse Name</div>
      <div className="text-lg text-primaryblue">LR Number : 14215</div>
      <div className="text-lg text-primaryblue">Invoice No: 12345</div>
      <button className="text-lg text-secondaryred border border-secondaryred px-3 py-1 rounded-lg ">
        Reject
      </button>
      <button className="text-lg text-secondaryblue border border-secondaryblue px-2 py-1 rounded-lg ">
        Approve
      </button>
    </div>
  );
};

export default PendingApprovalCard;
