import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };

    this.removeMovie = this.removeMovie.bind(this);
    this.removeMovieFromWillWatch = this.removeMovieFromWillWatch.bind(this);
  }

  removeMovie(movie) {
    const updateMovie = this.state.movies.filter(item => item.id !== movie.id);

    this.setState({
      movies: updateMovie
    });
  }

  addMovieToWillWatch = movie => {
    const updateMoviesToWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesToWillWatch
    });
  };

  removeMovieFromWillWatch(movie) {
    const updateMovieWillWatch = this.state.moviesWillWatch.filter(
      item => item.id !== movie.id
    );

    this.setState({
      moviesWillWatch: updateMovieWillWatch
    });
  }

  render() {
    return (
      <div className="container m-4">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <h4>Will Watch: {this.state.moviesWillWatch.length}</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <div className="d-flex justify-content-between" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// function App() {
//   return <div>{moviesData[0].title}</div>;
// }

// function removeMovie(movie) {
//   const updateMovie = this.state.movies.filter(item => item.id !== movie.id);

//   this.setState({
//     movies: updateMovie
//   });
// }

{
  /* <div key={movie.id}>
  <p>{movie.title}</p>
  <button type="button" onClick={this.removeMovie.bind(this, movie)}>
    Delete
  </button>
</div>; */
}
