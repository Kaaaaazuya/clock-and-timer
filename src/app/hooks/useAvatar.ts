import type { StaticImageData } from "next/image";
import avatar1 from "/public/avatar/avatar1.png";
import avatar2 from "/public/avatar/avatar2.png";
import avatar3 from "/public/avatar/avatar3.png";

const avatars = [avatar1, avatar2, avatar3];

export const useAvatar = () => {
	const displayAvatarSrc = (
		src: string | undefined | null,
	): string | StaticImageData => {
		if (src) {
			return src;
		}

		// src がない場合はランダムなアバターを選択して返す
		const randomIndex = Math.floor(Math.random() * avatars.length);
		return avatars[randomIndex] || avatar1;
	};

	return { displayAvatarSrc };
};
