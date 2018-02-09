const ReactDOM = require('react-dom');
const React = require('react');

class RPSApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            useCases: props.useCases,
            result: 'INVALID'
        };
    }

    clickPlay() {
        this.state.useCases.play(null, null, this);
    }

    p1Wins() {
        this.setState(() => ({
            result: 'P1 Wins'
        }));
    }

    p2Wins() {
        this.setState(() => ({
            result: 'P2 Wins'
        }));
    }

    invalid() {

    }

    tie() {
        this.setState(() => ({
            result: 'Tie'
        }));
    }

    render() {
        return <button id={'playButton'} onClick={() => this.clickPlay()}>{this.state.result}</button>
    }
}

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
    })

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
    })
});

let domFixture;

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
