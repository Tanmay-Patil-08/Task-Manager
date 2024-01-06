package com.taskmangerapi.TaskManagerBackend.email;

import com.taskmangerapi.TaskManagerBackend.Task.Task;
import com.taskmangerapi.TaskManagerBackend.Task.TaskRepository;
import com.taskmangerapi.TaskManagerBackend.completedTask.CompletedTask;
import com.taskmangerapi.TaskManagerBackend.completedTask.CompletedTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Component
public class EmailService {

    private CompletedTaskRepository completedTaskRepository;
    private EmailSenderService emailSenderService;
    private TaskRepository taskRepository;

    public EmailService(CompletedTaskRepository completedTaskRepository, EmailSenderService emailSenderService, TaskRepository taskRepository) {
        this.completedTaskRepository = completedTaskRepository;
        this.emailSenderService = emailSenderService;
        this.taskRepository = taskRepository;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void sendEmailCompletedTask(){
        StringBuilder tasks = new StringBuilder();
        List<CompletedTask> completedTasks = completedTaskRepository.findAll();
        tasks.append("Hurray you have completed following tasks\n");

        int count = 1;
        for(CompletedTask task : completedTasks ){
            String x = count + ". "+task.getDescription()+"\n";
            tasks.append(x);
            count++;
        }
        tasks.append("\n\nHappy Coding");

        String st = tasks.toString();

        if(st.isEmpty()){
            System.out.println("Empty mail");
        }else{
            emailSenderService.sendSimpleEmail(
                    "pptanmay08@gmail.com",
                    "Completed task of today",
                    st
            );

        }
        completedTaskRepository.deleteAll();
    }

    @EventListener(ApplicationReadyEvent.class)
    public void sendEmailReminderTask(){
        List<Task> listTask = taskRepository.findAll();
        LocalDate today = LocalDate.now();
        StringBuilder tasks = new StringBuilder();
        int count = 1;
        tasks.append("You have complete following tasks gear up\n");


        for(Task task : listTask){
            long daysDifference = ChronoUnit.DAYS.between(today,task.getTargetDate() );
            if(daysDifference == 1){
                String x = count + ". "+task.getDescription()+"\n";
                tasks.append(x);
                count++;
            }else{
                continue;
            }
        }
        tasks.append("\n\nHappy Coding");

        String st = tasks.toString();
        if(st.isEmpty()){
            System.out.println("Empty mail");
        }else{
            emailSenderService.sendSimpleEmail(
                    "pptanmay08@gmail.com",
                    "Reminder Pending tasks",
                    st
            );

        }


    }
}
