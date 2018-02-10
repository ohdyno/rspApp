const Requests = require('../rps');

describe('play', function () {
    const requests = new Requests();
    let uiSpy;

    describe('with valid inputs', function () {
        describe('showing p1 wins', function () {
            beforeEach(function () {
                uiSpy = {
                    p1Wins: jasmine.createSpy('p1WinsSpy')
                }
            });

            it('should show with rock v scissors', function () {
                requests.play('rock', 'scissors', uiSpy);
                expect(uiSpy.p1Wins).toHaveBeenCalled()
            });

            it('should show with paper v rock', function () {
                requests.play('paper', 'rock', uiSpy);
                expect(uiSpy.p1Wins).toHaveBeenCalled()
            });

            it('should show with scissors v paper', function () {
                requests.play('scissors', 'paper', uiSpy);
                expect(uiSpy.p1Wins).toHaveBeenCalled()
            });
        });

        describe('showing p2 wins', function () {
            beforeEach(function () {
                uiSpy = {
                    p2Wins: jasmine.createSpy('p2WinsSpy')
                }
            });

            it('should show with scissors v rock', function () {
                requests.play('scissors', 'rock', uiSpy);
                expect(uiSpy.p2Wins).toHaveBeenCalled()
            });

            it('should show with paper v scissors', function () {
                requests.play('paper', 'scissors', uiSpy);
                expect(uiSpy.p2Wins).toHaveBeenCalled()
            });

            it('should show with rock v paper', function () {
                requests.play('rock', 'paper', uiSpy);
                expect(uiSpy.p2Wins).toHaveBeenCalled()
            });
        });

        describe('showing tie', function () {
            beforeEach(function () {
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
    });

    describe("show invalid result", function () {
        beforeEach(function () {
            uiSpy = {
                invalid: jasmine.createSpy('invalidSpy')
            }
        });

        describe("when player 1 gives invalid input", function () {
            beforeEach(function () {
                requests.play('sailboat', 'scissors', uiSpy);
            });

            it('should notify the ui that the result is invalid', function () {
                expect(uiSpy.invalid).toHaveBeenCalled()
            });
        });

        describe("when player 2 gives invalid input", function () {
            beforeEach(function () {
                requests.play('scissors', 'sailboat', uiSpy);
            });

            it('should notify the ui that the result is invalid', function () {
                expect(uiSpy.invalid).toHaveBeenCalled()
            });
        });
    });
});