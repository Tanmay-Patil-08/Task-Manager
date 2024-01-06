package com.taskmangerapi.TaskManagerBackend.completedTask;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class CompletedTask {
    @Id
    @GeneratedValue
    private Integer id;
    private String description;

    public CompletedTask(Integer id, String description) {
        this.id = id;
        this.description = description;
    }

    public CompletedTask() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "CompletedTask{" +
                "id=" + id +
                ", description='" + description + '\'' +
                '}';
    }
}
