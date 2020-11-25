import io from 'socket.io-client';
import { config } from '../config/config';


let socket = io(config.socketUrl, {
    autoConnect: true,
    reconnectionDelay: 1000,
    reconnection: true,
    forceNew: true
});


export const socketIO = socket;




