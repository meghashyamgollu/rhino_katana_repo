import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./CompC.css";

export const CompC = () => {
    const {message} = useSelector((state) => state.message)
    useEffect(() => {
        console.log(message);
    }, [message]);
  return (
    <div className="comp_c"><h4>Component C</h4>
    <h4>  Message : <br />
    </h4>
    <i>{message}</i>
    </div>
  )
}
