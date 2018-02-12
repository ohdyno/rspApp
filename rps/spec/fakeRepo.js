class FakeRepo {
    constructor() {
        this.rounds = [];
    }

    getAllRounds() {
        return this.rounds
    }

    save(round) {
        this.rounds.push(round)
    }
}

module.exports = FakeRepo;