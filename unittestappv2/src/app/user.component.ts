import { Component } from "@angular/core";
import { MessageService } from "./message.service";
import { User } from "./types/user.type";
import { UserService } from "./user.service";


@Component({
    selector: 'app-user',
    template: `
     <h1>User</h1>
    `
})
export class UserComponent {
    user!: User;
    message!:string;
    constructor(private service: UserService,private messageService:MessageService) {

    }
    ngOnInit() {
        this.user = this.service.getUser('1');
        this.message = this.messageService.sayHello();
    }
    private secret() {
        return 'pass';
    }
}