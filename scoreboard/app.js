const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Alex
            </span>
            <Counter />
        </div>
    );
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header />
            {/* Players list */}
            <Player />
        </div>
    )
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