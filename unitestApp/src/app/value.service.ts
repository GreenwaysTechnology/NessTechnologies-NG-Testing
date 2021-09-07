import { of } from "rxjs";

export class ValueService {
    getObservableValue() { return of('observable value'); }
}