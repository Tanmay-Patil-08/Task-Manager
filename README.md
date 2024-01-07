# Task Manager

## Key features

* Interactive user interface using React js
* Email reminder for the remaining task at the day's end
* Email for completed task today at day's end
* Rest-full API using Spring boot

### Silent Features 

* Basic authentication for every API request
* Customize error handling
* Secured data storage in MySQL docker image
* Customizable for PgAdmin and in memory h2 database

## Follow the following steps to run the application
---
1. Step 1 -> Install docker (I have used docker to launch MySQL image to perform CRUD operations)

2. Step 2 -> Run this command to install and launch my SQL container

   ```docker run --detach --env MYSQL_ROOT_PASSWORD=Admin --env MYSQL_USER=Admin --env MYSQL_PASSWORD=Admin --env MYSQL_DATABASE=Task-Manger --name mysql --publish 3306:3306 mysql:8-oracle```<br />

   Additionally, you can tweak changes in the application.properties to connect to different databases I have mentioned it there<br />

   ![Docker run command](https://github.com/Tanmay-Patil-08/Task-Manager/blob/d4d70da709e394803b5d4e3a9fa70da589bfcf4b/Screenshots/Screenshot%20from%202024-01-06%2021-17-48.png)<br />
     
3. Step 3 -> Launch Spring boot application(Backend) I have used maven as my build tool  <br />
   ```mvn spring-boot:run```<br />
   or<br />
   you can run the project using the IDE<br />

   ![Launching spring boot](https://github.com/Tanmay-Patil-08/Task-Manager/blob/d4d70da709e394803b5d4e3a9fa70da589bfcf4b/Screenshots/Screenshot%20from%202024-01-06%2021-16-15.png)<br />
6. Step 4 -> Launch React Application (Frontend)<br />
   `cd frontend-react`<br />
   `npm start`<br />

   ![Launching React application](https://github.com/Tanmay-Patil-08/Task-Manager/blob/d4d70da709e394803b5d4e3a9fa70da589bfcf4b/Screenshots/Screenshot%20from%202024-01-06%2021-18-53.png)<br />

## Some of the sample screenshots 

