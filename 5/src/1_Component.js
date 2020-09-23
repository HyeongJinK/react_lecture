import React, { Fragment } from 'react';

function DrawComponenet() {
    return (
        <>
            <FunComponent/>
            <FunComponent2 />
            <ClassComponent />
            <ul>
                <FragmentComponent />
                <BlankComponent />
            </ul>
        </>
    );
}

function FunComponent() {
    return (
        <div>함수형 컴포넌트</div>
    );
}
// 화살표 함수(람다)
const FunComponent2 = () => {
    return (
        <div>함수형 컴포넌트2</div>
    );
}

class ClassComponent extends React.Component {
    render() {
        return (
            <div>컴포넌트 클래스</div>
        );
    }
}

function FragmentComponent() {
    return (
        <Fragment>
            <li>Fragment 컴포넌트</li>
            <li>Fragment 컴포넌트2</li>
        </Fragment>
    )
}

function BlankComponent() {
    return (
        <>
            <li>Fragment 컴포넌트3</li>
            <li>Fragment 컴포넌트4</li>
        </>
    )
}

export { DrawComponenet, FunComponent };