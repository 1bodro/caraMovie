import React from "react";
import classNames from "classnames/bind";

export default class Pagination extends React.Component {
  render() {
    const { page, totalPages, changePage } = this.props;

    return (
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <div class="btn-group btn-pagination">
          <button
            type="button"
            className={`btn mr-2 bg-info text-light ${classNames({
              disabled: page !== "1"
            })}`}
            style={{ pointerEvent: page === "1" ? "none" : "auto" }}
            onClick={changePage.bind(null, "prev")}
          >
            Назад
          </button>
          <button
            type="button"
            className="btn bg-info text-light"
            onClick={changePage.bind(null, "next")}
          >
            Вперед
          </button>
        </div>
        <div className="col-12 d-flex justify-content-center page-pagination">
          {page} из {totalPages}
        </div>
      </div>
    );
  }
}
