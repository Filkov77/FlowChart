import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { ChartResponse } from './models/chart-response.i';

@Injectable({
    providedIn: 'root'
})
export class ChartService {

    // TODO replace with BE call
    response: ChartResponse = {
        elements: [
            {
                id: '1',
                title: 'Title1',
                level: 1,
                outgoing: ['2', '3']
            },
            {
                id: '2',
                title: 'Title2',
                level: 2
            },
            {
                id: '3',
                title: 'Title3',
                level: 2
            }
        ]
    };

    constructor(private http: HttpClient) { }

    public get() {
        return of(this.response);
    }
}
