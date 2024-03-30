import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import AboutMe from '../../models/about-me.model';

@Injectable({
  providedIn: 'root'
})
export class CvDataService {

  constructor(
    private http: HttpClient
  ) { }

  getAboutMe(): AboutMe {
    return {
      name: "Jan Marmucki",
      sentences: ["web apps", "great fuckup opportunities"],
      description: "I am. I live. I code."
    }
  }
}
