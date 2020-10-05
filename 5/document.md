# React

## 컴포넌트

* 리액트는 컴포넌트 단위
* 컴포넌트는 속성(props)과 상태(state) 값을 가진다.
* return 문장은 하나의 태그로 감싸 있어야 한다. v16? 에서 Fragment 가 생김, 그 이후 <></>가 생김

### 함수형 컴포넌트

* 함수 (function, 화살표 함수)

```javascript
function FunComponent() {
    return (
        <div>함수형 컴포넌트</div>
    );
}

const FunComponent2 = () => {
    return (
        <div>함수형 컴포넌트2</div>
    );
}
```

### 클래스형 컴포넌트

* state를 사용할 수 있다.
* 라이프 사이클을 이용할 수 있다.

```javascript
class ClassComponent extends React.Component {
    render() {
        return (
            <div>컴포넌트 클래스</div>
        );
    }
} 
```

## Props


## State

### 초기화

```javascript
this.state = {
    text: "test"
}
```

### 상태 설정

* this.setState(value, callbackFun);

```javascript
this.setState({text: "click"}, () => {})
```

### useState - hook

## 이벤트

* onClick
* onChange

### input 여러개 다루기


## ref

dom을 직접 건드려야 할 때 사용한다.

## 함수

* map (callback, [thisArg]): key
* filter

## 라이프 사이클

* constructor : 생성자
* getDerivedStateFromProps: props에 값이 저장됨, state에 값 지정
```javascript
static getDerivedStateFromProps(nextProps, prevProps)
```
* render: 렌더링
* componnentDidMount: 모든 렌더링이 끝난 후
* shouldComponentUpdate: 렌더링 되기 전에 호출된다.
* getSnapshotBeforeUpdate: 컴포넌트 수정사항을 DOM에 반영하기 전에 일어난다.

* componentWillUnmount: 컴포넌트가 언마운트 되기전에 호출되는 함수

## 업데이트

* props 수정
* state 수정
* 부모 컴포넌트가 렌더링 될 때
* this.forceUpdate로 강제로 렌더링

## Hook

* useState
* useEffect : 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있다.
* useReducer
* useMemo
* useCallback
* useRef

## useEffect

### 마운트 될 때만 실행

```javascript
useEffect(() => {   
    console.log("init");
}, []);
```