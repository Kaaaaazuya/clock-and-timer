import { style } from "@vanilla-extract/css";

export const headerStyle = style({
	width: "100%",
});

export const headerTitle = style({
	textAlign: "center",
});

export const headerRightArea = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: 8,
});
