import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "../feature/mailSlice";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import firebase from "firebase";

function SendMail() {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (formData) => {
		console.log(formData);
		db.collection("emails").add({
			to: formData.to,
			subject: formData.subject,
			message: formData.message,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		})
		dispatch(closeSendMessage());
	};
	return (
		<div className="sendmail">
			<div className="sendmail_header">
				<h3>New Message</h3>
				<CloseIcon onClick={()=>dispatch(closeSendMessage())} className="sendmail_close"/>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					name="to"
					type="email"
					placeholder="To"
					{...register("to", { required: true })}
				/>
				{errors.to && (
					<span className="sendmail_error">This field is required</span>
				)}
				<input
					name="subject"
					type="text"
					placeholder="Subject"
					{...register("subject", { required: true })}
				/>
				{errors.subject && (
					<span className="sendmail_error">This field is required</span>
				)}
				<input
					name="message"
					type="text"
					placeholder="Message..."
					className="sendmail_message"
					{...register("message", { required: true })}
				/>
				{errors.message && (
					<span className="sendmail_error">This field is required</span>
				)}
				<div className="sendmail_options">
					<Button className="sendmail_send" type="submit" variant="contained">
						Send
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SendMail;
