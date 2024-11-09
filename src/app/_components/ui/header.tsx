import { signIn, signOut } from "auth";
import type { Session } from "next-auth";
import Image from "next/image";
import { headerRightArea, headerStyle, headerTitle } from "./header.css";
import { useCallback, useMemo } from "react";
import { useAvatar } from "~/app/hooks/useAvatar";
import { SignInWithGoogle } from "../icon/signInWithGoogle";

type Props = {
	session: Session | null;
};

export const Header = ({ session }: Props): JSX.Element => {
	const { displayAvatarSrc } = useAvatar();
	const handleSignIn = useCallback(async () => {
		"use server";
		await signIn("google");
	}, []);

	const handleSignOut = useCallback(async () => {
		"use server";
		await signOut();
	}, []);

	const isSignedIn = useMemo(() => !!session && !!session.user, [session]);

	return (
		<header className={headerStyle}>
			<h1 className={headerTitle}>Clock And Timer</h1>
			<div className={headerRightArea}>
				<Image
					alt="ユーザーアイコン"
					src={displayAvatarSrc(session?.user?.image)}
					width={48}
					height={48}
				/>
				<form action={isSignedIn ? handleSignOut : handleSignIn}>
					<button type="submit">
						{isSignedIn ? "サインアウト" : <SignInWithGoogle height={24} />}
					</button>
				</form>
			</div>
		</header>
	);
};
