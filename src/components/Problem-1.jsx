import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ProblemOneTable from "./ProblemOneTable";

const Problem1 = () => {
  const { register, handleSubmit, reset } = useForm();
  const [show, setShow] = useState("all");
  const [data, SetData] = useState(null);
  const [filterData, setFilterData] = useState(null);

  const handleClick = (val) => {
    setShow(val);
    if(val == "active"){
       const activeData = data.filter(item => item.status == "active");
       setFilterData(activeData);
    }else if( val == "completed"){
        const activeData = data.filter(item => item.status == "completed");
        setFilterData(activeData);
    };


  };

  // from submit function is here
  const fromsubmit = (formdata) => {
    if (data) {
      const newdata = [formdata, ...data];
      const sorting = newdata.sort((a,b)=>{
        var nameA = a.status.toLowerCase();
        var nameB = b.status.toLowerCase(); 
        if(nameA === nameB) return 0; 
        return nameA > nameB ? 1 : -1;
      })
      console.log(sorting);
      SetData(newdata);
    }else{
        SetData([formdata]);
    };
    reset();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit(fromsubmit)}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                {...register("name")}
                name="name"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                {...register("status")}
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
                {show == "all" ? data && data.map((singleData, index)=> <ProblemOneTable data={singleData} key={index}/>) : filterData && filterData.map((singleData, index)=> <ProblemOneTable data={singleData} key={index}/>) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
