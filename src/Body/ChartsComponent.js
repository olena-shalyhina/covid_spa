import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import RankedChartsComponent from "./RankedChartsComponent";
import ReportedCasesComponent from "./ReportedCasesComponent";


function ChartsComponent(props) {

  const [selectedTab, setSelectedTab] = useState("");
 
 
  return (
    <Tabs
      defaultActiveKey="reported-cases"
      id="fill-tab-example"
      className="mb-3"
      fill
      onSelect={(eventKey) => setSelectedTab(eventKey)}
    >
      <Tab eventKey="reported-cases" title="Reported cases">
        <ReportedCasesComponent title={selectedTab} {...props} />
      </Tab>
      <Tab eventKey="ranked-charts" title="Ranked charts">
        <RankedChartsComponent title={selectedTab}  {...props}/>
      </Tab>
    </Tabs>
  );
}

export default ChartsComponent;