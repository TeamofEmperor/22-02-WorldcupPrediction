package team.ofemperor.WCPrediction.dao;

import team.ofemperor.WCPrediction.dto.CountryDTO;
import team.ofemperor.WCPrediction.dto.GameDTO;
import team.ofemperor.WCPrediction.dto.PredictionDTO;

import java.util.List;

public interface QpreDAO {
    List<GameDTO> getGameData();
    List<PredictionDTO> getPredictionData();
    List<CountryDTO> getCountryData();
}
