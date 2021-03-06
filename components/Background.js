import React from "react";
import Particles from "react-tsparticles";

export default function Background() {
  return (
    <Particles
      options={{
        "background": {
          "color": {
            "value": "#111"
          },
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
        },
        "fullScreen": {
          "zIndex": -1
        },
        "interactivity": {
          "events": {
            "onClick": {
              "mode": "push"
            },
            "onHover": {
              "mode": "repulse"
            }
          },
          "modes": {
            "bubble": {
              "distance": 400,
              "duration": 2,
              "opacity": 0.8,
              "size": 40
            },
            "grab": {
              "distance": 400
            }
          }
        },
        "particles": {
          "color": {
            "value": "#eee"
          },
          "links": {
            "color": {
              "value": "#cce"
            },
            "distance": 125,
            "enable": true,
            "warp": true
          },
          "move": {
            "attract": {
              "rotate": {
                "x": 600,
                "y": 1200
              }
            },
            "enable": true,
            "outModes": {
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "speed": 1,
            "warp": true
          },
          "number": {
            "density": {
              "enable": true
            },
            "value": 50
          },
          "opacity": {
            "value": 0.5,
            "animation": {
              "speed": 3,
              "minimumValue": 0.1
            }
          },
          "size": {
            "random": {
              "enable": true
            },
            "value": {
              "min": 1,
              "max": 3
            },
            "animation": {
              "speed": 20,
              "minimumValue": 0.1
            }
          }
        }
      }}
    />
  );
}