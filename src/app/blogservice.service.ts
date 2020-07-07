import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {

  constructor(private http: HttpClient) { }

  getService() : Observable <any>
  {
   return this.http.get('https://5f043eb58b06d60016dde312.mockapi.io/blogs/Blogs')
  }
}
