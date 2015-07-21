const React = require('react');
const RatingStars = require('./RatingStars');

class MovieTileLayout extends React.Component {
  render() {
    const img
      = (this.props.Poster && this.props.Poster != 'N/A')
      ? this.props.Poster
      : `public/img/fake${Math.floor(Math.random()*5) + 1}.jpg`

    return (
      <div className='movie-tile'>
        <div className='movie-tile__img-container'>
          <div className='movie-tile__img' style={{'backgroundImage': `url(${img})`}}></div>
        </div>
        <div className='movie-title__info'>
          <h1 className='movie-tile__title'>{this.props.Title}</h1>
          <h2 className='movie-tile__year'>{this.props.Year}</h2>
          <RatingStars
            max={10}
            score={this.props.imdbRating}
          />
        </div>
      </div>
    )
  }
}

module.exports = MovieTileLayout;
