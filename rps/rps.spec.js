class Requests {
    play(p1, p2, ui) {
        if (p1 === p2) {
            ui.tie();
            return
        }

        if (p1 === 'scissors' && p2 === 'paper' ||
            p1 === 'rock' && p2 === 'scissors' ||
            p1 === 'paper' && p2 === 'rock') {
            ui.p1Wins();
            return
        }
        ui.p2Wins()
    }
}

describe('play', () => {
    const requests = new Requests();
    let uiSpy;

    describe('with valid inputs', () => {
        describe('showing p1 wins', () => {
            beforeEach(() => {
                uiSpy = {
                    p1Wins: jest.fn()
                };
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
                    p2Wins: jest.fn()
                };
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
                    tie: jest.fn()
                };
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