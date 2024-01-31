
package org.launchCode.procrastiNOT.controllers;
import jakarta.validation.Valid;
import org.launchCode.procrastiNOT.data.TaskRepository;
//import org.launchCode.procrastiNOT.models.Junk;
import org.launchCode.procrastiNOT.models.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/")
public class TaskController {
    @Autowired
    private TaskRepository taskRepository;

@GetMapping("/")
public String index (Model model){
        model.addAttribute("title", "Apps");
        model.addAttribute("tasks", taskRepository.findAll());
    model.addAttribute(new Task());

    return "index";

    }
    @PostMapping("/")
    public String ShowTaskFormIndex (@ModelAttribute @Valid Task newTask, Errors errors, Model model){
        model.addAttribute("title", "Apps");
        model.addAttribute("tasks", taskRepository.findAll());
        model.addAttribute(new Task());

        if(errors.hasErrors()){
            return "index";
        }
        else {
            taskRepository.save(newTask);
            return "redirect:/";
        }
}


    @GetMapping("/add")
    public String displayCreateTaskForm (Model model){

        model.addAttribute("title", "Add Task");

        model.addAttribute("tasks", taskRepository.findAll());// Display all listed tasks
        model.addAttribute(new Task());
        return "add";
    }

    @PostMapping("/add")
    public String processCreateTaskForm (@ModelAttribute @Valid Task newTask, Errors errors, Model model  ){

        model.addAttribute("tasks", taskRepository.findAll());// Display all listed tasks
        if(errors.hasErrors()){
            return "add";
        }
        else {
            taskRepository.save(newTask);
            model.addAttribute("tasks", taskRepository.findAll());// Display all listed tasks
            return "redirect:/";
          //  return "tasks-list";
        }
    }

    @GetMapping("edit/{id}")
    public String showUpdateForm(@PathVariable List<Integer> taskIds, Model model) {
        List<Task> optTask = (List<Task>) taskRepository.findAll();
//        .orElseThrow(() - > new IllegalArgumentException("Invalid Task Id:" + taskId));
        model.addAttribute("task", optTask);
        return "update";
    }




    @GetMapping("/delete")
    public String renderDeleteTaskForm(Model model) {
        model.addAttribute("jobs", taskRepository.findAll());
        return "delete";
    }

    @PostMapping("/delete")
    public String processDeleteTaskForm(@RequestParam(required = false) int[] jobId) {
        for (int id : jobId) {
            taskRepository.deleteById(id);
        }
        return "redirect:/";
    }




    @GetMapping("view/{taskId}")// Individual task display
    public String displayViewTask(Model model, @PathVariable int taskId) {
        // @RequestParam(required = false)
        // if (taskId !=null) {

        Optional<Task> optionalTask = taskRepository.findById(taskId);
        if (optionalTask.isPresent()) {
            Task task = (Task) optionalTask.get();
            model.addAttribute("task", task);//pass task Object as a  value

            //       }

            return "tasks/view";

        } else {

            return "redirect:../";

        }
    }


}
