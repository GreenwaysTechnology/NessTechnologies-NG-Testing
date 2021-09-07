//domain class

export class AuthService {
    isAuthenticated(): boolean {
        return !!localStorage.getItem('token'); // !!1234 - true
    }
}