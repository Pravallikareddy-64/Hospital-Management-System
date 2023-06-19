import React,{useState} from "react";
import TextField from '@mui/material/TextField';
const Addition = () => {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState();
    const handleNum1 = (e) => {
        setNum1(Number(e.target.value));
    };
    const handleNum2 = (e) => {
        setNum2(Number(e.target.value));
    };
    const handleaddition = () => {
        setResult(num1 + num2);
    };
    return (
        <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" type="number"value={num1} onChange={handleNum1} />

            <input type="number"value={num2} onChange={handleNum2}></input>
            <button type="button" onClick={handleaddition}>
                add
            </button>
            <p>result:{result}</p>
        </div>
    );
};
export default Addition