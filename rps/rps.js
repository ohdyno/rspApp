class Requests {
    play(p1, p2, ui) {
        if (this.invalid(p1, p2)) {
            ui.invalid();
            return
        }
        if (this.tie(p1, p2)) {
            ui.tie();
            return
        }
        if (this.p1Wins(p1, p2)) {
            ui.p1Wins();
            return
        }
        ui.p2Wins()
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
}

module.exports = Requests;