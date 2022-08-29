import CovidTodayComponent from "./CovidTodayComponent";
import RankedChartsComponent from "./RankedChartsComponent";
import ReportedCasesComponent from "./ReportedCasesComponent";
//Route Библиотека которая позволяет нам показывать те компоненты которые были запрошены через url
import { Route, Routes } from "react-router-dom";
//Routes - wrapper наших маршрутов к запрашиваемым компонентам
//Route - маршрут в котором мы передаем компонент
//path - совпадает с нашим гкд  и рендерит подходящий компонент
//через :  мы передаем параметры url
//в компоненте мы их достанем через useParms hook react-router
//для правильной работы мы прописываем все наши линки проекта через react-router {Link}

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