import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  async getReport (id:number,accessToken:string,baseUrl:string) {
    return await axios.get(`${baseUrl}/reports/statement/${id}`, {
      headers: {
        AccessToken : accessToken
      }
    });
  }
}
