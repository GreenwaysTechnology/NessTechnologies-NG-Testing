import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';

//fake class
// class MockAuthService {
//     authenticated = false;

//     isAuthenticated() {
//         return this.authenticated;
//     }
// }

class MockAuthService extends AuthService {
    authenticated = false;

    //override method
    isAuthenticated() {
        return this.authenticated;
    }
}


//Here we create instances manually.

describe('Component: Login :Mock classes', () => {
    let component: LoginComponent | null;
    //let service: MockAuthService;
    let service: AuthService;
    let spy: any;

    beforeEach(() => {
        service = new AuthService();
        component = new LoginComponent(service);
    });
    it('needsLogin returns true when the user has not been authenticated', () => {
        //spy on authservice
        /**
         * isAuthenticated(): boolean {
                 return !!localStorage.getItem('token'); // !!1234 - true
           }
         */
        //invoke function and pass return value to is 
        spy = spyOn(service, 'isAuthenticated').and.returnValue(false)
        expect(component.needsLogin()).toBeTruthy();
        //whether method has been called
        expect(service.isAuthenticated).toHaveBeenCalled();

    });
    it('needsLogin returns false when the user has been authenticated', () => {
        spy = spyOn(service, 'isAuthenticated').and.returnValue(true)
        expect(component.needsLogin()).toBeFalsy();
        //whether method has been called
        expect(service.isAuthenticated).toHaveBeenCalled();

    });
    afterEach(() => {
        service = null;
        component = null;
    });
});
