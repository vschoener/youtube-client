import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

// I would and should use a ConfigService to manage properly but for now let's focus on the mission
import { environment } from '../environments/environment';
import { TopVideo } from './model/topVideo';

@Injectable()
export class YoutubeApiService {
  private apiSetting = environment.api;
  private url;

  constructor(private http: HttpClient) {
    this.url = `${this.apiSetting.server}:${this.apiSetting.port}`;
  }

  getTopLiveVideo() {
    return this.http.get<TopVideo[]>(`${this.url}/youtube/live/topVideos`)
      .pipe(
        tap(data => console.log(data))
      );
      // TODO add pipe / tap process and handle errors
  }
}