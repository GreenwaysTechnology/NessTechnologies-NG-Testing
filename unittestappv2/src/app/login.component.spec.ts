import { AuthService } from "./auth.service";
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LoginComponent } from "./login.component";

describe('Component: Login : TestBed', () => {

    let component: LoginComponent;
    //take Fixture(extract) from the LoginComponent 
    let fixture: ComponentFixture<LoginComponent>;
    //service 
    let service: AuthService;

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
    it('login button change via jasmine.done', (done: DoneFn) => {
        fixture.detectChanges();
        expect(element.nativeElement.textContent.trim()).toBe('Login');
        //capture the promise
        let spyPromise = spyOn(service, 'isAuthenticated').and.returnValue(Promise.resolve(true));
        component.ngOnInit();
        spyPromise.calls.mostRecent().returnValue.then(() => {
            fixture.detectChanges();
            expect(element.nativeElement.textContent.trim()).toBe('Logout')
            done();
        })
    });

    // it('Button label via async() and whenStable()', async () => {
    //     // fixture.detectChanges();
    //     expect(element.nativeElement.textContent.trim()).toBe('Login');
    //     spyOn(service, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    //     // fixture.detectChanges();
    //     fixture.whenStable().then(() => {
    //         fixture.detectChanges();
    //         console.log('promise',element.nativeElement.textContent.trim())
    //        expect(element.nativeElement.textContent.trim()).toBe('Logout');
    //     });
    //     component.ngOnInit();
    // });
    it('Button label via fakeAsync() and tick()', fakeAsync(() => {
        expect(element.nativeElement.textContent.trim()).toBe('');
        fixture.detectChanges();
        expect(element.nativeElement.textContent.trim()).toBe('Login');
        spyOn(service, 'isAuthenticated').and.returnValue(Promise.resolve(true));
        component.ngOnInit();
        //simulate the passage time untill all pending asyn tasks complete
        tick();
        fixture.detectChanges();
        expect(element.nativeElement.textContent.trim()).toBe('Logout');
    }));

    it('looks async but is synchronous', <any>fakeAsync((): void => {
        let flag = false;
        setTimeout(() => {
          flag = true;
        }, 100);
        expect(flag).toBe(false);
        tick(50);
        expect(flag).toBe(false);
        tick(50);
        expect(flag).toBe(true);
      }));

});