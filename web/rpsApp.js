const React = require('react');

class RPSApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            useCases: props.useCases,
            result: 'INVALID',
            p1Throw: '',
            p2Throw: ''
        };
    }

    clickPlay(event) {
        this.state.useCases.play(this.state.p1Throw, this.state.p2Throw, this);
        event.preventDefault();
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

    updateP1Throw(event) {
        this.setState({p1Throw: event.target.value});
    }

    updateP2Throw(event) {
        this.setState({p2Throw: event.target.value});
    }

    render() {
        return (
            <div>
                <label>{this.state.result}</label>
                <form onSubmit={this.clickPlay.bind(this)}>
                    <input id={'p1Throw'} value={this.state.p1Throw} onChange={this.updateP1Throw.bind(this)}/>
                    <input id={'p2Throw'} value={this.state.p2Throw} onChange={this.updateP2Throw.bind(this)}/>
                    <input id={'playButton'} type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

module.exports = RPSApp;