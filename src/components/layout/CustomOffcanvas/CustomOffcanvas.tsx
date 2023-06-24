import { FC } from "react";
import { Offcanvas } from "react-bootstrap";
import { Moon, Sun } from "react-feather";
import ReactFocusLock from "react-focus-lock";
import styles from "./customOffcanvas.module.css";

type OffcanvasProps = {
    name:string
    show:boolean
    handleShow:()=>void
    handleClose:()=>void
    
}


export const CustomOffcanvas:FC<OffcanvasProps> = ({  show, handleShow, handleClose, ...props }) => {

  
    return (
      <>
        <Offcanvas show={show} onHide={handleClose} {...props} placement={"end"}>
       <ReactFocusLock>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu:</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          
           <button className={styles.button}  ><Moon size={36}/></button>
           <button className={styles.button}><Sun size={36}/></button>
          </Offcanvas.Body>
        </ReactFocusLock>
        </Offcanvas>
      </>
    );
  }