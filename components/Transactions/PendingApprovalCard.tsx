import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
interface Props {
  number: string;
  imageurl: string;
  companyname: string;
  warehousename: string;
  lrnumber: string;
  invoicenumber: string;
}
const PendingApprovalCard: React.FC<Props> = ({
  number,
  imageurl,
  companyname,
  warehousename,
  lrnumber,
  invoicenumber,
}) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="border-2 border-grey flex justify-around items-center p-1 rounded-xl mt-2 gap-6 px-6">
        <div className="text-primaryblue font-bold text-lg">{number}</div>

        <img
          src={imageurl}
          width={85}
          height={85}
          className="min-h-[80px] rounded-lg"
        />

        <div className="text-primaryblue font-bold text-lg">{companyname}</div>
        <div className="text-lg text-primaryblue">{warehousename}</div>
        <div className="text-lg text-primaryblue">LR Number : {lrnumber}</div>
        <div className="text-lg text-primaryblue">
          Invoice No: {invoicenumber}
        </div>
        <button
          className="text-lg text-secondaryred border border-secondaryred px-3 py-1 rounded-lg hover:bg-secondaryred hover:text-white"
          onClick={() => setShowModal(true)}
        >
          Reject
        </button>
        <button className="text-lg text-secondaryblue border border-secondaryblue px-2 py-1 rounded-lg hover:bg-secondaryblue hover:text-white">
          Approve
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-solid border-slate-200 rounded-t gap-8">
                  <h3 className="text-3xl font-bold text-primaryblue">
                    Please choose reason for rejection
                  </h3>

                  <IoMdCloseCircleOutline
                    className="text-primaryblue opacity-50 self-center text-3xl cursor-pointer mt-2"
                    onClick={() => setShowModal(false)}
                  />
                </div>
                {/*body*/}
                <div className="relative px-6 flex-auto">
                  <div className="flex flex-col gap-4">
                    <div className="form-check">
                      <input
                        className="form-check-input appearance-none rounded-full h-5 w-5 border border-primaryblue border-opacity-80 bg-white checked:bg-primaryblue checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label inline-block text-gray-800 text-lg cursor-pointer"
                        htmlFor="flexRadioDefault1"
                      >
                        option1
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input appearance-none rounded-full h-5 w-5 border  border-primaryblue border-opacity-80 bg-white checked:bg-primaryblue checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label inline-block text-gray-800 text-lg cursor-pointer"
                        htmlFor="flexRadioDefault2"
                      >
                        option2
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input appearance-none rounded-full h-5 w-5 border border-primaryblue border-opacity-80 bg-white checked:bg-primaryblue checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label inline-block text-gray-800 text-lg cursor-pointer"
                        htmlFor="flexRadioDefault3"
                      >
                        option3
                      </label>
                    </div>
                    
                      <div className="mb-3 xl:w-full">
                        <input
                          type="text"
                          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-primaryblue border-opacity-50
        rounded-full
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primaryblue focus:outline-none
      "
                          id="exampleFormControlInput1"
                          placeholder="Other Reason"
                        />
                      </div>
                    
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6   rounded-b">
                  <button
                    className="text-secondaryblue background-transparent text-lg px-4 py-1 rounded-lg border-secondaryblue border rounde outline-none focus:outline-none mr-1 mb-1 hover:text-white hover:bg-secondaryblue"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                   Cancel
                  </button>
                  <button
                    className="text-lg text-buttonred border rounded-lg px-4 py-1 mr-1 mb-1 border-buttonred hover:text-white hover:bg-buttonred"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Confirm Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default PendingApprovalCard;
