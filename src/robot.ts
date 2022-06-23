import robot from 'robotjs';



export const moveMouseY = (step: number) => {
  const mousePos = robot.getMousePos()
  console.log(mousePos)

  robot.moveMouse(mousePos.x, (mousePos.y + step))
}

export const moveMouseX = (step: number) => {
  const mousePos = robot.getMousePos()
  console.log(mousePos)

  robot.moveMouse((mousePos.x + step), mousePos.y)
}

export const drawSquare = async (side: number) => {
  const mousePos = robot.getMousePos()
  console.log(mousePos)
  console.log(mousePos.x + side)

  robot.mouseToggle('down', 'left')
  await robot.moveMouseSmooth((mousePos.x + side), mousePos.y)
  await robot.moveMouseSmooth(mousePos.x + side, (mousePos.y + side))
  await robot.moveMouseSmooth((mousePos.x), (mousePos.y + side))
  await robot.moveMouseSmooth(mousePos.x, (mousePos.y))
  robot.mouseToggle('up', 'left')
}
