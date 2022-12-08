package team.ofemperor.WCPrediction.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.ofemperor.WCPrediction.dao.QpreDAO;
import team.ofemperor.WCPrediction.dto.CountryDTO;
import team.ofemperor.WCPrediction.dto.GameDTO;
import team.ofemperor.WCPrediction.dto.PredictionDTO;

import java.util.List;

@RestController
@RequestMapping("/qatar/qpre")
public class QpreController {
    @Autowired
    private QpreDAO qpreDAO;

    @GetMapping("/game")
    public List<GameDTO> getGameData() {
        return qpreDAO.getGameData();
    }
    @GetMapping("/prediction")
    public List<PredictionDTO> getPredictionData() {
        return qpreDAO.getPredictionData();
    }
    @GetMapping("/country")
    public List<CountryDTO> getCountryData() {
        return qpreDAO.getCountryData();
    }
}
