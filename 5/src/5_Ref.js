import React from 'react'

class REF extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            clicked: false
        };
    
        this.input = React.createRef();
    }

    render() {
        const handleChange = (e) => {
            this.setState({
                text: e.target.value
            })
        };
    
        const handleClick = (e) => {
            this.input.current.focus();
        };

        return (
            <div>
                <input ref={this.input}/>
                <button onClick={handleClick}>클릭</button>
            </div>
        ); 
    }
}


export {
    REF
}