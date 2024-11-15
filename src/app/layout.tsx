import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { lightTheme, darkTheme } from "~/styles/vars.css";
import "./layout.css";
import { ThemeProvider } from "./lib/themeProvider";

export const metadata: Metadata = {
	title: "Clock And Timer",
	description: "This application displays a clock and timer",
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="ja">
			<body>
				<ThemeProvider
					attribute="class"
					value={{
						light: lightTheme,
						dark: darkTheme,
					}}
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
