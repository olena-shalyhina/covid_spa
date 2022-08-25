import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ChartsComponent from "./ChartsComponent";

import { readCovidData } from '../dataService/fileService';
import { getTodayCovidData } from "../dataService/apiService";
import RouteComponent from "./RouteComponenet";
import { useDispatch } from "react-redux";
import { setCountryId } from '../ReduxState';

function BodyComponent() {

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [covidData, setCovidData] = useState({});
    const [countryList, setCountryList] = useState([]);
    const [countryData, setCountryData] = useState(null);
    const [covidTodayData, setCovidTodayData] = useState(null);
    const dispatch = useDispatch();


    function handleCountrySelect(countryKey) {
        setCountryData(covidData[countryKey]);
    }

    async function getData() {
        try {
            const data = await readCovidData();
            console.log(data);
            return data;
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getData().then((data) => {
            setCovidData(data);
            const list = [];
            for (const key in data) {
                list.push({ key, name: data[key].location });
                if (data[key].location === 'Estonia') {
                    dispatch(setCountryId(key));
                }
            }

            setCountryList(list);
        });
        getTodayCovidData().then(data => setCovidTodayData(data));
    }, [null]);

    return (
        <Container className="mt-4">
            <RouteComponent
                covidTodayData={covidTodayData}
                countryList={countryList}
                countryData={countryData}
                covidData={covidData}
                countryCount={Object.keys(covidData).length} />
        </Container>
    )
}

export default BodyComponent;

