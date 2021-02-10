import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  async getCard(){
    return await axios.get('http://localhost:3000/json');
  }
}
