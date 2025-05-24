import { useEffect, useRef, useState } from 'react'
import pkg from 'matter-js';
const {Engine, Render, Bodies, World} = pkg;

function Comp (props) {
    const scene = useRef()
    const container = useRef()
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const isPressed = useRef(false);
    const engine = useRef(Engine.create());

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            if (!Array.isArray(entries) || !entries.length) {
            return;
            }
            const { width, height } = entries[0].contentRect;
            setDimensions({ width, height });
        });
        resizeObserver.observe(container.current);

        return () => {
            if (container.current) {
            resizeObserver.unobserve(container.current);
            }
        };
        }, []);

    useEffect(() => {
        const cw = dimensions.width
        const ch = dimensions.height

        const render = Render.create({
        element: scene.current,
        engine: engine.current,
        options: {
            width: cw,
            height: ch,
            wireframes: false,
            background: 'transparent'
        }
    })

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
    ])

    Engine.run(engine.current)
    Render.run(render)

    function handleResize() {
        const newCw = window.innerWidth;
        const newCh = window.innerHeight;
        render.canvas.width = newCw;
        render.canvas.height = newCh;
        render.options.width = newCw;
        render.options.height = newCh;
      
        // Call the function to update the boundaries
        updateBoundaries(newCw, newCh);
      }
      
    
      window.addEventListener('resize', handleResize);
    

    return () => {
      Render.stop(render)
      World.clear(engine.current.world)
      Engine.clear(engine.current)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
      window.removeEventListener('resize', handleResize);
    }

  }, [dimensions])

  const handleDown = () => {
    isPressed.current = true
  }

  const handleUp = () => {
    isPressed.current = false
  }

  const handleAddCircle = e => {
    if (isPressed.current) {
      // Use 'touches' for touch events and 'clientX/Y' for mouse events
      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
  
      const ball = Bodies.circle(
        clientX,
        clientY,
        10 + Math.random() * 30,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: '#000000'
          }
        })
      World.add(engine.current.world, [ball])
    }
  }

  const updateBoundaries = (cw, ch) => {
    const boundaries = engine.current.world.bodies.slice(0, 4);
    Matter.Body.setPosition(boundaries[0], { x: cw / 2, y: -10 });
    Matter.Body.setPosition(boundaries[1], { x: -10, y: ch / 2 });
    Matter.Body.setPosition(boundaries[2], { x: cw / 2, y: ch + 10 });
    Matter.Body.setPosition(boundaries[3], { x: cw + 10, y: ch / 2 });
    Matter.Body.scale(boundaries[0], cw / dimensions.width, 1);
    Matter.Body.scale(boundaries[1], 1, ch / dimensions.height);
    Matter.Body.scale(boundaries[2], cw / dimensions.width, 1);
    Matter.Body.scale(boundaries[3], 1, ch / dimensions.height);
  }
  

  return (
    <div ref={container} style={{ width: '100%', height: '100%' }}>
    <div
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseMove={handleAddCircle}
      onTouchStart={handleDown}
      onTouchEnd={handleUp}
      onTouchMove={handleAddCircle}
    >
      <div ref={scene} style={{ width: '100%', height: '100%' }} />
    </div>
  </div>
  )
}

export default Comp