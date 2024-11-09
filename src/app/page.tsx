import { auth, signIn, signOut } from "auth";
import { Clock } from "./_components/ui/clock";
import "src/styles/globals.css";
import "src/styles/fonts.css";
import "src/styles/reset.css";
import { Header } from "./_components/ui/header";

export default async function Home() {
	const session = await auth();

	return (
		<>
			<Header session={session} />
			<main>
				<Clock />
			</main>
		</>
	);
}
