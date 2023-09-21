import React, { useState } from "react";
import ModalA from "./ModalA";
import ModalB from "./ModalB";

const Problem2 = () => {
  let [isOpenModalA, setIsOpenModalA] = useState(false);
  let [isOpenModalB, setIsOpenModalB] = useState(false);

//   open modal B
const OpenModalB = () =>{
    setIsOpenModalB(true)
}
const OpenModalA =()=>{
    setIsOpenModalA(true);
}

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              onClick={() => setIsOpenModalA(true)}
              className="btn btn-lg btn-outline-primary"
              type="button"
            >
              All Contacts
            </button>
            <button
              onClick={() => setIsOpenModalB(true)}
              className="btn btn-lg btn-outline-warning"
              type="button"
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>
      {/* Modal A is here */}
      <ModalA isOpenModalA={isOpenModalA} setIsOpenModalA={setIsOpenModalA} OpenModalB={OpenModalB}/>

      {/* Modal A is here */}
      <ModalB isOpenModalB={isOpenModalB} setIsOpenModalB={setIsOpenModalB} OpenModalA={OpenModalA}/>
    </>
  );
};

export default Problem2;
