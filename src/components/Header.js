import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from "react-redux";
import { logout } from "../feature/userSlice";
import { auth } from "../firebase";


function Header() {
	const dispatch = useDispatch();
	const signOut = ()=>{
		auth.signOut().then(()=>{
			dispatch(logout());
		})
	}
	return (
		<div className="header">
			<div className="hearer_left">
				<IconButton>
					<MenuIcon />
				</IconButton>
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt=""/>
			</div>
			<div className="header_mid">
        <SearchIcon/>
        <input placeholder="Search Mail" type="text"/>
        <ArrowDropDownIcon className="header_inputCaret"/>
      </div>
			<div className="header_right">
      <IconButton>
					<AppsIcon />
				</IconButton>
        <IconButton>
					<NotificationsIcon />
				</IconButton>
        <Avatar onClick={signOut} />
      </div>
		</div>
	);
}

export default Header;
