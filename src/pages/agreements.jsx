import React from "react";
import Table from "../component/table";
import AgreementTable from "../component/agreement-table";
import Pagination from "../component/pagination";
import CodingIn from "../component/coding";
const Dashboard = () => {
  return (
    <div className="dashboard-lan">
      <div className="title-page">Agreements</div>
      <AgreementTable></AgreementTable>
      {/* <CodingIn></CodingIn> */}
      <Pagination></Pagination>
    </div>
  );
};

export default Dashboard;
