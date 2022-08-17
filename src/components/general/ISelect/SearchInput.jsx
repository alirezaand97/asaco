import React from 'react'

const SearchInput = ({placeholder = "", value = "", onChange, name = ""}) => {
    return (
        <div className="relative px-2.5 py-1">
            <input
                className="w-full py-2 pl-8 pr-4 text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:outline-none"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoFocus={true}
                name={name}
            />
        </div>
    );
};

export default SearchInput;