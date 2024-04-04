import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../../models/message.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendMessage(message: Message) {
    this.http.post(`${environment.envVar.NG_APP_API_URL}/send-message`, JSON.stringify(message), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
