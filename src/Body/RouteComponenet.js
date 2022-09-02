import { Route, Routes } from "react-router-dom";
import CovidTodayComponent from "./CovidTodayComponent";
import RankedChartsComponent from "./RankedChartsComponent";
import ReportedCasesComponent from "./ReportedCasesComponent";

function RouteComponent(props) {
  const url = process.env.REACT_APP_HOME_URL;
  // const url  = '/covid_spa';
  return (
    <Routes>
      {/* <Route path={"/"} element={<CovidTodayComponent />} />
      <Route path={"/reported-cases"} element={<ReportedCasesComponent {...props} />} />
      <Route path={"/reported-cases/:country"} element={<ReportedCasesComponent {...props} />} />
      <Route path={"/ranked-charts/:cases/:count"} element={<RankedChartsComponent {...props} />} /> */}
      <Route path={`${url}/`} element={<CovidTodayComponent />} />
      <Route path={`${url}/reported-cases`} element={<ReportedCasesComponent {...props} />} />
      <Route path={`${url}/reported-cases/:country`} element={<ReportedCasesComponent {...props} />} />
      <Route path={`${url}/ranked-charts/:cases/:count`} element={<RankedChartsComponent {...props} />} />
    </Routes>
  );
}
export default RouteComponent;