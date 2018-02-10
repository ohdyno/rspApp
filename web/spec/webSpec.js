const React = require('react');
const ReactDOM = require('react-dom');
const ReactTestUtils = require("react-dom/test-utils");
const RPSApp = require('../rpsApp');

describe("play form", function () {
    afterEach(() => {
        tearDown()
    });

    describe("when the play use case tells the UI that the input is invalid", function () {

        it('tells the user that their input is invalid', function () {
            renderApp({
                play: function (p1, p2, ui) {
                    ui.invalid()
                }
            });

            play();

            expect(pageContent()).toContain("INVALID")
        });
    });

    describe('when the play use case tells the UI that p1 wins', function () {
        it('tells the user that p1 wins', function () {
            renderApp({
                play: function (p1, p2, ui) {
                    ui.p1Wins()
                }
            });

            play();

            expect(pageContent()).toContain("P1 Wins")
        })
    });

    describe('when the play use case tells the UI that p2 wins', function () {
        it('tells the user that p2 wins', function () {
            renderApp({
                play: function (p1, p2, ui) {
                    ui.p2Wins()
                }
            });

            play();

            expect(pageContent()).toContain("P2 Wins")
        })
    });

    describe('when the play use case tells the UI that p1 and p2 tie', function () {
        it('tells the user that the p1 and p2 tie', function () {
            renderApp({
                play: function (p1, p2, ui) {
                    ui.tie()
                }
            });

            play();

            expect(pageContent()).toContain("Tie")
        })
    });

    describe("when the user clicks the submit button with p1 and p2 inputs", function () {
        const p1Throw = 'foo';
        const p2Throw = 'bar';
        let playSpy;

        beforeEach(function () {
            playSpy = jasmine.createSpy('playSpy');
            renderApp({
                play: playSpy
            });
            fillForm(p1Throw, p2Throw);

            play()

        });

        it("sends the inputs to the use case", function () {
            expect(playSpy).toHaveBeenCalledWith(p1Throw, p2Throw, jasmine.anything())
        });

    });
});

let domFixture;

function fillForm(p1Throw, p2Throw) {
    let input = document.querySelector('#p1Throw');
    input.value = p1Throw;
    ReactTestUtils.Simulate.change(input);

    input = document.querySelector('#p2Throw');
    input.value = p2Throw;
    ReactTestUtils.Simulate.change(input);
}

function renderApp(useCases) {
    domFixture = document.createElement('div');
    domFixture.id = 'reactApp';

    document.querySelector('body').appendChild(domFixture);

    ReactDOM.render(
        <RPSApp useCases={useCases}/>,
        domFixture
    );
}

function play() {
    document.querySelector('#playButton').click();
}

function pageContent() {
    return domFixture.innerText;
}

function tearDown() {
    domFixture.remove()
}
