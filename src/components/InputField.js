import { onInput } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

const InputField = ({data}) => {
    const dispatch = useDispatch();
    const inputData = useSelector((state)=> state.updateInput);

    return (
        <div className="form-group">
            <label htmlFor={data["name"]}>{data["value"]}</label>
            <input type={data["type"]} className="form-control" id={data["name"]} name={data["name"]} placeholder={data["value"]} onChange={ (event) => dispatch(onInput(event.target.name, event.target.value))} value={inputData[data["name"]]?inputData[data["name"]]:''} />
        </div>
    );
}

export default InputField;
