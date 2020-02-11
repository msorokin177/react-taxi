import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import FormSelectRoute from "./Auxillary_components/FormSelectRoute";
import AbsentCardData from "./Auxillary_components/AbsentCardData";
mapboxgl.accessToken =
    "pk.eyJ1IjoiYXJ0bXJzdmNoIiwiYSI6ImNrNW53YWhiYzBhdGszbW1wdzlndnQ5bHQifQ.4_4_ZfVWfJB2ehd3VRilDA";

function Map({ adressList, isCardAdd }) {
    adressList = ["Шаверма на невском", "Москва", "Кладбище в парке", "Аэропорт"];
    let mapContainer;
    const option = {
        lng: 34.1753,
        lat: 44.4967,
        zoom: 16.45
    };
    const renderForms = () => {
        return isCardAdd ? <FormSelectRoute adressList={adressList} /> : <AbsentCardData />;
    };
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer,
            style: "mapbox://styles/mapbox/dark-v9",
            center: [option.lng, option.lat],
            zoom: option.zoom
        });
    }, [mapContainer, option]);

    return (
        <div className="map-wrapper">
            <div className="map-route">{renderForms()}</div>
            <div className="map" ref={el => (mapContainer = el)}></div>
        </div>
    );
}

export default Map;
