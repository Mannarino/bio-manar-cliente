import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  constructor() { }
  private password: string | null = null;

  setPassword(password: string) {
    this.password = password;
  }

  getPassword(): string | null {
    return this.password;
  }
}
