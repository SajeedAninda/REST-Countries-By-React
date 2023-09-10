import { useState } from 'react';
import './AllCountry.css';
export default function AllCountry({ country }) {
    let [visited, setVisited] = useState(false);
    let handleVisited = () => {
        let ifvisited = !visited;
        setVisited(ifvisited);
    }
    let { name, capital, region, flags, area } = country;
    return (
        <div className="country-section">
            <div>
                <h2>Country Name: {name?.common}</h2>
                <h3>Capital City: {capital && capital.length > 0 ? capital[0] : 'N/A'}</h3>
                <h3>Area: {area} sq.km</h3>
                <h3>Region: {region}</h3>
                <img src={flags.png}></img>
            </div>
            <button onClick={handleVisited}>{visited ? "Visited" : "I want to visit"}</button>
            <h3></h3>
        </div>
    )
}