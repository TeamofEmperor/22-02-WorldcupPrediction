package team.ofemperor.WCPrediction.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class PlayerDTO {
    long CID;
    String CountryCode;
    int Back_No;
    String Position;
    String name;
    String Player_img;
    String birth;
    int games;
    int goals;
    String club;
}