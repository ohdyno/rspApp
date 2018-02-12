const RPS = require('../rps');
const FakeRepo = require('./fakeRepo');
const Round = require('../round');

describe('history of rounds played', function () {
    let rps;

    beforeEach(function () {
        rps = new RPS(new FakeRepo());
    });

    describe("when no rounds have been played", function () {
        it("tells the UI that no rounds have been played", function () {
            let uiSpy = {
                noRounds: jasmine.createSpy('noRoundsUiSpy')
            };

            rps.getHistory(uiSpy);

            expect(uiSpy.noRounds).toHaveBeenCalled()
        });
    });
    describe("when rounds have been played", function () {
        it("tells the UI all of the rounds that have been played", function () {
            let uiSpy = {
                roundsPlayed: jasmine.createSpy("roundsPlayedUiSpy")
            };
            const p1Throw = "sailboat";
            const p2Throw = "speedboat";

            rps.play(p1Throw, p2Throw, {
                invalid: function () {
                }
            });

            rps.getHistory(uiSpy);

            expect(uiSpy.roundsPlayed).toHaveBeenCalledWith(
                [new Round(p1Throw, p2Throw, "invalid")]
            )
        });
    });
});