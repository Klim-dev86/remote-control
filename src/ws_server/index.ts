import { WebSocketServer } from 'ws';
import { moveMouseY, moveMouseX, drawSquare, drawRect, drawCircle, getMousePos } from '../robot';

export const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(wss) {
  console.log('connextes');

  wss.on('message', function message(data) {
    console.log('received: %s', data);
    console.log(String(data));

    const [command, ...params] = String(data).split(' ');
    console.log(command)
    console.log(params)

    if (command === 'mouse_up') {
      moveMouseY(Number(-params[0]))
    }

    if (command === 'mouse_down') {
      moveMouseY(Number(params[0]))
    }

    if (command === 'mouse_left') {
      moveMouseX(Number(-params[0]))
    }

    if (command === 'mouse_right') {
      moveMouseX(Number(params[0]))
    }

    if (command === 'mouse_right') {
      moveMouseX(Number(params[0]))
    }

    if (command === 'draw_square') {
      drawSquare(Number(params[0]))
    }

    if (command === 'draw_rectangle') {
      drawRect(Number(params[0]), Number(params[1]))
    }

    if (command === 'draw_circle') {
      drawCircle(Number(params[0]))
    }

    if (command === 'mouse_position') {
      getMousePos(wss)
    }

  });
});