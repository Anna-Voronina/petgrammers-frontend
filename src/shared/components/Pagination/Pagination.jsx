import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { useMediaQuery } from "react-responsive";
import { PaginationContainer } from "./Pagination.styled";

export const Pagination = ({
  onPageChange,
  totalPets,
  currentPage,
  perPage,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const marginPages = isMobile ? 1 : 2;

  const pageCount = Math.ceil(totalPets / perPage);

  const handlePageClick = (event) => {
    const selectedPage = event.selected * perPage;
    onPageChange(selectedPage);
  };

  if (totalPets <= perPage) {
    return null;
  }

  return (
    <PaginationContainer>
      <ReactPaginate
        breakLabel={"..."}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="←"
        nextLabel="→"
        pageRangeDisplayed={2}
        marginPagesDisplayed={marginPages}
        renderOnZeroPageCount={null}
        activeClassName="active"
        activeLinkClassName="active"
        previousClassName={currentPage === 0 ? "previous disabled" : "previous"}
        nextClassName={currentPage === pageCount ? "next disabled" : "next"}
      />
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  perPage: PropTypes.number,
  currentPage: PropTypes.number,
  totalPets: PropTypes.number,
  onPageChange: PropTypes.func,
};