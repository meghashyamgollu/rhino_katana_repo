import { CompB } from "../CompB/CompB";
import { CompC } from "../CompC/CompC";
import "./CompA.css";

export const CompA = () => {
  return (
    <div className="comp_a">
        <h3>
            Component A
        </h3>
        <CompB />
        <CompC />
    </div>
  )
}
