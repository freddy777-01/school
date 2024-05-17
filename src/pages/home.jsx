
export default function Home() {
	return (
		<div className="h-screen flex place-items-center flex-col">
			<div className="mt-auto flex flex-col align-middle ">
				<div className="text-center great-vibes-regular text-8xl">
					Welcome !
				</div>
				<div className="text-center text-4xl poetsen-one-regular">
					School EMS Simulation using
				</div>
				<div className="text-center text-3xl poetsen-one-regular">
					Java <span className="text-green-400">Spring</span>Boot
				</div>
			</div>
			<div id="buttons" className=" w-1/2 flex justify-center m-auto">
				<a
					href="/login"
					className="mx-3 bg-amber-800 rounded-md p-2 text-white hover:bg-amber-600"
				>
					Login
				</a>
				<a
					href="/register"
					className="mx-3 bg-amber-800 rounded-md p-2 text-white hover:bg-amber-600"
				>
					Register
				</a>
				<a
					href="/dashboard"
					className="mx-3 bg-amber-800 rounded-md p-2 text-white hover:bg-amber-600"
				>
					Dashboard
				</a>
			</div>
		</div>
	);
}
