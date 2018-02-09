const Requests = require('../rps');

describe('play', () => {
    const requests = new Requests();
    let uiSpy;

    describe('with valid inputs', () => {
        describe('showing p1 wins', () => {
            beforeEach(() => {
                uiSpy = {
                    p1Wins: jasmine.createSpy('p1WinsSpy')
                }
            });

            it('should show with rock v scissors', () => {
                requests.play('rock', 'scissors', uiSpy);
                expect(uiSpy.p1Wins).toHaveBeenCalled()
            });

            it('should show with paper v rock', () => {
                requests.play('paper', 'rock', uiSpy);
                expect(uiSpy.p1Wins).toHaveBeenCalled()
            });

            it('should show with scissors v paper', () => {
                requests.play('scissors', 'paper', uiSpy);
                expect(uiSpy.p1Wins).toHaveBeenCalled()
            });
        });

        describe('showing p2 wins', () => {
            beforeEach(() => {
                uiSpy = {
                    p2Wins: jasmine.createSpy('p2WinsSpy')
                }
            });

            it('should show with scissors v rock', function () {
                requests.play('scissors', 'rock', uiSpy);
                expect(uiSpy.p2Wins).toHaveBeenCalled()
            });

            it('should show with paper v scissors', () => {
                requests.play('paper', 'scissors', uiSpy);
                expect(uiSpy.p2Wins).toHaveBeenCalled()
            });

            it('should show with rock v paper', () => {
                requests.play('rock', 'paper', uiSpy);
                expect(uiSpy.p2Wins).toHaveBeenCalled()
            });
        });

        describe('showing tie', () => {
            beforeEach(() => {
                uiSpy = {
                    tie: jasmine.createSpy('tieSpy')
                }
            });

            it('should show with scissors v scissors', function () {
                requests.play('scissors', 'scissors', uiSpy);
                expect(uiSpy.tie).toHaveBeenCalled()
            });
            it('should show with rock v rock', function () {
                requests.play('rock', 'rock', uiSpy);
                expect(uiSpy.tie).toHaveBeenCalled()
            });
            it('should show with paper v paper', function () {
                requests.play('paper', 'paper', uiSpy);
                expect(uiSpy.tie).toHaveBeenCalled()
            });
        })
    })
});