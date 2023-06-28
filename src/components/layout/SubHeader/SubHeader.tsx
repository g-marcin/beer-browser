import { FC } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useBeerDetails } from '../../../hooks/useBeerDetails';
import styles from './subheader.module.css';

export const SubHeader: FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const { beerDetails, isLoading } = useBeerDetails(id);

  return (
    <nav className={`${styles.nav} text-decoration-none`}>
      <NavLink to="/" className={`${styles.homeCrumb} text-decoration-none`}>
        Home
      </NavLink>

      {id && (
        <NavLink to={`/details/${id}`} className={`${styles.authorCrumb} text-decoration-none`}>
          {!isLoading && `> ${beerDetails?.name || ''}`}
        </NavLink>
      )}
      {location.pathname === '/details/random' && (
        <NavLink
          to={`/details/random`}
          className={`${styles.authorCrumb} text-decoration-none`}
          onClick={() => {
            window.location.reload();
          }}
        >
          {`> Random Beer`}
        </NavLink>
      )}
    </nav>
  );
};
