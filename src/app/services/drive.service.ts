import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DriveService {

  private readonly BASE_URL: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  public processCode(code: string, folder_name: string) {
    return this.http.get(`${this.BASE_URL}drive/process-code?folder_name=${folder_name}&code=${code}`);
  }
}
