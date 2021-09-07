//How to use TestBed
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';



describe('Component: Login : TestBed', () => {

    let component: LoginComponent;
    //take Fixture(extract) from the LoginComponent 
    let fixture: ComponentFixture<LoginComponent>;
    //service 
    let service: AuthService;
    let spy: any;

    beforeEach(() => {
        //Create instance with angular module : mock objects
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            providers: [AuthService]
        })
        fixture = TestBed.createComponent(LoginComponent);
        //extract component instance
        component = fixture.componentInstance;

        //mock service object
        service = TestBed.inject(AuthService)

    });
    it('needsLogin returns true when the user has not been authenticated', () => {
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
});