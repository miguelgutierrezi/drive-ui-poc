import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private readonly BASE_URL: string = 'http://localhost:8000/';

  constructor(
    private http: HttpClient
  ) { }

  public get_codes_from_file(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.BASE_URL}file/process`, formData);
  }
}
