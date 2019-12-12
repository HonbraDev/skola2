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
        "yaw": 0.017769307259603906,
        "pitch": 0.004822419056885963,
        "fov": 1.5118283743286656
      },
      "linkHotspots": [
        {
          "yaw": -1.6020948640600992,
          "pitch": 0.001535661520485121,
          "rotation": 0,
          "target": "1-pzem-vlevo"
        },
        {
          "yaw": 3.04498107286674,
          "pitch": -0.28659698443087045,
          "rotation": 0,
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
          "yaw": -1.2514476594309336,
          "pitch": 0.03322332412968443,
          "rotation": 0,
          "target": "2-pzem-jdelna"
        },
        {
          "yaw": -3.109922857448854,
          "pitch": -0.020476603769154167,
          "rotation": 0,
          "target": "0-pzem"
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
          "yaw": 2.2275314105479946,
          "pitch": 0.018882920646493773,
          "rotation": 0,
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7922315034979484,
          "pitch": 0.5882061705899098,
          "rotation": 0,
          "target": "0-pzem"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
