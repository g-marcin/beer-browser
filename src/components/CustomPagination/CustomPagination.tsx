import { FC } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import styles from './customPagination.module.css';

type customPaginationProps = {
  page: number;
  setPageHandler: (page: number) => void;
};

export const CustomPagination: FC<customPaginationProps> = ({ page, setPageHandler }) => {
  const items = [];
  const pages = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];
  pages.map((_, number) => {
    items.push(
      <Pagination.Item
        onClick={() => {
          setPageHandler(number + 1);
          window.scrollTo(0, 0);
        }}
        key={number + 1}
        active={number + 1 === page}
        className={styles.paginationItem}
      >
        {number + 1}
      </Pagination.Item>,
    );
  });
  items.unshift(
    <Pagination.Item
      onClick={() => {
        if (page === 1) {
          return;
        }
        setPageHandler(page - 1);
        window.scrollTo(0, 0);
      }}
      key={'previous'}
    >
      {'<'}
    </Pagination.Item>,
  );
  items.push(
    <Pagination.Item
      onClick={() => {
        if (page === items.length - 2) {
          return;
        }
        setPageHandler(page + 1);
        window.scrollTo(0, 0);
      }}
      key={'next'}
    >
      {'>'}
    </Pagination.Item>,
  );
  return (
    <div className={styles.paginationWrapper}>
      <Pagination size="sm" className={styles['pagination-custom']}>
        {items}
      </Pagination>
    </div>
  );
};
