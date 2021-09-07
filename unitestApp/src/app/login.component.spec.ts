import { LoginComponent } from './login.component';
import { AuthService } from "./auth.service";


//Here we create instances manually.

describe('Component: Login', () => {
    let component: LoginComponent | null;
    let service: AuthService | null;

    beforeEach(() => {
        service = new AuthService();
        component = new LoginComponent(service);
    });
    it('needsLogin returns true when the user has not been authenticated', () => {
        expect(component?.needsLogin()).toBeTruthy();
    });
    it('needsLogin returns false when the user has been authenticated', () => {
        localStorage.setItem('token', '12345'); 
        expect(component?.needsLogin()).toBeFalsy();
      });
    afterEach(() => {
        localStorage.removeItem('token');
        service = null;
        component = null;
    });
});
