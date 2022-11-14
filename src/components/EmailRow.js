import React from "react";
import "./EmailRow.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedMail } from "../feature/mailSlice";

export default function EmailRow({ id, title, subject, description, time }) {
	const history = useNavigate();
	const dispatch = useDispatch();
	const openMail = () => {
		dispatch(
			selectedMail({
				id,
				title,
				subject,
				description,
				time,
			})
		);
		history("mail");
	};
	return (
		<div onClick={openMail} className="emailRow">
			<div className="emailRow_options">
				<IconButton>
					<CheckBoxOutlineBlankIcon />{" "}
				</IconButton>
				<IconButton>
					<StarBorderOutlinedIcon />
				</IconButton>
				<IconButton>
					<LabelImportantOutlinedIcon />
				</IconButton>
			</div>
			<div className="emailRow_title">
				<h3>{title}</h3>
			</div>
			<div className="emailRow_message">
				<h4>
					{subject}
					<span className="emailRow_desc"> - {description}</span>
				</h4>
			</div>
			<div className="emailRow_time">{time}</div>
		</div>
	);
}
