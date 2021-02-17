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
  async getReport (id) {
    return await axios.get(`https://money-tree-api.test.money-tree.club-billion.com.au/reports/statement/${id}`);
  }
}
