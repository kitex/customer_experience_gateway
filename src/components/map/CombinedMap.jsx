import "./combinedMap.css";
import { useState } from "react";
import CXMap from "../../cxmap/CXMap";
import { Layers, TileLayer, WMSTileLayer } from "../../cxmap/layers";
import {  Fill, Stroke, Style } from 'ol/style';
import { fromLonLat } from 'ol/proj';
import { Controls, FullScreenControl,LayerSwitcherControl } from "../../cxmap/controls";
import { osm } from "../../cxmap/source";

import "./featuredInfo.css"


export default function CombinedMap() {
    let styles = {
        'MultiPolygon': new Style({
            stroke: new Stroke({
                color: 'blue',
                width: 1,
            }),
            fill: new Fill({
                color: 'rgba(0, 0, 255, 0.1)',
            }),
        }),
    };


    const [center, setCenter] = useState([85.30726209, 27.66573899]);
    const [zoom, setZoom] = useState(5);
    const [projection, setProjection] = useState('EPSG:4326');
  

  
    return (
        <div className="featured"  > 

            <div className="featuredItem">
                <CXMap  center={fromLonLat(center)} zoom={zoom} projection={projection}>
                    <Layers>
                        <TileLayer
                            source={osm()}
                            zIndex={0}
                        />                      
                         <WMSTileLayer 
                         workspace_layername={'ncell:4g_coverage'} 
                         tiled={true}                          
                            zIndex={0}
                            url= 'http://localhost:8080/geoserver/ncell/wms'
                        />
                       
                    </Layers>
                    <Controls>
                        <FullScreenControl />
                        <LayerSwitcherControl />
                    </Controls>
                </CXMap>
            </div>

        </div>

        




        
    )
}
