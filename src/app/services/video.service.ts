import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../model/Video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  url = 'http://localhost:3000/videos';

  constructor(private _http: HttpClient) { }


  getVideos() {
    return this._http.get<Video[]>(this.url)
  }

 


  addVideo(vid: Video) {
    return this._http.post<Video>(this.url, vid);
  }



  updateVideo(vid: Video, id: number) {
    return this._http.put<Video>(this.url + '/' + id, vid);
  }
}
