import { useState } from "react";   
import PropTypes from "prop-types";

const TextInput = ({name, type, label, placeholder, id }) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    // TextInput component code here
    return (
        <div className='mb-4'>
            <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
            <input 
                type={type}
                id={id} 
                name={name} 
                value={value} 
                onChange={handleChange} 
                placeholder={placeholder}
                className="shadow appearance-none border rounded w-full py-2 px-2 ext-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
    );
};

TextInput.propTypes = {
    // name attr for input
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    id: PropTypes.string,
};

export default TextInput;
