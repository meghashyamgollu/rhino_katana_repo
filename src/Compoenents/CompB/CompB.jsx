import {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeMessage } from "../../Redux/Message/action";
import "./CompB.css"

export const CompB = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(changeMessage(text));
    }, [text, dispatch]);

    const handleChange = (e) => {
        setText(e.target.value); 
        dispatch(changeMessage(text));
    }
  return (
    <div className="comp_b">
        <h4>Component B</h4>
        <input placeholder="enter message here" type="text" onChange={(e) => {handleChange(e)}} />
    </div>
  )
}
