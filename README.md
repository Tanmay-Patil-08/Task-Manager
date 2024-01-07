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

---
## Some of the sample screenshots 

* Email remainder of remaining mails
   ![Image](https://github.com/Tanmay-Patil-08/Task-Manager/blob/2cac1beb4a7207f91cb576230fcd6ab285ba9a87/Screenshots/ReminderTaskMail.jpeg)<br />
* Email of Completed Task
   ![Image](https://github.com/Tanmay-Patil-08/Task-Manager/blob/2cac1beb4a7207f91cb576230fcd6ab285ba9a87/Screenshots/CompletedTaskMail.jpeg)<br />
* Customized error message for no task found with username
   ![Image](https://github.com/Tanmay-Patil-08/Task-Manager/blob/2cac1beb4a7207f91cb576230fcd6ab285ba9a87/Screenshots/Screenshot%20from%202024-01-07%2013-36-35.png)<br />
* Customized error message for no task found with id 
   ![Image](https://github.com/Tanmay-Patil-08/Task-Manager/blob/2cac1beb4a7207f91cb576230fcd6ab285ba9a87/Screenshots/Screenshot%20from%202024-01-07%2013-36-57.png)<br />
* Login Page (username: Admin, password: Admin)
   ![Image](https://github.com/Tanmay-Patil-08/Task-Manager/blob/2cac1beb4a7207f91cb576230fcd6ab285ba9a87/Screenshots/Screenshot%20from%202024-01-06%2020-50-53.png)<br />
* Welcome page
   ![Image](https://github.com/Tanmay-Patil-08/Task-Manager/blob/2cac1beb4a7207f91cb576230fcd6ab285ba9a87/Screenshots/Screenshot%20from%202024-01-06%2020-51-11.png)<br />
* List all Tasks page
   ![Image](https://github.com/Tanmay-Patil-08/Task-Manager/blob/2cac1beb4a7207f91cb576230fcd6ab285ba9a87/Screenshots/Screenshot%20from%202024-01-06%2020-51-18.png)<br />
* Update task
   ![Image](https://github.com/Tanmay-Patil-08/Task-Manager/blob/2cac1beb4a7207f91cb576230fcd6ab285ba9a87/Screenshots/Screenshot%20from%202024-01-06%2020-51-26.png)<br />
* Create task
   ![Image](https://github.com/Tanmay-Patil-08/Task-Manager/blob/2cac1beb4a7207f91cb576230fcd6ab285ba9a87/Screenshots/Screenshot%20from%202024-01-06%2020-52-30.png)<br />
* Delete task
   ![Image](https://github.com/Tanmay-Patil-08/Task-Manager/blob/2cac1beb4a7207f91cb576230fcd6ab285ba9a87/Screenshots/Screenshot%20from%202024-01-06%2020-51-35.png)<br />
