import React from "react";
import classNames from "classnames/bind";

class MovieTabs extends React.Component {
  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    console.log("nextProps", nextProps.sort_by);
    console.log("this.props", this.props.sort_by);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.sort_by !== this.props.sort_by ? true : false;
  }

  render() {
    const { sort_by, updateSortBy } = this.props;
    const handleClick = value => () => updateSortBy(value);

    console.log("MovieTabs Render");
    return (
      <div className="col-12">
        <ul className="tabs nav nav-pills mb-2 d-flex justify-content-center align-items-center">
          <li className="nav-item">
            <div
              className={`nav-link ${classNames({
                active: sort_by === "popularity.desc"
              })}`}
              onClick={handleClick("popularity.desc")}
            >
              Popularity
            </div>
          </li>
          <li className="nav-item">
            <div
              className={`nav-link ${classNames({
                active: sort_by === "revenue.desc"
              })}`}
              onClick={handleClick("revenue.desc")}
            >
              Revenue
            </div>
          </li>
          <li className="nav-item">
            <div
              className={`nav-link ${classNames({
                active: sort_by === "vote_average.desc"
              })}`}
              onClick={handleClick("vote_average.desc")}
            >
              Vote average
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

// const MovieTabs = props => {
//   const { sort_by, updateSortBy } = props;
//   const handleClick = value => () => updateSortBy(value);
//   const getCLassLink = value => (value === sort_by ? "active" : null);

//   return (
//     <div className="col-12">
//       <ul className="tabs nav nav-pills mb-2 d-flex justify-content-center align-items-center">
//         <li className="nav-item">
//           <div
//             className={`nav-link ${getCLassLink("popularity.desc")}`}
//             onClick={handleClick("popularity.desc")}
//           >
//             Popularity
//           </div>
//         </li>
//         <li className="nav-item">
//           <div
//             className={`nav-link ${getCLassLink("revenue.desc")}`}
//             onClick={handleClick("revenue.desc")}
//           >
//             Revenue
//           </div>
//         </li>
//         <li className="nav-item">
//           <div
//             className={`nav-link ${getCLassLink("vote_average.desc")}`}
//             onClick={handleClick("vote_average.desc")}
//           >
//             Vote average
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// };

export default MovieTabs;
