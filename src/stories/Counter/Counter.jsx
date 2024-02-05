import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from "../Button/Button";

export default function Counter({color}) {
    const [count, setCount] = useState(0);

    const handleOnClick = (event) => {
        if (event === "ADD"){
            setCount(count+1);
            return;
        }
        setCount(count-1);
    };

    const themeOne = {
        color: {color},
        backgroundColor: '#059180'
    };

    return (
        <div>
            <h1>Counter {count}</h1>
            <Button
                onClick={() => handleOnClick("ADD")}
                label="+"
                style={themeOne} 
            />
            <Button 
                onClick={() => handleOnClick()}
                label="-" 
                style={themeOne} 
            />
        </div>
    );
}

Counter.propTypes = {
    color: PropTypes.string,
}