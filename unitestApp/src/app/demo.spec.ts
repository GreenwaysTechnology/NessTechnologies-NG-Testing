import { Component, Injectable } from "@angular/core";
import { autoSpy } from 'auto-spy';

export interface Author {
    name: string;
}

@Injectable({
    providedIn:'root'
})
export class AuthorService {
    name: string;

    getAuthor(id: string): Author {
        return { name: "GP" };
    }

    updateAuthor(author: Author): "success" | "error" {
        return "success";
    }
}
@Component({selector: 'app-author',template:'<h1>Hello</h1>'})
export class AuthorComponent {
    author: Author;

    constructor(private s: AuthorService) { }

    ngOnInit() {
        this.author = this.s.getAuthor('1');
    }
}

describe("AuthorComponent", () => {

    it("should display the author when found by id", () => {
        const service = autoSpy(AuthorService);
        service.getAuthor.and.returnValue({ name: "test" } as Author);
        const c = new AuthorComponent(service);
        c.ngOnInit();
        expect(c.author).toEqual({ name: "test" });
    });

});

// export type SpyOf<T> = T &
//     { [k in keyof T]: T[k] extends Function ? jasmine.Spy : T[k] };

// export function autoSpy<T>(obj: new (...args: any[]) => T): SpyOf<T> {
//     const res: SpyOf<T> = {} as any;

//     const keys = Object.getOwnPropertyNames(obj.prototype);
//     keys.forEach(key => {
//         res[key] = jasmine.createSpy(key);
//     });

//     return res;
// }
