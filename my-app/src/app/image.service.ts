import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private httpClient: HttpClient) {}

  getImage(urlIcon: string): Observable<Blob> {
    return this.httpClient.get(urlIcon, { responseType: 'blob' });
  }
}
