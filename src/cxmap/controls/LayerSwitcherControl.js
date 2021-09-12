import  { useContext, useEffect } from "react";
import MapContext from "../CXMapContext";

import 'ol/ol.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import LayerSwitcher from 'ol-layerswitcher';

const LayerSwitcherControl = () => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;

		let layerSwitcher = new LayerSwitcher({
            reverse: true,
            groupSelectStyle: 'group'
          });

		map.controls.push(layerSwitcher);

		return () => map.controls.remove(layerSwitcher);
	}, [map]);

	return null;
};

export default LayerSwitcherControl;