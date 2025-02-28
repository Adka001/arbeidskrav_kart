import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { Layer } from "ol/layer";
import React, { useEffect, useRef, useState } from "react";
import { Map, MapBrowserEvent, Overlay } from "ol";
import { FeatureLike } from "ol/Feature";

const source = new VectorSource({
  url: "https://adka001.github.io/arbeidskrav_kart/geojson/sivilforsvarsdistrikter.geojson",
  format: new GeoJSON(),
});
const defenceLayer = new VectorLayer({ source });
const overlay = new Overlay({
  positioning: "bottom-center",
});

export function DefenceLayerCheckbox({
  setLayers,
  map,
}: {
  setLayers: (value: (prevState: Layer[]) => Layer[]) => void;
  map: Map;
}) {
  const [checked, setChecked] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [selectedDefence, setSelectedDefence] = useState<FeatureLike[]>([]);

  function handleClick(e: MapBrowserEvent<MouseEvent>) {
    setSelectedDefence(map.getFeaturesAtPixel(e.pixel));
    overlay.setPosition(e.coordinate);
  }

  useEffect(() => {
    overlay.setElement(overlayRef.current!);
    map.addOverlay(overlay);
  }, []);

  useEffect(() => {
    if (checked) {
      setLayers((old) => [...old, defenceLayer]);
      map.on("click", handleClick);
    } else {
      setLayers((old) => old.filter((l) => l !== defenceLayer));
    }
  }, [checked]);
  return (
    <button className="button" onClick={() => setChecked((b) => !b)}>
      <input className="checkbox" type={"checkbox"} checked={checked} />
      Defence districts
      <div ref={overlayRef}>
        Clicked defence:{" "}
        {selectedDefence.map((s) => s.getProperties().navn).join(", ")}
      </div>
    </button>
  );
}