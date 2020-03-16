import React from 'react'

export const ImageSearch = (props) => {
    
    const { handleGetRequest } = props;

    return (
        <div className="image-search">
            <form onSubmit={handleGetRequest}>
                <input type="text" autoComplete="off" name="searchValue" placeholder="search for images..."/>
                <button>Search</button>
            </form>
        </div>
    )
}
