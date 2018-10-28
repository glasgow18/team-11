import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = ['HI','How are you?', 'I am tired'];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
