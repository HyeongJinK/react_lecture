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