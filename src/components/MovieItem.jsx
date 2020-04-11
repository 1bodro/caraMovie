import React from "react";

export default class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }

  render() {
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieFromWillWatch
    } = this.props;

    const btnSettings = this.state.willWatch
      ? {
          btnClass: "btn-success",
          btnText: "Remove movie",
          function: () => removeMovieFromWillWatch(movie)
        }
      : {
          btnClass: "btn-secondary",
          btnText: "Add movie",
          function: () => addMovieToWillWatch(movie)
        };
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
            movie.poster_path}`}
          alt={movie.title}
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <p className="mb-0">Rating: {movie.vote_average}</p>
            <button
              type="button"
              className={`btn ${btnSettings.btnClass}`}
              onClick={() => {
                this.setState({
                  willWatch: !this.state.willWatch
                });
                btnSettings.function();
              }}
            >
              {btnSettings.btnText}
            </button>
          </div>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={removeMovie.bind(null, movie)}
          >
            Delete movie
          </button>
        </div>
      </div>
    );
  }
}

// export const MovieItem = props => {
//   const { movie, removeMovie, addMovieToWillWatch } = props;

//   return (
//     <div className="card">
//       <img
//         className="card-img-top"
//         src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
//           movie.poster_path}`}
//         alt={movie.title}
//       />
//       <div className="card-body">
//         <h6 className="card-title">{movie.title}</h6>
//         <div className="d-flex justify-content-between align-items-center">
//           <p className="mb-0">Rating: {movie.vote_average}</p>
//           <button
//             type="button"
//             className="btn btn-secondary"
//             onClick={addMovieToWillWatch.bind(null, movie)}
//           >
//             Will Watch
//           </button>
//         </div>
//         <button type="button" onClick={removeMovie.bind(null, movie)}>
//           Delete movie
//         </button>
//       </div>
//     </div>
//   );
// };
