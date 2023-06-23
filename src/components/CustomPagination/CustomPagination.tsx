import { FC } from "react";
import styles from "./customPagination.module.css";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.css";

type customPaginationProps = {
  page: number;
  setPageHandler: (page: number) => void;
};

export const CustomPagination: FC<customPaginationProps> = ({ page, setPageHandler }) => {
  const items = [];
  const pages = [1, 2, 3, 5, 6];
  pages.map((_, number) => {
    items.push(
      <Pagination.Item
        onClick={() => {
          setPageHandler(number + 1);
        }}
        key={number + 1}
        active={number + 1 === page}
        className={styles.paginationItem}
      >
        {number + 1}
      </Pagination.Item>
    );
  });
  items.unshift(
    <Pagination.Item
      onClick={() => {
        if (page === 1) {
          return;
        }
        setPageHandler(page - 1);
      }}
      key={"previous"}
    >
      {"<"}
    </Pagination.Item>
  );
  items.push(
    <Pagination.Item
      onClick={() => {
        if (page === items.length - 1) {
          return;
        }
        setPageHandler(page + 1);
      }}
      key={"next"}
    >
      {">"}
    </Pagination.Item>
  );
  return (
    <div className={styles.paginationWrapper}>
      <Pagination size="lg" className={styles.pagination}>
        {items}
      </Pagination>
    </div>
  );
};
