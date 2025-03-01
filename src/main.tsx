import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import "bootstrap/dist/css/bootstrap.min.css";
import "ol/ol.css";
import "./application.css";
import { Layer } from "ol/layer";
import { SchoolLayerCheckbox } from "./modules/layers/schoolLayerCheckbox";
import { DefenceLayerCheckbox } from "./modules/layers/sivilforsvarsdistrikterLayerCheckbox";
import { ShelterLayerCheckbox } from "./modules/layers/offentligetilfluktsromLayerCheckbox";

useGeographic();

const view = new View({ center: [10.8, 59.9], zoom: 10 });
const map = new Map({ view });

function Application() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [layers, setLayers] = useState<Layer[]>([
    new TileLayer({ source: new OSM() }),
  ]);
  useEffect(() => map.setTarget(mapRef.current!), []);
  useEffect(() => map.setLayers(layers), [layers]);

  function handleClick() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        view.animate({
          center: [longitude, latitude],
          zoom: 15,
          duration: 500,
        });
      },
    );
  }

  useEffect(() => {
    map.setTarget(mapRef.current!);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { longitude, latitude } = pos.coords;
        map.getView().animate({
          center: [longitude, latitude],
          zoom: 11,
        });
      },
      (error) => {
        alert(error.message);
      },
    );
  }, []);

  return (
    <>
      <nav>
        <button onClick={handleClick} className="btn btn-primary">
          My Location
        </button>
        <SchoolLayerCheckbox setLayers={setLayers} map={map} />
        <DefenceLayerCheckbox setLayers={setLayers} map={map} />
        <ShelterLayerCheckbox setLayers={setLayers} map={map} />
      </nav>
      <main>
        <div ref={mapRef}></div>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<Application />);
