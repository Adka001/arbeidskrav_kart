import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { Layer } from "ol/layer";
import React, { useEffect, useRef, useState } from "react";
import { Map, MapBrowserEvent, Overlay } from "ol";
import { FeatureLike } from "ol/Feature";
import { Fill, Stroke, Style, Text } from "ol/style";

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
  const activeFeatures = useRef<FeatureLike[]>([]);

  const focusedStyle = (feature: FeatureLike) =>
    new Style({
      stroke: new Stroke({
        width: 3,
      }),
      text: new Text({
        text: feature.getProperties().navn,
        font: "16px arial",
        fill: new Fill({ color: "green" }),
        stroke: new Stroke({ color: "white", width: 6 }),
      }),
    });

  function handlePointerMove(event: MapBrowserEvent<MouseEvent>) {
    for (const feature of activeFeatures.current) {
      // @ts-ignore
      feature.setStyle(undefined);
    }

    const focusedFeatures =
      defenceLayer.getSource()?.getFeaturesAtCoordinate(event.coordinate) || [];
    for (const feature of focusedFeatures) {
      feature.setStyle(focusedStyle);
    }
    activeFeatures.current = focusedFeatures;
  }

  useEffect(() => {
    overlay.setElement(overlayRef.current!);
    map.addOverlay(overlay);
  }, []);

  useEffect(() => {
    if (checked) {
      setLayers((old) => [...old, defenceLayer]);
      map.on("pointermove", handlePointerMove);
    } else {
      setLayers((old) => old.filter((l) => l !== defenceLayer));
    }
  }, [checked]);
  return (
    <button
      className="button btn btn-outline-primary"
      onClick={() => setChecked((b) => !b)}
    >
      <input className="checkbox" type={"checkbox"} checked={checked} />
      Defence districts
      <div ref={overlayRef}>
        {selectedDefence.map((s) => s.getProperties().navn).join(", ")}
      </div>
    </button>
  );
}
