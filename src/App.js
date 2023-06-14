import './App.css';
import Allroutes from './router/AllRoutes'
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-particles";


function App() {
  const options = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#36C5F0"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: { min: 1, max: 6}
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 10
        }
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <div style={{backgroundColor:"black"}}>
       <Particles options={options} init={particlesInit} />
    <Allroutes/>
    </div>
  );
}

export default App;
