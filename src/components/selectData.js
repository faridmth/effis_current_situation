import { type } from "@testing-library/user-event/dist/type";

export const data=[
    {
        type : "ECMWF",
        group:"IFM",
        title:"indice forêt météo (IFM)",
        props : [{
            url: "https://ies-ows.jrc.ec.europa.eu/gwis",
            layers: "ecmwf.fwi",
            format: "image/png",
            transparent: true,
            version: "1.1.1",
            singletile: false,
            opacity:0.7,
            width: 2048,
            height: 2048,
            srs: "EPSG:3857",
            bbox: "-20037508.342789244,0,0,20037508.34278071"
          }
        ]
    },
    {
        type : "ECMWF",
        group:"IFM",
        title:"Indice de Propagation Initial (IPI)",
        props:[
          {
            url: "https://ies-ows.jrc.ec.europa.eu/gwis",
            layers: "ecmwf.isi",
            format: "image/png",
            transparent: true,
            version: "1.1.1",
            singletile: false,
            width: 2048,
            height: 2048,
            srs: "EPSG:3857",
            bbox: "0,0,20037508.342789244,20037508.34278071",
            opacity: 0.7
          }
        ]
    },
    {
      type : "ECMWF",
      group:"IFM",
      title:"FWI - Indice de construction (BUI)",
      props:[
        {
          url: "https://ies-ows.jrc.ec.europa.eu/gwis",
          layers: "ecmwf.bui",
          format: "image/png",
          transparent: true,
          version: "1.1.1",
          singletile: false,
          width: 2048,
          height: 2048,
          srs: "EPSG:3857",
          bbox: "0,0,20037508.342789244,20037508.34278071",
          opacity: 0.7 // Set opacity to desired value, e.g., 0.7
        }
      ]
  },
  {
    type : "ECMWF",
    group:"IFM",
    title:"FWI - Code d'humidité fine des combustibles (FFMC)",
    props:[
      {
        url: "https://ies-ows.jrc.ec.europa.eu/gwis",
        layers: "ecmwf.ffmc", // Updated layer
        format: "image/png",
        transparent: true,
        version: "1.1.1",
        singletile: false,
        width: 2048,
        height: 2048,
        srs: "EPSG:3857",
        bbox: "-20037508.342789244,0,0,20037508.34278071",
        opacity: 0.7 // Set opacity to desired value, e.g., 0.7
      }
    ]
},
{
  type : "ECMWF",
  group:"IFM",
  title:"FWI - Code d'humidité Duff (DMC)",
  props:[
    {
      url: "https://ies-ows.jrc.ec.europa.eu/gwis",
      layers: "ecmwf.dmc", // Updated layer
      format: "image/png",
      transparent: true,
      version: "1.1.1",
      singletile: false,
      width: 2048,
      height: 2048,
      srs: "EPSG:3857",
      bbox: "0,0,10018754.171394622,10018754.171394628", // Updated bbox
      opacity: 0.7 // Set opacity to desired value, e.g., 0.7
    }
  ]
},
{
  type : "ECMWF",
  group:"IFM",
  title:"FWI - Code sécheresse (DC)",
  props:[
    {
      url: "https://ies-ows.jrc.ec.europa.eu/gwis",
      layers: "ecmwf.dc", // Updated layer
      format: "image/png",
      transparent: true,
      version: "1.1.1",
      singletile: false,
      width: 2048,
      height: 2048,
      srs: "EPSG:3857",
      bbox: "-10018754.171394622,0,0,10018754.171394628", // Updated bbox
      opacity: 0.7 // Set opacity to desired value, e.g., 0.7
    }
  ]
},
{
  type : "ECMWF",
  group:"IFM",
  title:"FWI - Anomalie",
  props:[
    {
      url: "https://ies-ows.jrc.ec.europa.eu/gwis",
      layers: "ecmwf.anomaly", // Updated layer
      format: "image/png",
      transparent: true,
      version: "1.1.1",
      singletile: false,
      width: 2048,
      height: 2048,
      srs: "EPSG:3857",
      bbox: "-10018754.171394622,0,0,10018754.171394", // Updated bbox
      opacity: 0.7 // Set opacity to desired value, e.g., 0.7
    }
  ]
},
{
  type : "ECMWF",
  group:"IFM",
  title:"FWI - Classement",
  props:[
    {
      url: "https://ies-ows.jrc.ec.europa.eu/gwis",
      layers: "ecmwf.ranking", // Updated layer
      format: "image/png",
      transparent: true,
      version: "1.1.1",
      singletile: false,
      width: 2048,
      height: 2048,
      srs: "EPSG:3857",
      bbox: "-10018754.171394622,0,0,10018754.1713946", // Updated bbox
      opacity: 0.7 // Set opacity to desired value, e.g., 0.7
    }
  ]
},
{
  type:"KBDI",
  title:"Keetch Byram Drought Index (KBDI)",
  group:"KBDI",
  props:[{
      url: "https://ies-ows.jrc.ec.europa.eu/gwis",
      layers: "ecmwf.mark5.kbdi",
      format: "image/png",
      transparent: true,
      version: "1.1.1",
      singletile: false,
      width: 2048,
      height: 2048,
      srs: "EPSG:3857",
      bbox: "0,0,20037508.342789244,20037508.3427",
      opacity: 0.7
    }]
},
{
  type:"MARK-5",
  title:"MARK-5 - Facteur de sécheresse (MARK-5 DF)",
  group:"MARK-5",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/gwis",
    layers: "ecmwf.mark5.df", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "-10018754.171394622,0,0,10018754.171394", // Updated bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
{
  type:"MARK-5",
  title:"MARK-5 - Taux de marge (MARK-5 ROS)",
  group:"MARK-5",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/gwis",
    layers: "ecmwf.mark5.ros", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "-20037508.342789244,0,0,20037508.34278", // Unchanged bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
{
  type:"MARK-5",
  title:"MARK-5 - Indice de danger d'incendie (MARK-5 FDI)",
  group:"MARK-5",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/gwis",
    layers: "ecmwf.mark5.fdi", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "-20037508.342789244,0,0,20037508.34278", // Unchanged bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
{
  type:"NFDRS",
  title:"Taux d'écart (NFDRS ROS)",
  group:"NFDRS",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/gwis",
    layers: "ecmwf.nfdrs.ros", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "0,0,20037508.342789244,20037508.342780", // Updated bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
{
  type:"NFDRS",
  title:"NFDRS - Composante de diffusion (NFDRS SC)",
  group:"NFDRS",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/gwis",
    layers: "ecmwf.nfdrs.sc", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "-20037508.342789244,0,0,20037508.3427807", // Unchanged bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
{
  type:"NFDRS",
  title:"NFDRS - Composante de libération d'énergie (NFDRS ERC)",
  group:"NFDRS",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/gwis",
    layers: "ecmwf.nfdrs.erc", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "-20037508.342789244,0,0,20037508.34278071", // Unchanged bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
{
  type:"NFDRS",
  title:"NFDRS - Indice de brûlure (NFDRS BI)",
  group:"NFDRS",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/gwis",
    layers: "ecmwf.nfdrs.bi", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "-20037508.342789244,0,0,20037508.34278071", // Unchanged bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
{
  type:"NFDRS",
  title:"NFDRS - Probabilité d'allumage (NFDRS IC)",
  group:"NFDRS",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/gwis",
    layers: "ecmwf.nfdrs.ic", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "-20037508.342789244,0,0,20037508.34278071", // Unchanged bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
// Fr Forcast : 
{
  type:"frForcast",
  title:"FWI - Indice météo des incendies (FWI)",
  group:"frForcast",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/effis",
    layers: "mf010.fwi", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "-20037508.342789244,0,0,20037508.34278071", // Updated bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
{
  type:"frForcast",
  title:"FWI - Indice d'écart initial (ISI)",
  group:"frForcast",
  props:[ {
    url: "https://ies-ows.jrc.ec.europa.eu/effis",
    layers: "mf010.isi", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    time: "2024-06-11", // Updated date
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "-5009377.085697311,5009377.085697314,0,10018754.171394628", // Updated bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
{
  type:"frForcast",
  title:"FWI - Indice de construction (BUI)",
  group:"frForcast",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/effis",
    layers: "mf010.bui", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "-20037508.342789244,0,0,20037508.34278071", // Updated bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
{
  type:"frForcast",
  title:"FWI - Code d'humidité fine des combustibles (FFMC)",
  group:"frForcast",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/effis",
    layers: "mf010.ffmc", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "-20037508.342789244,0,0,20037508.34278071", // Updated bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
{
  type:"frForcast",
  title:"FWI - Duff Moisture Code (DMC)",
  group:"frForcast",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/effis",
    layers: "mf010.dmc", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "-20037508.342789244,0,0,20037508.34278071", // Updated bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
{
  type:"frForcast",
  title:"FWI - Code sécheresse (DC)",
  group:"frForcast",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/effis",
    layers: "mf010.dc", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "-20037508.342789244,0,0,20037508.34278071", // Updated bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
{
  type:"frForcast",
  title:"FWI - Anomalie",
  group:"frForcast",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/effis",
    layers: "mf010.anomaly", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "-20037508.342789244,0,0,20037508.34278071", // Updated bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
{
  type:"frForcast",
  title:"FWI - Classement",
  group:"frForcast",
  props:[{
    url: "https://ies-ows.jrc.ec.europa.eu/effis",
    layers: "mf010.ranking", // Updated layer
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    singletile: false,
    width: 2048,
    height: 2048,
    srs: "EPSG:3857",
    bbox: "0,0,20037508.342789244,20037508.34278071", // Updated bbox
    opacity: 0.7 // Set opacity to desired value, e.g., 0.7
  }]
},
]

