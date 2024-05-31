import React, { useEffect } from 'react';
import p5 from 'p5';
import toxi from 'toxiclibsjs';

function Man() {
    
  const canvasRef = React.useRef(null);

  useEffect(() => {

    const sketch = (p) => {

    let { Vec2D, Rect } = toxi.geom;
    let { VerletPhysics2D, VerletParticle2D, VerletSpring2D, VerletMinDistanceSpring2D } = toxi.physics2d;
    let { GravityBehavior } = toxi.physics2d.behaviors;

    let physics;
    let skeleton;
    let img;

    p.preload = function() {
    img = p.loadImage("/me.png");
    }

    class Particle extends VerletParticle2D {
        constructor(x, y, r) {
        super(x, y);
        this.r = r;
        physics.addParticle(this);
        }

        show() {
        p.fill(0);
        p.circle(this.x, this.y, this.r * 2);
        }
    }

    class Skeleton {
        constructor(x, y) {
        this.x = x;
        this.y = y + p.height / 2;
        this.particles = [];
        this.springs = [];
        this.hsprings = [];

        this.head = new Particle(new Vec2D(x, y), 16);
        let neck = new Particle(new Vec2D(x, y + 20), 4);
        let lShoulder = new Particle(new Vec2D(x + 20, y + 80), 4);
        let rShoulder = new Particle(new Vec2D(x - 20, y + 80), 4);
        let lElbow = new Particle(new Vec2D(x + 100, y + 80), 8);
        let rElbow = new Particle(new Vec2D(x - 100, y + 80), 8);
        let lHand = new Particle(new Vec2D(x + 200, y + 80), 16);
        let rHand = new Particle(new Vec2D(x - 200, y + 80), 16);
        let belly = new Particle(new Vec2D(x, y + 120), 4);
        let lKnee = new Particle(new Vec2D(x - 50, y + 230), 4);
        let rKnee = new Particle(new Vec2D(x + 50, y + 230), 4);
        let lFoot = new Particle(new Vec2D(x + 50, y + 280), 16);
        let rFoot = new Particle(new Vec2D(x + 50, y + 280), 16);

        this.springs.push(new Spring(this.head, neck, 5, 0.05));
        this.springs.push(new Spring(neck, lShoulder, 20, 0.05));
        this.springs.push(new Spring(neck, rShoulder, 20, 0.05));
        this.springs.push(new Spring(rShoulder, rElbow, 40, 0.05));
        this.springs.push(new Spring(lShoulder, lElbow, 40, 0.05));
        this.hsprings.push(new SpringMin(rShoulder, lShoulder, 100, 0.05));

        this.springs.push(new Spring(rHand, rElbow, 10, 0.05));
        this.springs.push(new Spring(lHand, lElbow, 10, 0.05));
        this.springs.push(new Spring(neck, belly, 50, 0.05));
        this.hsprings.push(new SpringMin(rShoulder, belly, 50, 0.05));
        this.hsprings.push(new SpringMin(lShoulder, belly, 50, 0.05));
        this.hsprings.push(new SpringMin(lShoulder, this.head, 50, 0.05));
        this.hsprings.push(new SpringMin(rShoulder, this.head, 50, 0.05));
        this.springs.push(new Spring(belly, lKnee, 80, 0.05));
        this.springs.push(new Spring(belly, rKnee, 80, 0.05));
        this.hsprings.push(new SpringMin(lKnee, rKnee, 50, 0.05));
        this.springs.push(new Spring(lFoot, lKnee, 80, 0.05));
        this.springs.push(new Spring(rFoot, rKnee, 80, 0.05));
        this.head.lock();

        }

        handleMouse() {
            if (p.mouseIsPressed) {
                this.head.lock();
                this.head.x = p.mouseX;
                this.head.y = p.mouseY;
                this.head.unlock();
            }
        }

        dance() {
        this.head.x = p.width / 2 + p.sin(p.frameCount * 0.25) * 16;
        this.head.y = p.height / 2 + p.cos(p.frameCount * 0.25) * 16;
        }

        show() {
        p.imageMode(p.CENTER);
        for (let s of this.springs) {
            s.show();
        }
        p.image(img, this.head.x, this.head.y - 25, 50, 70);
        }
    }


    class Spring extends VerletSpring2D {
        constructor(a, b, len, strength) {
            super(a, b, len, strength);
            physics.addSpring(this);
        }
        
        show() {
            p.stroke(0, 0, 0);
            p.strokeWeight(8);
        
            p.line(this.a.x, this.a.y, this.b.x, this.b.y);
        }
        }
        
        class SpringMin extends VerletMinDistanceSpring2D {
        constructor(a, b, len, strength) {
            super(a, b, len, strength);
            physics.addSpring(this);
        }
        
        show() {
            p.stroke(0);
            p.strokeWeight(0.5);
            p.line(this.a.x, this.a.y, this.b.x, this.b.y);
        }
        }
        
        p.setup = function() {
            let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.parent(canvasRef.current);
            p.clear();

            // Make the world
            physics = new VerletPhysics2D();
        
            // Adding gravity to the world
            let gravity = new GravityBehavior(new Vec2D(0, 0.1));
            physics.addBehavior(gravity);
        
            // Add a bounds
            let boundary = new Rect(0, 0, p.width, p.height);
            physics.setWorldBounds(boundary);
        
            skeleton = new Skeleton(p.width / 2, 100);
        }

        p.draw = function() {
            p.background(241, 241, 241);

            physics.update();
            skeleton.show();
            skeleton.dance();

            skeleton.handleMouse();
        
        }
        
        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
            skeleton = new Skeleton(p.width / 2, p.height / 2);
        }
        }
        
        // Create a new p5 instance and attach it to your canvasRef
        let myp5 = new p5(sketch, canvasRef.current);

        // Return a cleanup function to remove the sketch when the component unmounts
        return () => myp5.remove();

    }, []);

    return (
        <div ref={canvasRef} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '500px',
            overflow: 'hidden'
            }}>
        </div>
    );
}

export default Man;