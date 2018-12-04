import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EsriLoaderReact from 'esri-loader-react'
import Toolbar from '@/components/Toolbar'
import Loader from 'esri-module-loader'
import styles from './ArcMap.css'

import SelectionManager from '@/lib/graphic/selection-manager'

import { initAddGraphicsDemo } from '@/demos/add-graphics'


const tools = [
  { key: 'select', label: '选择', icon : 'select' },
  { key: 'box-select', label: '框选', icon : 'border' },
  { key: 'draw', label: '绘制', icon : 'highlight' },
  { key: 'measure', label: '测量', icon : 'gitlab' },
]

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
        <Toolbar tools={tools} />
      </EsriLoaderReact>
    )
  }
}

ArcMap.propTypes = {

}

export default ArcMap