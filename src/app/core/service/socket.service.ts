import { ApplicationRef, inject, Injectable } from '@angular/core';
import { first } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000', { autoConnect: false });
    const appRef = inject(ApplicationRef);
    appRef.isStable.pipe(
      first((isStable) => isStable))
    .subscribe(() => { this.socket.connect() });
  }
}
