//biz api how to test 
function helloWorld() {
    return 'Hello world!';
}
describe('Hello world', () => {
    it('says hello', () => {
        expect(helloWorld()).toEqual('Hello world!');
    });
});