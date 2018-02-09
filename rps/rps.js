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

module.exports = Requests;