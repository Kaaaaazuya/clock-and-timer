import type { Metadata } from "next";

import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
	title: "Clock And Timer",
	description: "This application displays a clock and timer",
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}
