import { useEffect, useState } from "react"
import AllCountry from "./assets/components/AllCountry";
import "./Countries.css"

export default function Countries() {
    let [country, setCountry] = useState([]);
    useEffect(() => {
        let url = "https://restcountries.com/v3.1/all";
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data));
    }, [])
    return (
        <div>
            <h2>Total Countries: {country.length}</h2>
            <div className="country-container">
            {
                country.map((country,idx) => <AllCountry key={idx} country={country}></AllCountry>)
            }
            </div>
        </div>
    )
}