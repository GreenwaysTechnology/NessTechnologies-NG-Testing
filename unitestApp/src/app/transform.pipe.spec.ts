import { DefaultPipe } from './transform.pipe';

describe('Pipe: Default', () => {
    let pipe: DefaultPipe;

    beforeEach(() => {
        pipe = new DefaultPipe();
    });

    //use case 1
    it('providing no value returns fallback', () => {
        let fallbackUrl = 'http://place-hold.it/300';
        expect(pipe.transform('', fallbackUrl)).toBe(fallbackUrl);
    });
    //use case 2
    it('providing a value returns value', () => {
        let url = 'http://place-hold.it/300';
        expect(pipe.transform(url, 'fallback',)).toBe(url);
    });
    //use case 3
    it('asking for https returns https',()=>{
        let url = 'http://place-hold.it/300';
        expect(pipe.transform(url, 'fallback',true)).toBe('https://place-hold.it/300');

    });
    

});