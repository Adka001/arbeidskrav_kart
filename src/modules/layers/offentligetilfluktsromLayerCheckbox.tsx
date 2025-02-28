import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { Layer } from "ol/layer";
import React, { useEffect, useRef, useState } from "react";
import { Map, MapBrowserEvent, Overlay } from "ol";
import { FeatureLike } from "ol/Feature";

const source = new VectorSource({
  url: "https://adka001.github.io/arbeidskrav_kart/geojson/offentligetilfluktsrom.geojson",
  format: new GeoJSON(),
});
const shelterLayer = new VectorLayer({ source });
const overlay = new Overlay({
  positioning: "bottom-center",
});

export function ShelterLayerCheckbox({
  setLayers,
  map,
}: {
  setLayers: (value: (prevState: Layer[]) => Layer[]) => void;
  map: Map;
}) {
  const [checked, setChecked] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [selectedShelters, setSelectedShelters] = useState<FeatureLike[]>([]);

  function handleClick(e: MapBrowserEvent<MouseEvent>) {
    setSelectedShelters(map.getFeaturesAtPixel(e.pixel));
    overlay.setPosition(e.coordinate);
  }

  useEffect(() => {
    overlay.setElement(overlayRef.current!);
    map.addOverlay(overlay);
  }, []);

  useEffect(() => {
    if (checked) {
      setLayers((old) => [...old, shelterLayer]);
      map.on("click", handleClick);
    } else {
      setLayers((old) => old.filter((l) => l !== shelterLayer));
    }
  }, [checked]);
  return (
    <button className="button" onClick={() => setChecked((b) => !b)}>
      <input className="checkbox" type={"checkbox"} checked={checked} />
      Show shelters
      <div ref={overlayRef}>
        Clicked shelters:{" "}
        {selectedShelters.map((s) => s.getProperties().navn).join(", ")}
      </div>
    </button>
  );
}