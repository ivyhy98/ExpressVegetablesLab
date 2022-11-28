const React = require("react");

class Index extends React.Component {
  render() {

    return (
      <div>
        <h1>Choose An Index Page</h1>
        <h2>
          <a href="/fruits">Fruits</a>
        </h2>
        <h2>
          <a href="/vegetables">Vegetables</a>
        </h2>
      </div>
    );
  }
}

module.exports = Index;
