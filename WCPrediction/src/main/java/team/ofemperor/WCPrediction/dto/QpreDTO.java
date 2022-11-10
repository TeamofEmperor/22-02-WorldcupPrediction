package team.ofemperor.WCPrediction.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class QpreDTO {
    String Group;
    String Home;
    String Away;
    int Date;
    float Home_Winrate;
    float Away_Win_rate;
}