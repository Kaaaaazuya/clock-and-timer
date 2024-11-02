"use client";

import { useEffect, useState } from "react";

export const useCurrentTime = () => {
	// server 側と一致しないため、初期値は null とする
	const [currentTime, setCurrentTime] = useState<Date | null>(null);

	useEffect(() => {
		setCurrentTime(new Date());

		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	return currentTime;
};
