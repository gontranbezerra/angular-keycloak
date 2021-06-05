import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  private config: any;

  constructor(private httpClient: HttpClient) {}

  getConfig(): Observable<any> {
    console.log('SettingService.getConfig.getConfigFile():', this.getConfigFile());
    return this.httpClient
      .get(this.getConfigFile(), {
        observe: 'response',
      })
      .pipe(
        catchError((error) => {
          console.log(error);
          return of(null);
        }),
        mergeMap((response) => {
          if (response && response.body) {
            this.config = response.body;
            return of(this.config);
          } else {
            return of(null);
          }
        })
      );
  }

  getConfigFile(): string {
    return environment.configFile;
  }
}
