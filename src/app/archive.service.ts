import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ArchiveResult } from './archive-result';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  private baseUrl: string = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=source:("The New York Times")';
  private key = '1d525e59e820461a9cad754e7896032a';
  constructor(private httpClient: HttpClient) { }

  getAll(date?: string): Observable<ArchiveResult[]> {
    console.log(date);
    const archiveResults$ = this.httpClient
    .get<ArchiveResult[]>(`${this.baseUrl}&pub_date=(${date})&api-key=${this.key}`, { headers: this.getHeaders() })
    .pipe(
      map(mapResults),
    );
    console.log(archiveResults$);

    return archiveResults$;
  }

  private getHeaders() {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapResults(response: HttpResponse<ArchiveResult[]>): ArchiveResult[] {
  console.log(response);

  return response.response.docs.map(toArchiveResult);
}

function toArchiveResult(r: any): ArchiveResult {
  const result = <ArchiveResult>{
    id: r._id,
    web_url: r.web_url,
    snippet: r.snippet,
    headline: r.headline.main,
    desk: r.news_desk,
    byline: r.byline ? r.byline.original :  '',
    abstract: r.abstract,
    img_url: extractImg(r),
  };
  // console.log('Parsed result:', result);
  return result;
}

function extractImg(archiveData: any) {
  let extractedImg: any = archiveData.multimedia[0];
  if (extractedImg && extractedImg.type === 'image') {
    extractedImg = 'https://static01.nyt.com/' + extractedImg.url;
  } else {
    extractedImg = '';
  }
  return extractedImg;
}
