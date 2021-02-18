import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  baseUrl='https://money-tree-api.test.money-tree.club-billion.com.au';
  async getReport (id:number,accessToken:string) {
    return await axios.get(`${this.baseUrl}/reports/statement/${id}`, {
      headers: {
        AccessToken : accessToken
      }
    });
  }
}
