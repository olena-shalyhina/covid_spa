import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CovidTodayComponent from './CovidTodayComponent';
import RankedChartsComponent from './RankedChartsComponent';
import ReportedCasesComponent from './ReportedCasesComponent';

function ChartsComponent(props) {
  const [selectedTab, setSelectedTab] = useState('');

  return (
    <Tabs
      defaultActiveKey="today-info"
      id="fill-tab-example"
      className="mb-5"
      fill
      onSelect={(eventKey) => setSelectedTab(eventKey)}
    >
      <Tab eventKey="today-info" title="Covid Today">
        <CovidTodayComponent covidTodayData={props.covidTodayData} />
      </Tab>
      <Tab eventKey="reposrted-cases" title="Reported cases">
        <ReportedCasesComponent title={selectedTab} {...props} />
      </Tab>
      <Tab eventKey="ranked-charts" title="Ranked charts">
        <RankedChartsComponent title={selectedTab} {...props} />
      </Tab>
    </Tabs>
  );
}

export default ChartsComponent;
