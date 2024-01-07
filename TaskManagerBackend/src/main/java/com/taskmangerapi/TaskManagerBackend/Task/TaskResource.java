package com.taskmangerapi.TaskManagerBackend.Task;

import com.taskmangerapi.TaskManagerBackend.completedTask.CompletedTask;
import com.taskmangerapi.TaskManagerBackend.completedTask.CompletedTaskRepository;
import com.taskmangerapi.TaskManagerBackend.errorHandeling.TaskNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskResource {
    private TaskRepository taskRepository;
    private CompletedTaskRepository completedTaskRepository;

    public TaskResource(TaskRepository taskRepository, CompletedTaskRepository completedTaskRepository) {
        this.taskRepository = taskRepository;
        this.completedTaskRepository = completedTaskRepository;
    }

    @GetMapping("/users/{username}/task")
    public List<Task> retriveAllTasks(@PathVariable String username){
        List<Task> taskList= taskRepository.findByUsername(username);
        if(taskList.isEmpty()){
            throw new TaskNotFoundException("No Tasks with username:"+username);
        }

        return taskList;
    }
    @GetMapping("/tasks/count")
    public Long retriveTasksCount(){
        return taskRepository.count();
    }
    @GetMapping("/users/{username}/task/{id}")
    public Task retriveAllTasks(@PathVariable String username,@PathVariable Integer id){
        boolean isPresent = taskRepository.findById(id).isPresent();
        if(!isPresent){
            throw new TaskNotFoundException("No task found for username: "+username+" ,with id:"+id);
        }
        return taskRepository.findById(id).get();
    }

    @DeleteMapping("/users/{username}/task/{id}")
    public ResponseEntity<Void> deleteTaskById(@PathVariable String username,@PathVariable Integer id){
        Task task = taskRepository.findById(id).get();
        CompletedTask completedTask = new CompletedTask(null,task.getDescription());
        completedTaskRepository.save(completedTask);
        taskRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping ("/users/{username}/task/{id}")
    public Task updateTaskById(@PathVariable String username,@PathVariable Integer id,@RequestBody Task task){
        taskRepository.save(task);
        return task;
    }
    @PostMapping("/users/{username}/task")
    public Task createTaskById(@PathVariable String username,@RequestBody Task task){

        task.setId(null);
        task.setUsername(username);
        taskRepository.save(task);
        return task;
    }

    @GetMapping("/basicauth")
    public String sayHello(){
        return "Success";
    }

}
