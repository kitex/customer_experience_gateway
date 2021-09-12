import { useContext, useEffect } from "react";
import MapContext from "../CXMapContext";
import OLTileLayer from "ol/layer/Tile";
import TileWMS from 'ol/source/TileWMS';
const WMSTileLayer = ({  zIndex,url,workspace_layername,tiled }) => {
  const { map } = useContext(MapContext); 
  useEffect(() => {
    if (!map) return;
    
    let tileLayer = new OLTileLayer({
      source: new TileWMS({
        url,
        params: {'LAYERS': workspace_layername, 'TILED': tiled},
        serverType: 'geoserver',
        // Countries have transparency, so do not fade tiles:
        transition: 0
      }),
      zIndex,
    });
    map.addLayer(tileLayer);
    tileLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map,zIndex,url,workspace_layername,tiled ]);
  return null;
};
export default WMSTileLayer; 