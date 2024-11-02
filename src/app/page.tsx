import { auth, signIn, signOut } from "auth";
import Image from "next/image";
import { Clock } from "./_components/ui/clock";
import "src/styles/globals.css";
import "src/styles/fonts.css";

export default async function Home() {
	const session = await auth();

	return (
		<main>
			{!session ? (
				<form
					action={async () => {
						"use server";
						await signIn("google");
					}}
				>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button>Sign in with Google</button>
				</form>
			) : (
				<>
					<Image
						alt="ユーザーアイコン"
						src={session.user?.image ?? ""}
						width={24}
						height={24}
					/>

					<form
						action={async () => {
							"use server";
							await signOut();
						}}
						className="w-full"
					>
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button>Sign Out</button>
					</form>
				</>
			)}

			<Clock />
		</main>
	);
}
