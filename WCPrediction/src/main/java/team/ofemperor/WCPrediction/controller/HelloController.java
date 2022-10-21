package team.ofemperor.WCPrediction.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {
    @GetMapping("/hello")
    public String hello(){
        return "vue/index";
    }
}
