import { Component } from '@angular/core';
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-login',
    template: `<a [hidden]="needsLogin()">Login</a>`
})
export class LoginComponent {

    constructor(private auth: AuthService) {
    }

    needsLogin() {
        //! true => false : if there is there is token, we dont need login
        return !this.auth.isAuthenticated();
    }
}