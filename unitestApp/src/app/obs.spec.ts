import { ValueService } from './value.service';

describe('ValueService', () => {
    let service: ValueService;
    beforeEach(() => { service = new ValueService(); });
    it('#getObservableValue should return value from observable',
        (done: DoneFn) => {
            service.getObservableValue().subscribe(value => {
                expect(value).toBe('observable value');
                done();
            });
       });

});