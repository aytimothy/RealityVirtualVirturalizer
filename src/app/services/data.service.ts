import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const SERVER_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  requestRootDirectory() {
    return this.http.get(SERVER_URL + `/root_list`);
  }

  navigateDirectory(file: any) {
    return this.http.post(SERVER_URL + `/navigate_dir`, file, httpOptions);
  }

  requestReadFile(file: any) {
    return this.http.post(SERVER_URL + `/readfile`, file, httpOptions);
  }

}
