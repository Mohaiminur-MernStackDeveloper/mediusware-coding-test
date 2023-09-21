import React from "react";

const ProblemOneTable = ({ data }) => {
  return (
    <>
      <tr>
        <td scope="col">{data?.name}</td>
        <td scope="col">{data?.status}</td>
      </tr>
    </>
  );
};

export default ProblemOneTable;
