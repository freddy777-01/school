import { Form } from "react-router-dom";
export default function Login() {
	return (
		<div className="h-screen flex place-items-center">
			<div className="p-2 mx-auto border">
				<Form method="POST" action="login">
					<div className="flex flex-col justify-center border place-items-center">
						<div className="my-2">
							<input
								className="p-1 rounded-sm border-2 border-amber-400 hover:border-amber-600"
								type="text"
								name="name"
								id=""
								placeholder="Email/Username"
							/>
						</div>
						<div className="my-2">
							<input
								className="p-1 rounded-sm border-2 border-amber-400 hover:border-amber-600"
								type="password"
								name="name"
								id=""
								placeholder="Password"
							/>
						</div>
						<div className="w-full">
							<button
								type="submit"
								className="bg-amber-600 rounded-md p-1 hover:bg-amber-800 text-white w-full"
							>
								Signin
							</button>
						</div>
					</div>
				</Form>
			</div>
		</div>
	);
}
