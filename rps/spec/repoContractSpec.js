const Repo = require('./fakeRepo');
const Round = require('../round');

describe("rounds repository", function () {
    let repo;

    beforeEach(function () {
        repo = new Repo();
    });

    describe("for a new repo", function () {
        it("should return an empty collection", function () {
            expect(repo.getAllRounds()).toEqual([])
        });
    });

    describe("a repo with a round", function () {
        const round = new Round("foo", "bar", "baz");

        beforeEach(function () {
            repo.save(round);
        });

        it("should return the round saved", function () {
            expect(repo.getAllRounds()).toContain(round)
        });

        it("should not have a round not saved", function () {
            expect(repo.getAllRounds()).not.toContain(new Round('a', 'b', 'c'))
        });
    });

    describe("a repo with multiple rounds", function () {
        it("should return the rounds saved", function () {
            const round1 = new Round("foo", "bar", "baz");
            const round2 = new Round("a", "b", "c");
            repo.save(round1);
            repo.save(round2);

            expect(repo.getAllRounds()).toContain(round1);
            expect(repo.getAllRounds()).toContain(round2)
        })
    });
});