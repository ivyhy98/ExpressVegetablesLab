const React = require("react");
const DefaultLayout = require("./layout/Default");

class Index extends React.Component {
  render() {

    return (
      <DefaultLayout title="Index Page">
        <h2>
          <a href="/fruits">Fruits</a>
        </h2>
        <h2>
          <a href="/vegetables">Vegetables</a>
        </h2>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
