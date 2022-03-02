import {useState, useEffect} from '../utils/State.js';

export default function Bark2(target) {
    const [count, setCount] = useState(10, Bark2, target);
    const [count2, setCount2] = useState(10, Bark2, target);
    useEffect(() => {
        console.log("나는 Bark2 인데 맨처음에만 실행되고싶어");
    }, Bark2, []);
    const render = () => {
        target.innerHTML = /*html*/`
    <button id="increase-bark2-count">누르면 개가 짖어엿.</button>
    <button id="increase-bark2-count2">누르면 개가두번 짖어엿.</button>
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
        const $increase = document.getElementById("increase-bark2-count");
        $increase.addEventListener("click", increaseCount);
        const $increase2 = document.getElementById("increase-bark2-count2");
        $increase2.addEventListener("click", increaseCount2);
    }
    render();
}