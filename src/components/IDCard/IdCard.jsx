import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import Matter from 'matter-js';
import { getIDCardStyles } from '../../styles/aboutPage/idCard/idCardStyle';

const IDCard  = ({ darkMode, colorPalette }) => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);

  useEffect(() => {
    // Deconstruct necessary modules from Matter
    const { Engine, Render, World, Bodies, Constraint, Mouse, MouseConstraint } = Matter;

    // Create the physics engine
    const engine = Engine.create();
    engineRef.current = engine;

    const canvasWidth = 400;
    const canvasHeight = 600;

    // Create the renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false,
        background: darkMode ? '#1a1a1a' : '#f5f5f5',
      },
    });
    renderRef.current = render;

    // Create the ID card body
    const cardWidth = 120;
    const cardHeight = 180;
    const idCard = Bodies.rectangle(canvasWidth / 2, 200, cardWidth, cardHeight, {
      restitution: 0.6, // Bounciness
      friction: 0.1,
      render: {
        fillStyle: darkMode ? '#333' : '#ffffff',
        strokeStyle: darkMode ? '#888' : '#cccccc',
        lineWidth: 2,
      },
    });

    // Create the strap constraint to hang the card
    const strap = Constraint.create({
      pointA: { x: canvasWidth / 2, y: 20 }, // Anchor point at the top
      bodyB: idCard,
      pointB: { x: 0, y: -cardHeight / 2 }, // Attach to the top-center of the card
      stiffness: 0.08,
      damping: 0.05,
      render: {
        strokeStyle: darkMode ? '#999' : '#555',
        lineWidth: 3,
      },
    });

    // Add mouse control for interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false, // Don't show the mouse constraint line
        },
      },
    });

    // Add all bodies and constraints to the world
    World.add(engine.world, [idCard, strap, mouseConstraint]);

    // Run the engine and the renderer
    Engine.run(engine);
    Render.run(render);

    // Cleanup function to stop the simulation when the component unmounts
    return () => {
      Render.stop(renderRef.current);
      Engine.clear(engineRef.current);
      World.clear(engineRef.current.world);
      if (renderRef.current.canvas) {
        renderRef.current.canvas.remove();
      }
      renderRef.current.textures = {};
    };
  }, [darkMode]); // Rerun effect if darkMode changes to update colors

  const styles = getIDCardStyles(darkMode, colorPalette);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.title}>About Me</Box>
      <div ref={sceneRef} style={styles.scene} />
    </Box>
  );
};

export default IDCard ;
