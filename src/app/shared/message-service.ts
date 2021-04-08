import { Injectable } from "@angular/core";
declare var toastr:any;
@Injectable() 
export class MessageService {
    success(message: String) {
        toastr.success(message, 'Success');
    }

    error(message: String) {
        toastr.error(message, 'Error');
    }

    warning(message: String) {
        toastr.warning(message, 'Warning');
    }
}