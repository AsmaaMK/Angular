import { Injectable } from "@angular/core";

@Injectable() 
export class MessageService {
    success(message: String) {
        alert(message);
    }

    error(message: String) {
        alert(message);
    }

    warning(message: String) {
        alert(message);
    }
}