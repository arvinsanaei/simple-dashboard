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
      <Pagination></Pagination>
      {/* <CodingIn></CodingIn> */}
      <div>Adding some features to apps</div>
    </div>
  );
};

export default Dashboard;
