
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>
            <Counter />
        </div>
    );
}

class Counter extends React.Component {
    /* Constructor version for adding state
    constructor() {
        super()
        this.state = {
            score: 0
        }
    }
    */

    // Direct version (not supported by all browsers but that's okay because babel is transpiling)
    state = {
        score: 0
    }

    // Writing as arrow function means it's automatically bound to the instance rather than having to bind through a different way
    incrementScore = () => {
        this.setState( prevState => ({
            score: this.state.score + 1 
        }))
    }

    decrementScore = () => {
        this.setState( prevState => ({
            score: prevState.score - 1
        }))
    }

    render() {  
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}

class App extends React.Component {
    state = {
        players: [
            {
                name: "Alex",
                id: 1
            },
            {
                name: "Abby",
                id: 2
            },    
            {
                name: "Billy",
                id: 3
            }
        ]
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter( player => player.id !== id )
            }
        })
    }

    render() {
        return (
            <div className="scoreboard">
                <Header 
                    title="Scoreboard" 
                    totalPlayers={this.state.players.length}
                />
            
                {/* Players list */}
                {this.state.players.map( player =>
                    <Player 
                        name={player.name}
                        id={player.id}
                        key={player.id.toString()} 
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

/* JSX Syntax. Requires compiling with Babel to produce React Elements
const jsxTitle = <h1>My First React element!</h1>
const jsxDesc = <p>I just learned how to create a React node and render it into the DOM.</p>

const titleId = 'main-title';
const desc = 'Donec ullamcorper nulla non metus auctor fringilla.';
const name = 'Alex';

const header = (
    <header>
        <h1 id={titleId}>{ name }'s First React Element</h1>
        <p>{ desc }</p>
    </header>
)
*/

/* React Syntax
const reactTitle = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is a title.'},
    'My First React Element!'
);

const reactDesc = React.createElement(
    'p',
    null,
    'I just learned how to create a React node and render it into the DOM.'
);

const reactHeader = React.createElement(
    'header',
    null,
    reactTitle, 
    reactDesc
);
*/