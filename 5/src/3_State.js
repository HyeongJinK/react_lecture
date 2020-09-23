import React from 'react';

class State1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "test"
        }
    }

    render() {
        const {text} = this.state;

        const handleClick = () => {
            this.setState({
                text: "click"
            }, () => {
                console.log(this.state.text)
            });
            console.log(this.state.text);
        }

        return (
            <>
                <li onClick={handleClick}>{text}</li>
            </>
        );
    }
}

export {
    State1
}