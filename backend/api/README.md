add your ip to mongodb

use `mvn spring-boot:run` to run

run `curl http:/localhost:8080/announcement/` in command line to get sample data

 post review : use postman https://www.postman.com/ to send a POST request with the following raw json to `localhost:8080/review/save`
 ```
 {
    "courseId": "63b8c35d175b929a67d604e2",
    "preference": 0,
    "difficulty": 0,
    "prof": 0,
    "helpfulness": 0,
    "content": "test review"
}
 ```