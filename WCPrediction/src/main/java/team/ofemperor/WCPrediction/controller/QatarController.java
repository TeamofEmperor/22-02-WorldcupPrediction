package team.ofemperor.WCPrediction.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.ofemperor.WCPrediction.dao.QatarDAO;
import team.ofemperor.WCPrediction.dto.QatarDTO;

import java.util.List;

@RestController
@RequestMapping("/qatar")
public class QatarController {
    @Autowired
    private QatarDAO qatarDAO;

    @GetMapping("/player")
    public List<QatarDTO> getPlayerData(){
        return qatarDAO.getPlayerData();
    }
}