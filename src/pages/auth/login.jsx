import { Form } from "react-router-dom";
import spring from "../../assets/spring.png";
export default function Login() {
	return (
		<div className="h-screen flex place-items-center">
			<div className="relative mx-auto rounded-md shadow-md bg-amber-200 flex place-items-center">
				<img
					src={spring}
					alt="metalic-image"
					className="w-full top-0"
				/>
				<Form method="POST" action="login" className="absolute left-40">
					<div className="grid grid-cols-1 gap-y-5 justify-center place-items-center bg-transparent">
						<div className="my-2">
							<input
								className="p-1 rounded-sm border-0 border-amber-400 focus:border-amber-600"
								type="text"
								name="name"
								id=""
								placeholder="Email/Username"
							/>
						</div>
						<div className="my-2">
							<input
								className="p-1 rounded-sm border-0 border-amber-400 hover:border-amber-600 focus:border-amber-600"
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
						<div className="w-full flex justify-start">
							<a
								href="/register"
								className="text-white hover:text-amber-800 text-sm shadow-lg shadow-amber-400"
							>
								Signup Instead
							</a>
						</div>
					</div>
				</Form>
			</div>
		</div>
	);
}
