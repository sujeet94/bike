
import { Injectable, EventEmitter } from "@angular/core";
@Injectable()
export class HeaderService {
    title: string = 'Home';
    titleUpdate = new EventEmitter<string>();
    constructor() { }
    setheader(title: string) {
        this.title = title;
        this.titleUpdate.emit(title);

    }
}