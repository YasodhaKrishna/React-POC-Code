import { TmsUtil } from "./TmsUtil";

describe('TMSUtil', () => {
    it('should print TMS Logo', () => {
        expect(TmsUtil.Print()).toBeTruthy();
    });
});
