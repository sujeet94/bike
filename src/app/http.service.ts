import { Injectable } from "@angular/core";
// import { Http, Response } from '@angular/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http";
@Injectable()
export class HttpReqService {
    constructor(private http: HttpClient) { }

    logData(req: any) {
        console.log("httpService", req);
    }

    postData(req: any, url: string) {
        try {
            return this.http.post(url, req)
                .pipe(
                    tap(resp => console.log('response', resp)),
                    map((res, headers) => {
                        console.log(res);
                        return res;
                    }),
                    catchError(err => this.handleError(err))
                )
        } catch (error) {
            console.log(`catch${error}`);
        }


    }

    private handleError(error) {
        console.log(`handleError ${error.error.error} ${error.status}`)
        return [];
    }
}