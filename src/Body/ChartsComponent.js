import { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Tabs';
import RankedChartsComponent from "./RankedChartsComponent";
import ReportedCasesComponent from "./ReportedCasesComponent";


function ChartsComponent() {

  const [selectedTab, setSelectedTab] = useState('');

  return (
    <Tabs
      defaultActiveKey="reported-cases"
      id="fill-tab-example"
      className="mb-3"
      fill
      onSelect={(eventKey) => setSelectedTab(eventKey)}
    >
      <Tab eventKey="reported-cases" title="Reported cases">
        <ReportedCasesComponent title={selectedTab} />
      </Tab>
      <Tab eventKey="ranked-charts" title="Ranked charts">
        <RankedChartsComponent />
      </Tab>

    </Tabs>
  );
}

export default ChartsComponent;