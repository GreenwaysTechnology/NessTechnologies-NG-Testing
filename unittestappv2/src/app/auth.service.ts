import { Injectable } from "@angular/core";

//loginserviece

@Injectable({ providedIn: 'root' })
export class AuthService {
    isAuthenticated(): Promise<boolean> {
        return Promise.resolve(!!localStorage.getItem('token'));
    }
}