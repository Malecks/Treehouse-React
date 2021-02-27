

const players = [
    {
        name: "Alex",
        score: 0,
        id: 1
    },
    {
        name: "Abby",
        score: 0,
        id: 2
    },    
    {
        name: "Billy",
        score: 0,
        id: 3
    }
];

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
                {props.name}
            </span>
            <Counter 
                score={props.score}
            />
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalPlayers={props.initialPlayers.length}
            />
            {/* Players list */}
            {props.initialPlayers.map( player =>
                <Player 
                    name={player.name} 
                    score={player.score}
                    key={player.id.toString()} 
                />
            )}
        </div>
    )
}

ReactDOM.render(
    <App initialPlayers={players}/>,
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