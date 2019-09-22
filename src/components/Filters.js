import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
    const { getUserQuery, query } = props
    return (
        <div>
            <label>Buscador por nombre</label>
            <input type='text' onChange={getUserQuery} value={query}></input>
        </div>
    );
}

Filters.prototype = {
    getUserQuery: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired
}

export { Filters };