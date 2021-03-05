import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  resultMsg: string[] = []
  constructor() { }

  add(newMsg: string): void {
    this.resultMsg.push(newMsg)
  }

  clear(): void {
    this.resultMsg = []
  }
}
