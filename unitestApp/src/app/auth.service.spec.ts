import { AuthService } from './auth.service';

describe('Service: Auth', () => {
    let service: AuthService | null;

    //create new AuthService instance for each each
    beforeEach(() => {
        service = new AuthService();
    });
    //release the object when ever test case finished
    afterEach(() => {
        service = null;
        localStorage.removeItem('token');
    });
    //possitive 
    it('should return true from isAuthenticated when there is a token', () => {
        localStorage.setItem('token','1234');
        expect(service?.isAuthenticated()).toBeTruthy()
    });
    //negative
    it('should return false from isAuthenticated when there is no token', () => {
        expect(service?.isAuthenticated()).toBeFalsy();
    });

});