package team.ofemperor.WCPrediction.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.ofemperor.WCPrediction.dao.TestDAO;
import team.ofemperor.WCPrediction.dto.TestDTO;

import java.util.List;

@RestController
@RequestMapping("/about")
public class TestController {
    @Autowired
    private TestDAO testDAO;

    @GetMapping("/test")
    public List<TestDTO> getTestData() {
        return testDAO.getTestData();
    }
}
