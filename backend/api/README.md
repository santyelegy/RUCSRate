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

# API
## AnnuncementController
- `/announcement/` get all announcement
```json
[{"id":"63b8b0f3b80f3584f689f19f","content":"OPERATION SYSTEM","title":"BULL SHIT"}]
```
## CourseController
- `/course/all` get all courses
```json
[{
  "_id":"63bdf00da241c054d6137f2c",
  "code":"16:332:590",
  "name":"SOCIALLY COGNIZANT ROBOTICS",
  "prof":"BEKRIS KOSTAS",
  "score":0,
  "year":2022,
  "department":"Electrical and Computer Engineering",
  "topics":"SOCIALLY COGNIZANT ROBOTICS \nStudents of the “Socially Cognizant Robotics” course will learn basic principles and state-of-the-art developments of robotics so as to learn the expected trajectory of this technology and its impact on individuals and society. The course is designed for both STEM students as well as computationally-oriented cognitive and social science students. The interdisciplinary curriculum has seven underlying disciplines spanning STEM fields to social and behavioral sciences. It includes traditionally technical disciplines, such as robot embodiment and control, and extends to areas which support human interaction, such as visual learning and language processing, to cognitive modeling, which enables more high level human-robot cooperation, and finally to areas such as behavioral research and public policy. The course will utilize open-source software libraries in robotics, computer vision, and deep learning. Recent innovations at the intersection of deep reinforcement learning and human behavior modeling will be explored in the context of optimizing collaborative robot action. \n",
  "season":"Winter"
}, 
  {
    "_id":"63bdf00da241c054d6137f2d",
    "code":"16:332:579",
    "name":"ADV TPCS COMPUTR ENG",
    "prof":"YUAN BO",
    "score":0,
    "year":2022,
    "department":"Electrical and Computer Engineering",
    "topics":"ADVANCED TOPICS IN COMPUTER ENGINEERING\nPrerequisite: Permission of instructor. In-depth study of topics pertaining to computer engineering such as microprocessor system design; fault- tolerant computing; real-time system design. Subject areas may vary from year to year. \n",
    "season":"Winter"
  }
]
```
- `/course/findid/{courseid}` get course by id
```json
{
  "code":"16:954:596",
  "name":"REGRESSION AND TIME SERIES ANALYSIS",
  "prof":"Yaqing Chen",
  "score":3,
  "review":[
    {
      "content":"This course is a compulsory course in the Department of Data Science, and there is no possibility not to choose it. However, there are usually two different professors teaching the course, and I recommended to choose another one. As one of the basic courses of statistics, the requirements for this course have become higher at the graduate level. Basically, any default theorems and conclusions at the undergraduate level need to be proved. For example, the distribution of T-test and F-test statistics must be started from scratch. And this is Professor Yaqing's first year of teaching at Rutgers University(2022). It can be seen that the professor is relatively unfamiliar with teaching. During class, her thinking often jumps and it is very difficult to keep up, or she may be obsessed with proving for an hour or two while the students are exhausted. However Yaqing is very happy to answer students' questions after class. It can be seen that she is a professor who pays great attention to academics, and she can also find that the professor is very kind when communicating. How helpful this course will be in the future depends on the job you want to do, but in general it is very helpful for both work and academic inspiration\n",
      "preference":3.0,
      "difficulty":4.5,
      "prof":3.8,
      "helpfulness":4.0
    }
  ]
}
```
- `/course/department` get all department and number of courses in them
```json
{
  "Data Science":7,
  "Computer Science":20,
  "Electrical and Computer Engineering":64
}
```
## ProfessorController
- `/professor/all` get all professor
```json
[
  {"name":"PEPE RUSSELL","score":0.0,"email":""},
  {"name":"BEKRIS KOSTAS","score":0.0,"email":""},
  {"name":"YUAN BO","score":0.0,"email":""}
]
```
- `/professor/findname/{professorname}` find professor by name
```json
{"name":"Mr.A","email":"","score":0.0,"review":[]}
```
## ReviewController
- `/review/all` get all review
```json
[
  {"id":"63b8be1adcbe19fd4f4f5c19","courseId":"63b8ae31b80f3584f689f198","preference":5.0,"difficulty":4.0,"prof":4.5,"helpfulness":5.0,"content":"This course is the most difficult to get high scores of the three courses in the first semester of the Data Science Department. The questions in each exam and quiz are very tricky, but there will be a curve in the final exam, and the final grade will also have a curve. The professors are nice and good at motivating students and he is very happy to solve everyone's problems during class or after class, and also hopes that students can use emails to ask questions after class or during office hours. All emails will be replied to within one working day, even if students encounter homework problems that they do not know. There is no possibility of escaping this course as a compulsory course. The course itself is very important as the foundation of computer science.","professor":"Steven E. Kreutzer","time":null,"course":"16:198:512"},
  {"id":"63b8be49dcbe19fd4f4f5c1a","courseId":"63b8c35d175b929a67d604e2","preference":5.0,"difficulty":3.5,"prof":4.5,"helpfulness":4.0,"content":"Probability theory is one of the most important basic courses in the Department of Statistics, and it is impossible not to take it as a compulsory course. The homework scores are very easy to obtain, and a maximum of one point will be deducted for each question in the grading. The mid-term and final exams also have most of the previous exam questions (last year or the year before), so you should focus on reviewing before the exam. The professor is the head of the Department of Data Science. His knowledgeable lectures are very interesting. The professor will give a variety of vivid examples in the course to impress the students with abstract concepts. However, the professor's response after class was not very good, and emails were often not answered. If you have any questions, you need to ask them in person.\n","professor":"Sijian Wang","time":null,"course":"16:954:581"},
  {"id":"63b8bfd2dcbe19fd4f4f5c1c","courseId":"63b8c39a175b929a67d604e4","preference":3.0,"difficulty":4.5,"prof":3.8,"helpfulness":4.0,"content":"This course is a compulsory course in the Department of Data Science, and there is no possibility not to choose it. However, there are usually two different professors teaching the course, and I recommended to choose another one. As one of the basic courses of statistics, the requirements for this course have become higher at the graduate level. Basically, any default theorems and conclusions at the undergraduate level need to be proved. For example, the distribution of T-test and F-test statistics must be started from scratch. And this is Professor Yaqing's first year of teaching at Rutgers University(2022). It can be seen that the professor is relatively unfamiliar with teaching. During class, her thinking often jumps and it is very difficult to keep up, or she may be obsessed with proving for an hour or two while the students are exhausted. However Yaqing is very happy to answer students' questions after class. It can be seen that she is a professor who pays great attention to academics, and she can also find that the professor is very kind when communicating. How helpful this course will be in the future depends on the job you want to do, but in general it is very helpful for both work and academic inspiration\n","professor":"YA QING","time":null,"course":"16:954:596"},
  {"id":"63c76c7fbf303c614aab8c85","courseId":"63b8c35d175b929a67d604e2","preference":5.0,"difficulty":4.0,"prof":4.0,"helpfulness":4.0,"content":"sakdkafjafbkafjakfbakfa","professor":null,"time":"2023-01-17T22:50:23.617","course":null},
  {"id":"63c8b1f266f1a4040c5d2d76","courseId":"63b8c35d175b929a67d604e2","preference":3.1,"difficulty":2.8,"prof":4.0,"helpfulness":3.8,"content":"test review","professor":null,"time":null,"course":null},
  {"id":"63c8b426b9463e0c0bd8cb5f","courseId":"63b8c35d175b929a67d604e2","preference":0.0,"difficulty":0.0,"prof":0.0,"helpfulness":0.0,"content":"test review","professor":null,"time":null,"course":null},
  {"id":"63c8b609735fb16e59b6a42b","courseId":"63b8c35d175b929a87d604e2","preference":0.0,"difficulty":0.0,"prof":0.0,"helpfulness":0.0,"content":"test review","professor":null,"time":null,"course":null},
  {"id":"63c8b6a46e389d59d517c9d2","courseId":"63b8c35d175b929a87d604e2","preference":0.0,"difficulty":0.0,"prof":0.0,"helpfulness":0.0,"content":"test review","professor":null,"time":null,"course":null},
  {"id":"63c96662f682aa027518c953","courseId":"63b8ae31b80f3584f689f198","preference":4.5,"difficulty":4.0,"prof":5.0,"helpfulness":5.0,"content":"This course is the most difficult to get high scores of the three courses in the first semester of the Data Science Department. The questions in each exam and quiz are very tricky, but there will be a curve in the final exam, and the final grade will also have a curve. The professors are nice and good at motivating students and he is very happy to solve everyone's problems during class or after class, and also hopes that students can use emails to ask questions after class or during office hours. All emails will be replied to within one working day, even if students encounter homework problems that they do not know. There is no possibility of escaping this course as a compulsory course. The course itself is very important as the foundation of computer science.","professor":"Steven E. Kreutzer","time":null,"course":"16:198:512"}
]
```
- `/review/getByCourse/{courseid}` get all review by course id
```json
[
  {"id":"63b8be1adcbe19fd4f4f5c19","courseId":"63b8ae31b80f3584f689f198","preference":5.0,"difficulty":4.0,"prof":4.5,"helpfulness":5.0,"content":"This course is the most difficult to get high scores of the three courses in the first semester of the Data Science Department. The questions in each exam and quiz are very tricky, but there will be a curve in the final exam, and the final grade will also have a curve. The professors are nice and good at motivating students and he is very happy to solve everyone's problems during class or after class, and also hopes that students can use emails to ask questions after class or during office hours. All emails will be replied to within one working day, even if students encounter homework problems that they do not know. There is no possibility of escaping this course as a compulsory course. The course itself is very important as the foundation of computer science.","professor":"Steven E. Kreutzer","time":null,"course":"16:198:512"},
  {"id":"63c96662f682aa027518c953","courseId":"63b8ae31b80f3584f689f198","preference":4.5,"difficulty":4.0,"prof":5.0,"helpfulness":5.0,"content":"This course is the most difficult to get high scores of the three courses in the first semester of the Data Science Department. The questions in each exam and quiz are very tricky, but there will be a curve in the final exam, and the final grade will also have a curve. The professors are nice and good at motivating students and he is very happy to solve everyone's problems during class or after class, and also hopes that students can use emails to ask questions after class or during office hours. All emails will be replied to within one working day, even if students encounter homework problems that they do not know. There is no possibility of escaping this course as a compulsory course. The course itself is very important as the foundation of computer science.","professor":"Steven E. Kreutzer","time":null,"course":"16:198:512"},
  {"id":"63c966d4f682aa027518c956","courseId":"63b8ae31b80f3584f689f198","preference":4.0,"difficulty":4.5,"prof":4.0,"helpfulness":4.0,"content":"This course is the most difficult to get high scores of the three courses in the first semester of the Data Science Department. The questions in each exam and quiz are very tricky, but there will be a curve in the final exam, and the final grade will also have a curve. The professors are nice and good at motivating students and he is very happy to solve everyone's problems during class or after class, and also hopes that students can use emails to ask questions after class or during office hours. All emails will be replied to within one working day, even if students encounter homework problems that they do not know. There is no possibility of escaping this course as a compulsory course. The course itself is very important as the foundation of computer science.","professor":"Steven E. Kreutzer","time":null,"course":"16:198:512"}
]
```
- `/review/save` use POST method to save a review. see the beginning of the README