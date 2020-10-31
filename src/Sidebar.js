import React from 'react';
import "./sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SidebarChannel2 from "./SidebarChannel2";
import SidebarChannel3 from "./SidebarChannel3";
import SidebarChannel4 from "./SidebarChannel4";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from 'react-redux';
import { selectUser } from "./features/counter/userSlice";
function Sidebar() {
    const user = useSelector(selectUser);
    
    return (
        <div className="sidebar" >
                <div className="sidebar__top">
                <h3>GEEKBUDDY</h3>
                
                
            <ExpandMoreIcon />
        </div>
        <div className="sidebar__channels">
            <div className="sidebar__channelHeader">
                <div classsName="sidebar__header">
                <ExpandMoreIcon />
                <h4>Text Channels</h4>
                </div>
                <AddIcon className="sidebar__addChannel" />
            </div>
            <div className="sidebar__channelslist">
            <SidebarChannel />
            <SidebarChannel2 />
            <SidebarChannel3 />
            <SidebarChannel4 />
        </div>
        
        </div>
        <div className="sidebar__voice">
            <SignalCellularAltIcon
            className="sidebar__voiceIcon"
            fontSize="large"
            />
            <div className="sidebar__voiceInfo">
                <h3 >Voice Connected</h3>
                <p>Stream</p>
            </div>
            <div className="sidebar__voiceIcons">
                <InfoOutlinedIcon />
                <CallIcon />
            </div>
        </div>

<div className="sidebar__profile">
    <Avatar />
    <div className="sidebar__profileInfo">
        <h3>@sssuhaaassss</h3>
        <p>#thisIsMyID</p>
    </div>
        <div className="sidebar__profileIcons">
            <MicIcon />
            <HeadsetIcon />
            <SettingsIcon />
        </div>
    </div>
</div>   
    );
}

export default Sidebar;
