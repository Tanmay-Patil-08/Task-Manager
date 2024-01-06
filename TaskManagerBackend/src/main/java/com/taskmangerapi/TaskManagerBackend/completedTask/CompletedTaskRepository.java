package com.taskmangerapi.TaskManagerBackend.completedTask;

import com.taskmangerapi.TaskManagerBackend.completedTask.CompletedTask;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompletedTaskRepository extends JpaRepository<CompletedTask,Integer> {
}
