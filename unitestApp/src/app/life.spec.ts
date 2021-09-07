function helloWorld1() {
    return 'Hello World';
}

describe('Hello world', () => {

    let expected = "";

    beforeAll(() => {
        console.log('Hello world init')
    });

    beforeEach(() => {
        expected = "Hello World";
    });

    afterEach(() => {
        expected = "";
    });

    it('says hello', () => {
        expect(helloWorld1())
            .toEqual(expected);
    });

    afterAll(() => {
        console.log('Hello world destroy')
    });
});