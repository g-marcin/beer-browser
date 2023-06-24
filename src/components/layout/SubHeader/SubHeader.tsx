import { FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useBeerDetails } from "../../../hooks/useBeerDetails";
import styles from "./subheader.module.css";

export const SubHeader: FC = () => {
const {id} = useParams() 
const{beerDetails, isLoading} = useBeerDetails(id)
if(!beerDetails){
  return
}

  return (
    <nav className={`${styles.nav} text-decoration-none`}>
      {
        <NavLink
          to="/"
          className={`${styles.homeCrumb} text-decoration-none`}
        >
         Home
        </NavLink>
      }
     {isLoading? "": <>
       {id? <NavLink to={`/details/${id}`} className={`${styles.authorCrumb} text-decoration-none`}>
          {"> "}
          {beerDetails.name}
        </NavLink>: ""}
        </>}
    </nav>
  );
};
