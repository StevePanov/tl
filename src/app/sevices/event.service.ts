import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx'

import { BaseApi } from '../sevices/base-api'
import { dataEvent } from '../event.model';

@Injectable()
export class EventService extends BaseApi {
    constructor(public http: Http) {
        super(http);
    }
    addEvent(event: dataEvent): Observable<dataEvent> {
        return this.post('events', event);
    }
}
