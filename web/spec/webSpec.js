const ReactDOM = require('react-dom');
const React = require('react');

class RPSApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            useCases: props.userCases
        }
    }

    render() {
        return <button id={'playButton'}>INVALID</button>
    }
}

describe("play form", function () {
    describe("when the play use case tells the UI that the input is invalid", function () {
        afterEach(() => {
            tearDown()
        });

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
