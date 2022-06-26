import robot from 'robotjs';

export const moveMouseY = (step: number) => {
  const mousePos = robot.getMousePos()
  robot.moveMouse(mousePos.x, (mousePos.y + step))
}

export const moveMouseX = (step: number) => {
  const mousePos = robot.getMousePos()
  robot.moveMouse((mousePos.x + step), mousePos.y)
}

export const drawSquare = async (side: number) => {
  const mousePos = robot.getMousePos()
  robot.mouseToggle('down', 'left')
  await robot.moveMouseSmooth((mousePos.x + side), mousePos.y)
  await robot.moveMouseSmooth(mousePos.x + side, (mousePos.y + side))
  await robot.moveMouseSmooth((mousePos.x), (mousePos.y + side))
  await robot.moveMouseSmooth(mousePos.x, (mousePos.y))
  robot.mouseToggle('up', 'left')
}

export const drawRect = async (sideA: number, sideB: number) => {
  const mousePos = robot.getMousePos()
  robot.mouseToggle('down', 'left');
  await robot.moveMouseSmooth((mousePos.x + sideA), mousePos.y);
  await robot.moveMouseSmooth(mousePos.x + sideA, (mousePos.y + sideB));
  await robot.moveMouseSmooth((mousePos.x), (mousePos.y + sideB));
  await robot.moveMouseSmooth(mousePos.x, (mousePos.y));
  robot.mouseToggle('up', 'left');
}

export const drawCircle = (radius: number) => {
  const mousePos = robot.getMousePos();
  robot.mouseToggle('down', 'left');

  for (let i = 0; i <= Math.PI * 2; i += 0.05) {
    const x = mousePos.x + (radius * Math.cos(i));
    const y = mousePos.y + (radius * Math.sin(i));
    robot.dragMouse(x, y);
  }
  robot.mouseToggle('up', 'left');
};

export const getMousePos = (cb: any) => {
  const mousePos = robot.getMousePos();
  console.log(mousePos)
  cb.send(`mouse_position ${mousePos.x},${mousePos.y}`)
};
