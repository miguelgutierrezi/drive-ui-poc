import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private readonly BASE_URL: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  public getCodesFromFile(file: string) {
    const body = {
      file: file
    };

    return this.http.post(`${this.BASE_URL}file/process`, body);
  }
}
