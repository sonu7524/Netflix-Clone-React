import React, {useState} from "react";
import logo from "./../../../assets/logo.png";
import "./styles.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import profileImage from "./../../../assets/Netflix-avatar.png";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
function Header(){

    const [expanded, setExpanded] = useState(false);
    let [isOptionsClicked, setIsOptionsClicked] = useState(false);
    let [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll=null);
    }

  const toggleSearch = () => {
    setExpanded(!expanded);
  };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="left-menus">
                <img className="logo" src={logo} />
                <div className="desktop-menus">
                    <p>Home</p>
                    <p>TV shows</p>
                    <p>Movies</p>
                    <p>New & Popular</p>
                    <p>My List</p>
                    <p>Browse By Languages</p>
                </div>
            </div>
            <div className="right-menus">
                <div className={`search-bar ${expanded ? 'expanded' : ''}`}>
                    {expanded && (
                        <input
                        className="search_input"
                        type="text"
                        placeholder="Search..."
                        autoFocus
                        onBlur={toggleSearch}
                        />
                    )}
                    <a className="search_button" onClick={toggleSearch}><SearchRoundedIcon /></a>
                    
                </div>
                <NotificationsRoundedIcon />
                <div className="profile">
                    <img className="profile-image" src={profileImage} />
                    <a onClick={()=> setIsOptionsClicked(!isOptionsClicked)}><ArrowDropDownRoundedIcon className="options-icon" /></a>
                    {isOptionsClicked && (
                        <div className="options">
                            <span>Settings</span>
                            <span>Account</span>
                            <span>Sign out</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;