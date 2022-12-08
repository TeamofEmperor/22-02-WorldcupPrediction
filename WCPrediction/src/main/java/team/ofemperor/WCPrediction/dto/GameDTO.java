package team.ofemperor.WCPrediction.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class GameDTO {
    int MatchNumber;
    String RoundNumber;
    String Date;
    String Location;
    String HomeTeam;
    String AwayTeam;
    String Group;
    String Result;
}