# Fairy

Helpful fairy for your web service

### Project

- vue(2.6.11)
- firebase
- element-ui

### Process

1. 사용자가 Fairy-Web에서 Fairy를 등록하고 정보를 입력
2. Fairy-Web에서 Fairy-Server로 정보를 전송하고 서버는 해당 내용을 저장 후 Fairy의 아이디를 해시로 저장
3. 생성된 정보를 기반으로 해시값과 스크립트 내용을 출력해서 사용자에게 전송
4. 사용자는 자신의 페이지에 전송받은 스크립트 내용을 붙여넣음
5. Fairy-App이 실행되고 서버와 통신해서 정보를 전달받은 후 알맞은 결과 보여주기
