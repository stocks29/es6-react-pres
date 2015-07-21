const React = require('react');
const preload = require('./netflix');
const MovieContainer = require('./MovieContainer');
const MovieTileLayout = require('./MovieTileLayout');
const MovieListLayout = require('./MovieListLayout');
const Header = require('./Header');
const omdb = require('omdb-client');
const _ = require('lodash');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: _.clone(preload.Search),
      layout: 'tile',
      term: ''
    };
  }

  changeLayout(layout) {
    this.setState({layout});
  }

  search(term) {
    this.setState({term})
    omdb.search({query:term}, (err, data) => {
      this.setState({results:data.Search});
    });
  }

  clearTerm() {
    this.setState({term: "", results: _.clone(preload.Search)})
  }

  render() {
    let layout;
    if (this.state.layout === 'tile') {
      layout = MovieTileLayout;
    } else {
      layout = MovieListLayout;
    }

    return (
      <div className="app-container">
        <Header
          layout={this.state.layout}
          changeLayout={this.changeLayout.bind(this)}
          queryTerm={this.state.term}
          search={this.search.bind(this)}
          clearTerm={this.clearTerm.bind(this)}
          />
        <div className="movies-list">
          {this.state.results.map( el => {
            return (
              <MovieContainer
                id={el.imdbID}
                key={el.imdbID}
                layout={layout}
                />
            );
          })}
        </div>
      </div>

    );
  }
}

module.exports = App;
