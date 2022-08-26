import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { readCovidData } from "../dataService/fileService";
import RouteComponent from "./RouteComponenet";
import { useDispatch } from "react-redux";
import { setCountryId } from "../ReduxState";

function BodyComponent(props) {
    const [covidData, setCovidData] = useState({});
    const [countryList, setCountryList] = useState([]);
    const [countryData] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        readCovidData().then((data) => {
            setCovidData(data);
            const list = [];
            for (const key in data) {
                list.push({ key, name: data[key].location });
                if (data[key].location === props.InitialCpuntry) {
                    dispatch(setCountryId(key));
                }
            }
            setCountryList(list);
        });
        
    }, []);

    return (
        <Container className="mt-4">
            <RouteComponent
                countryList={countryList}
                countryData={countryData}
                covidData={covidData}
                countryCount={Object.keys(covidData).length} />
        </Container>
    )
}

BodyComponent.defoultProps = {
    initialCountry: 'Estonia',
}

export default BodyComponent;

