import { useEffect, useState } from "react"
import AllCountry from "./assets/components/AllCountry";
import "./Countries.css"

export default function Countries() {
    let [country, setCountry] = useState([]);
    let [visitedCountries, setVisitedCountries] = useState([]);
    let handleVisitedCountries = (countryName) => {
        let newVisitedCountries = [...visitedCountries, countryName];
        setVisitedCountries(newVisitedCountries);
    }
    useEffect(() => {
        let url = "https://restcountries.com/v3.1/all";
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data));
    }, [])
    return (
        <div>
            <h2>Total Countries: {country.length}</h2>
            <div>
                <h3>Visited Countries:</h3>
                {
                    visitedCountries.map(visitedCountries => <li>{visitedCountries}</li>)
                }
            </div>
            <div className="country-container">
                {
                    country.map((country, idx) => <AllCountry key={idx} country={country} handleVisitedCountries={handleVisitedCountries}></AllCountry>)
                }
            </div>
        </div>
    )
}