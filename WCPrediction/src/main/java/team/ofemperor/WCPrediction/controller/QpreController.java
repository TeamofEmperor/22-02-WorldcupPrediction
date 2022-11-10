package team.ofemperor.WCPrediction.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.ofemperor.WCPrediction.dao.QpreDAO;
import team.ofemperor.WCPrediction.dto.QpreDTO;

import java.util.List;

@RestController
@RequestMapping("/qatar/qpre")
public class QpreController {
    @Autowired
    private QpreDAO qpreDAO;

    @GetMapping("/schedule")
    public List<QpreDTO> getScheduleData() {
        return qpreDAO.getScheduleData();
    }
}
