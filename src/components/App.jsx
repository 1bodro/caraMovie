import React from "react";
// import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import { API_URL, API_KEY_BODRO, API_DISCOVER, API_LANG } from "../utils/api";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc"
    };
    this.removeMovie = this.removeMovie.bind(this);
    this.removeMovieFromWillWatch = this.removeMovieFromWillWatch.bind(this);
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Mounting монтирование");
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Updating обновление");
    console.log("prevState", prevState.sort_by);
    console.log("prevProps", prevProps);
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies();
    }
  }

  componentWillUnmount() {
    console.log("Unmounting Размонтирование");
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

  updateSortBy = value => {
    this.setState({
      sort_by: value
    });
  };

  getMovies = () => {
    fetch(
      `${API_URL}${API_DISCOVER}?api_key=${API_KEY_BODRO}&language=${API_LANG}&sort_by=${
        this.state.sort_by
      }`
    )
      .then(data => {
        return data.json();
      })
      .then(movies => {
        this.setState({
          movies: movies.results
        });
      })
      .catch(error => console.error(error));
  };

  render() {
    console.log("render this.state", this.state);
    return (
      <div className="container m-4">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <MovieTabs
                sort_by={this.state.sort_by}
                updateSortBy={this.updateSortBy}
              />
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
            <div style={{ position: "fixed" }}>
              <h4>Will Watch: {this.state.moviesWillWatch.length}</h4>
              <ul className="list-group">
                {this.state.moviesWillWatch.map(movie => {
                  return (
                    <li className="list-group-item">
                      <div className="d-flex justify-content-between">
                        <div>{movie.title}</div>
                        <div>{movie.vote_average}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
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
