//basic testSuit
describe('My first suit', function () {
    let a;
    it('it should be possitive', () => {
        a = true;
        //assert
       expect(a).toBe(true)
    });
    it('it should not be possitive', () => {
        a = false;
        //assert
       expect(a).not.toBe(true);
    });
});