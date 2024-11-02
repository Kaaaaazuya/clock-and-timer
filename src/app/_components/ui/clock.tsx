"use client";

import { useCurrentTime } from "~/app/hooks/useCurrentTime";
import { clock } from "./clock.css";

export const Clock = () => {
	const currentTime = useCurrentTime();
	if (!currentTime) {
		return null;
	}

	return <div className={clock}>{currentTime.toLocaleTimeString()}</div>;
};
