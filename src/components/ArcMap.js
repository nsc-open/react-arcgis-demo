import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EsriLoaderReact from 'esri-loader-react'
import Loader from 'esri-module-loader'
import styles from './ArcMap.css'

import SelectionManager from '@/lib/graphic/selection-manager'

import { initAddGraphicsDemo } from '@/demos/add-graphics'


class ArcMap extends Component {


  readyHandler = ({ loadedModules, containerNode }) => {
    const [ Map ] = loadedModules
    const map = new Map(containerNode, {
      center: [-118, 34.5],
      zoom: 8,
      basemap: "topo"
    })

    map.on('load', () => {
      initAddGraphicsDemo(map)

      window.SM = new SelectionManager({ map })
    })
  }

  errorHandler = (e) => {
    console.log(e)
  }

  render () {
    return (
      <EsriLoaderReact
        options={{ url: '//js.arcgis.com/3.25/' }}
        modulesToLoad={['esri/map']}
        mapContainerClassName={styles.mapContainer}
        onReady={this.readyHandler}
        onError={this.errorHandler}
      >
        
      </EsriLoaderReact>
    )
  }
}

ArcMap.propTypes = {

}

export default ArcMap