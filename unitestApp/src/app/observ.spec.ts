
import { fakeAsync, tick } from '@angular/core/testing';
import { delay } from 'rxjs/operators';
import { cold, hot } from 'jasmine-marbles';

import { of,  throwError, from } from 'rxjs';
import {  map, flatMap } from 'rxjs/operators';

function getData() {
    return of([1, 2, 3, 4]).pipe(delay(500));
}

describe('Reactive test', () => {
    it('should return correct data', (done: DoneFn) => {
        getData().subscribe(data => {
            expect(data).toEqual([1, 2, 3, 4])
            done();
        }
        )
    })
});

describe('this test', () => {
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
  it('should demonstrate example of marble diagram', () => {
    const source = cold('-x-y-|');
    const expected = cold('-x-|');

    expect(source).toBeObservable(expected);
  });