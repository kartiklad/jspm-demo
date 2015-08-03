import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return <p>Hello World from React!</p>;
    }
}

var hello = function() {
    React.render(<HelloWorld />, document.getElementById('content'));
}

export { hello }