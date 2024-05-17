export default function Dashboard() {
	return (
		<div className="h-screen flex place-items-center">
			<div id="buttons" className="border w-1/2 flex justify-center m-auto">
				<a
					href="/students"
					className="mx-3 bg-amber-800 rounded-md p-2 text-white hover:bg-amber-600"
				>
					Student
				</a>
				<a
					href="http://"
					className="mx-3 bg-amber-800 rounded-md p-2 text-white hover:bg-amber-600"
				>
					Resutls
				</a>
				<a
					href="http://"
					className="mx-3 bg-amber-800 rounded-md p-2 text-white hover:bg-amber-600"
				>
					Subjects
				</a>
			</div>
		</div>
	);
}
