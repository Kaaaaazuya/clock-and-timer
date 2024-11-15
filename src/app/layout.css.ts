import { globalStyle } from "@vanilla-extract/css";
import { vars } from "~/styles/vars.css";

globalStyle("body", {
	background: vars.colors.background,
	color: vars.colors.text,
	padding: 0,
	margin: 0,
	height: "100vh",
	width: "100%",
	display: "flex",
	flexDirection: "column",
});

globalStyle("main", {
	height: "100%",
});

globalStyle("a", {
	color: "inherit",
	textDecoration: "none",
});

globalStyle("button", {
	padding: 0,
	border: "none",
	outline: "none",
	cursor: "pointer",
	background: "none",
	color: "inherit",
});
