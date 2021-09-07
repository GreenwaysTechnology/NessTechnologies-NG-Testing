import { LoginComponent } from './login.state.component';

import { AuthService } from "./auth.service";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('Component: Login : TestBed', () => {

    let component: LoginComponent;
    //take Fixture(extract) from the LoginComponent 
    let fixture: ComponentFixture<LoginComponent>;
    //service 
    let service: AuthService;
    let spy: any;
    let element: DebugElement;

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

        //Get the element by using css selector syntax
        element = fixture.debugElement.query(By.css('a'))

    });
    it('login button hidden when the user is authenticated', () => {
        expect(element.nativeElement.textContent.trim()).toBe('');
        //enable change detection,so that dom elements starts triggering
        fixture.detectChanges();
        expect(element.nativeElement.textContent.trim()).toBe('Login');
        spyOn(service, 'isAuthenticated').and.returnValue(true);
        expect(element.nativeElement.textContent.trim()).toBe('Login');

    });
    it('login button hidden when the user is authenticated', () => {
        expect(element.nativeElement.textContent.trim()).toBe('');
        fixture.detectChanges();
        expect(element.nativeElement.textContent.trim()).toBe('Login');
        spyOn(service, 'isAuthenticated').and.returnValue(true);
        expect(element.nativeElement.textContent.trim()).toBe('Login');
        fixture.detectChanges();
        expect(element.nativeElement.textContent.trim()).toBe('Logout');
    });
});