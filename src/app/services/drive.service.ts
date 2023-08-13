import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DriveService {

  private readonly BASE_URL: string = 'http://localhost:8000/';

  constructor(
    private http: HttpClient
  ) { }

  public processCode(code: string, folder_name: string) {
    return this.http.get(`${this.BASE_URL}process-code?folder_name=${folder_name}&code=${code}`);
  }
}
