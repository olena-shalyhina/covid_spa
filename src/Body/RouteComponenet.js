import { Route, Routes } from "react-router-dom";
import CovidTodayComponent from "./CovidTodayComponent";
import RankedChartsComponent from "./RankedChartsComponent";
import ReportedCasesComponent from "./ReportedCasesComponent";

function RouteComponent(props) {
  return (
    <Routes>
      <Route path="/" element={<CovidTodayComponent />} />
      <Route path="/reported-cases" element={<ReportedCasesComponent {...props} />} />
      <Route path="/reported-cases/:country" element={<ReportedCasesComponent {...props} />} />
      <Route path="/ranked-charts/:cases/:count" element={<RankedChartsComponent {...props} />} />
    </Routes>
  );
}
export default RouteComponent;