import React from 'react';
import PropTypes from 'prop-types';

function Props (props) {
    const {name, children} = props;

    return (
        <>
            <li>{name}</li>
            <li>{children}</li>
        </>
    );
}

Props.defaultProps = {  //default Props 설정
    name: "default"
};

function Props2 ({name, children}) {
    return (
        <>
            <li>{name}</li>
            <li>{children}</li>
        </>
    );
}

Props2.propTypes = {
    name: PropTypes.string.isRequired
}

export {
    Props,
    Props2
}
