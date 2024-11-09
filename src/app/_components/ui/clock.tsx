"use client";

import { useCurrentTime } from "~/app/hooks/useCurrentTime";
import { clock, clockWrapper } from "./clock.css";

export const Clock = () => {
	const currentTime = useCurrentTime();
	if (!currentTime) {
		return null;
	}

	return (
		<div className={clockWrapper}>
			<p className={clock}>
				{currentTime.toLocaleTimeString("ja", {
					hour12: false,
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
				})}
			</p>
		</div>
	);
};
