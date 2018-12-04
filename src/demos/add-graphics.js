import Loader from 'esri-module-loader'
import { graphics as demoGraphics } from 'mock/graphics'

export const initAddGraphicsDemo = map => {
  Loader.loadModules([
    'SimpleMarkerSymbol', 'Color', 'CartographicLineSymbol', 'Draw', 'Graphic'
  ]).then(({
    SimpleMarkerSymbol, Color, CartographicLineSymbol, Draw, Graphic
  }) => {
    var markerSymbol = new SimpleMarkerSymbol();
    markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z");
    markerSymbol.setColor(new Color("#00FFFF"));

    var lineSymbol = new CartographicLineSymbol(
      CartographicLineSymbol.STYLE_SOLID,
      new Color([255,0,0]), 10, 
      CartographicLineSymbol.CAP_ROUND,
      CartographicLineSymbol.JOIN_MITER, 5
    );

    var tb = new Draw(map);
    tb.on("draw-end", (evt) => {
      //deactivate the toolbar and clear existing graphics 
      tb.deactivate(); 
      map.enableMapNavigation();
    
      // figure out which symbol to use
      var symbol;
      if ( evt.geometry.type === "point" || evt.geometry.type === "multipoint") {
        symbol = markerSymbol;
      } else if ( evt.geometry.type === "line" || evt.geometry.type === "polyline") {
        symbol = lineSymbol;
      }
    
      map.graphics.add(new Graphic(evt.geometry, symbol));
    });

    // tb.activate('polyline');

    demoGraphics.forEach(json => {
      map.graphics.add(new Graphic(json))
    })
  })
}


window.initAddGraphicsDemo = initAddGraphicsDemo