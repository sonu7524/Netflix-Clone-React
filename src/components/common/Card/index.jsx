import React from "react";
import showImg from "./../../../assets/sex-education.jpg";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import "./styles.css";

function ShowCard(){
    return (
        <div className="show-card">
            <img src={showImg} />
            <div className="card-details">
                <div className="card-icons">
                    <PlayCircleFilledWhiteIcon />
                    <AddRoundedIcon />
                    <ThumbUpOffAltOutlinedIcon />
                </div>
                <KeyboardArrowDownOutlinedIcon />
            </div>
        </div>
    )
}

export default ShowCard;