var APP_DATA = {
  "scenes": [
    {
      "id": "0-pzem",
      "name": "Přízemí",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0328999620803927,
        "pitch": 0.011027876692079275,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.608345094056105,
          "pitch": 0.027965340235686753,
          "rotation": 0,
          "target": "1-pzem-vlevo"
        },
        {
          "yaw": 3.076403988194852,
          "pitch": -0.19798637975269173,
          "rotation": 7.0685834705770345,
          "target": "3-1-patro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pzem-vlevo",
      "name": "Přízemí, vlevo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1121458378285674,
          "pitch": -0.02096019179503017,
          "rotation": 0,
          "target": "0-pzem"
        },
        {
          "yaw": -1.2569747925301034,
          "pitch": 0.024794316980553788,
          "rotation": 7.853981633974483,
          "target": "2-pzem-jdelna"
        },
        {
          "yaw": -2.8999921423052477,
          "pitch": -0.03787709494963565,
          "rotation": 7.0685834705770345,
          "target": "3-1-patro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pzem-jdelna",
      "name": "Přízemí, jídelna",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2471037906130595,
          "pitch": 0.03161326963918576,
          "rotation": 6.283185307179586,
          "target": "1-pzem-vlevo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1-patro",
      "name": "1. patro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7795290810323934,
          "pitch": 0.5765623704989444,
          "rotation": 3.9269908169872414,
          "target": "0-pzem"
        },
        {
          "yaw": 3.023366859722592,
          "pitch": -0.2558682594151982,
          "rotation": 0.7853981633974483,
          "target": "5-2-patro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-1-patro-prima",
      "name": "1. patro, prima",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "5-2-patro",
      "name": "2. patro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1176042063671776,
          "pitch": 0.4162311342179734,
          "rotation": 3.9269908169872414,
          "target": "3-1-patro"
        },
        {
          "yaw": 1.4675587208724838,
          "pitch": -0.020508121087031483,
          "rotation": 0,
          "target": "6-2-patro-vpravo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2-patro-vpravo",
      "name": "2. patro, vpravo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.7014083602198582,
        "pitch": 0.08403630659344685,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 3.0385302632013644,
          "pitch": -0.02531162832191569,
          "rotation": 0,
          "target": "5-2-patro"
        },
        {
          "yaw": 2.889964152519152,
          "pitch": -0.02049585608090254,
          "rotation": 10.210176124166829,
          "target": "3-1-patro"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "skola2.0",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
