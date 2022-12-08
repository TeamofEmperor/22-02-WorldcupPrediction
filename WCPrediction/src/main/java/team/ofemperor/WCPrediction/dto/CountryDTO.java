package team.ofemperor.WCPrediction.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class CountryDTO {
    int CID;
    String CountryCode;
    String Name;
    String Country_img;
    String group;
    int Rank;
    String Manager;
    int Win;
    double XG;
    double XGA;
    double Clean_seat;
    double avg_goal;
    double Avg_agn_goal;
    String Continent;
}
