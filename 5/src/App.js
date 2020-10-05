import React from 'react';
import { DrawComponenet } from './1_Component';
import { Props } from './2_Props';
import { State1 } from './3_state';
import { REF } from './5_Ref';
import { UseState } from './6_hook';

export default class App extends React.Component {
    render(){
        let abc = 0;
        return(
            <div>
                <h1>Hello World</h1>
                <DrawComponenet />
                <App2 />
                <ul>
                    <Props name="asdkfjlk">메렁</Props>
                </ul>
                <ul>
                <State1 />
                </ul>

                <REF />
                <UseState />
            </div>
        )
    }
}

function App2() {
    return React.createElement("div", null, React.createElement("h1", null, "HelloWorld"));
}

