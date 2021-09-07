import { Inject, Injectable } from "@angular/core";
import { AuthGuardService } from "./AuthGuard.service";
import { User } from "./types/user.type";



@Injectable({
    providedIn: 'root'
})
export class UserService {
    userName!: string;

    constructor(private authGurad: AuthGuardService) {

    }
    //api
    getUser(id: string): User {
        return { userName: 'subramaian' };
    }
    updateUser(user: User) {
        return "success";
    }
    public getAuth() {
        return this.authGurad.isAuthenticated();
    }
   

}