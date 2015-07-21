const React = require('react');
const omdb = require('omdb-client');
// const omdb = require('./fake-omdb-client');

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    omdb.get({
      id: this.props.id
    }, (err, data) => {
      this.setState({movie: data});
    })
  }

  render() {
    return (
      <this.props.layout
        {...this.state.movie}
      />
    );
  }
}

module.exports = MovieContainer;
