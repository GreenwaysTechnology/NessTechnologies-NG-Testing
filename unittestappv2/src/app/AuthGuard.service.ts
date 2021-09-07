import { Inject, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthGuardService {

    public isAuthenticated() {
        return localStorage.getItem('token');
    }
}