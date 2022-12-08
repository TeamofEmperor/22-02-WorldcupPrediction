package team.ofemperor.WCPrediction.dao;

import team.ofemperor.WCPrediction.dto.PlayerDTO;
import team.ofemperor.WCPrediction.dto.ManagerDTO;

import java.util.List;

public interface QatarDAO {
    List<PlayerDTO> getPlayerData();
    List<ManagerDTO> getManagerData();
}
