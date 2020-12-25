import { ShoutPipe } from './shoutpipe.pipe';

describe('ShoutpipePipe', () => {
    it('create an instance', () => {
        const pipe = new ShoutPipe();
        expect(pipe).toBeTruthy();
        expect(pipe.transform('one')).toEqual('ONE');
    });
});
