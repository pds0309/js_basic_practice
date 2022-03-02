import {useState, useEffect} from '../utils/State.js';

export default function Bark(target) {
    const [count, setCount] = useState(0, Bark, target);
    const [count2, setCount2] = useState(0, Bark, target);
    useEffect(() => {
        console.log("나는 한번 짖을 때만 실행되고 싶어");
    }, Bark, [count]);
    const render = () => {
        target.innerHTML = /*html*/`
    <button id="increase-bark-count">누르면 개가 짖어요.</button>
    <button id="increase-bark-count2">누르면 개가두번 짖어요.</button>
    <div>
      <p>
      ${'왈!! '.repeat(count)}<br>
      ${'멍!! '.repeat(count2)}
      </p>
    </div>
    `;
        setEvent();
    }
    const increaseCount = () => {
        console.log("왈")
        setCount(count + 1);
    }
    const increaseCount2 = () => {
        console.log("멍")
        setCount2(count2 + 2);
    }
    const setEvent = () => {
        const $increase = document.getElementById("increase-bark-count");
        $increase.addEventListener("click", increaseCount);
        const $increase2 = document.getElementById("increase-bark-count2");
        $increase2.addEventListener("click", increaseCount2);
    }
    render();
}