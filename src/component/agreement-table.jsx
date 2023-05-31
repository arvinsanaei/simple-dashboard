import React, { Component } from "react";
import * as Icon from "react-bootstrap-icons";
import getAgreementTable from "../pages/fake-data";
class AgreementTable extends Component {
  state = {
    agreementDatas: getAgreementTable(),
    searchValue: "",
    filteredList: [],
  };
  onTableSearchChange = (search) => {
    this.setState({ searchValue: search.target.value });
    // apply filtering
    if (search.target.value === "") {
      this.setState({ agreementDatas: getAgreementTable() });
      return;
    }
    var agreementDataC = [...this.state.agreementDatas];
    agreementDataC = agreementDataC.filter((m) =>
      m.agNo.toLowerCase().startsWith(search.target.value.toLowerCase())
    );
    this.setState({ agreementDatas: agreementDataC });
  };

  render() {
    return (
      <React.Fragment>
        <div className="table-details">
          <div className="col-8 inline-flex">
            <div className="cat-lan selected-category">All</div>
            <div className="cat-lan">Current</div>
            <div className="cat-lan">Expired</div>
          </div>
          <div className="col-2 inline-flex detail-icons text-align-end">
            <div className="detail-icon">
              <Icon.Printer></Icon.Printer>
            </div>
            <div className="detail-icon ">
              <Icon.Clipboard2></Icon.Clipboard2>
            </div>
            <div className="detail-icon">
              <Icon.Funnel></Icon.Funnel>
            </div>
          </div>
          <div className="search-lan col-2 text-align-end">
            <form className="search-box search-box-table-details inline-flex text-align-end">
              <input
                type="search"
                placeholder="Search"
                id="tableSearch"
                value={this.state.searchValue}
                onChange={this.onTableSearchChange}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="table-container">
          <table className="table tableFontSize">
            <thead>
              <tr>
                <th key="ColumnAg">AG. NO</th>
                <th key="ColumnDesc">Description</th>
                <th key="ColumnSD">Start Date</th>
                <th key="ColumnED">End Date</th>
                <th key="ColumnTV">Total Value</th>
                <th key="ColumnUsage">Usage (%)</th>
                <th key="ColumnStatus">Status</th>
                <th key="ColumnDetail">Detail</th>
              </tr>
            </thead>
            <tbody>
              {this.state.agreementDatas.map((item) => (
                <tr key={item.agNo} className="tr-lan">
                  <td key="ColumnAg">{item.agNo}</td>
                  <td key="ColumnDesc">{item.Description}</td>
                  <td key="ColumnSD">{item.StartDate}</td>
                  <td key="ColumnED">{item.EndDate}</td>
                  <td key="ColumnTV">{item.TotalValue}</td>
                  <td key="ColumnUsage">{item.Usage}</td>
                  <td key="ColumnStatus">
                    <div
                      className={
                        item.Status == "Open" ? "statusDiv" : "statusDivExpired"
                      }
                    >
                      {item.Status}
                    </div>
                  </td>
                  <td key="ColumnDetail">
                    <div className="centerItem">
                      <Icon.Eye></Icon.Eye>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default AgreementTable;
