const Round = require('./round');

class RPS {
    constructor(repo) {
        this.repo = repo;
    }

    play(p1, p2, ui) {
        let result;
        if (this.invalid(p1, p2)) {
            ui.invalid();
            result = 'invalid'
        } else if (this.tie(p1, p2)) {
            ui.tie();
            result = 'tie'
        } else if (this.p1Wins(p1, p2)) {
            ui.p1Wins();
            result = 'p1Wins'
        } else {
            ui.p2Wins();
            result = 'p2Wins'
        }
        this.repo.save(new Round(p1, p2, result))
    }

    p1Wins(p1, p2) {
        return p1 === 'scissors' && p2 === 'paper' ||
            p1 === 'rock' && p2 === 'scissors' ||
            p1 === 'paper' && p2 === 'rock';
    }

    tie(p1, p2) {
        return p1 === p2;
    }

    invalid(p1, p2) {
        return this.throwIsInvalid(p1) || this.throwIsInvalid(p2);
    }

    throwIsInvalid(play) {
        return play !== 'scissors' && play !== 'paper' && play !== 'rock';
    }

    getHistory(ui) {
        let rounds = this.repo.getAllRounds();
        if (rounds.length === 0) {
            ui.noRounds()
        } else {
            ui.roundsPlayed(rounds)
        }
    }
}

module.exports = RPS;