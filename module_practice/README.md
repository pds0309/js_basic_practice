#### 모듈

**모듈??**

모듈이란 여러 기능들에 관한 코드가 모여있는 하나의 파일을 말한다.

- 외부파일화 시키는 것

- 모듈과 모듈의 접근
  - 사용될 모듈을 export 로 노출 시킴
    - export: 여러개를 노출 시킬 수 있다.
    - export default: 단 하나만 노출 시킬 수 있다.
  - 사용할 모듈에서는 import 로 얻어온다.

**왜 쓰나?**

- 유지보수성
  - 모듈화가 잘 되어있으면 하나의 기능에 대해 수정해도 다른 부분과 독립적이다.
- 재사용성
  - 필요 시 적절한 모듈을 또 얻어와 사용하면 된다.
- 전역변수 범위 독립
  - 분리를 통해 이미 정의된 속성을 재정의 한다던가 하는 위험이 적어짐
