import { useState } from "react";
import { Form } from "react-router-dom";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import spring from "../../assets/spring.png";
import Input from "../../components/input";
import { createRequest } from "../../api/request";
export default function Register() {
	const [next, setNext] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSamePassword, setComparision] = useState(false);
	let isPasswordSame = (p) =>
		password === p ? setComparision(true) : setComparision(false);

	let data = {
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: isSamePassword ? password : "",
	};
	let signup = () => {
		// console.log(data);
		createRequest("/user/create",data).then(response=>console.log(response.data)).catch(error=>console.log(error.message))
	};
	return (
		<div className="h-screen flex place-items-center justify-center">
			<div className="relative mx-auto rounded-md shadow-md bg-amber-200 flex place-items-center">
				<img src={spring} alt="metalic-image" className="w-full top-0" />

				<div className="left-40 absolute">
					{next ? (
						<div className="">
							<div className="my-2">
								<Input
									className="p-1 rounded-sm border-0 border-amber-400 focus:border-amber-600"
									type="password"
									placeholder="Password"
									callback={(d) => setPassword(d)}
									value={password}
								/>
							</div>
							<div className="my-2">
								<Input
									placeholder="repeat password"
									type="password"
									callback={isPasswordSame}
								/>
							</div>
							<div className="my-2 text-red-500 font-bold">
								{/* {isSamePassword?"":"password do not match!"} */}
								{password != ""
									? isSamePassword
										? ""
										: "password do not match!"
									: ""}
							</div>
							<div className="flex justify-end my-5">
								<button
									onClick={signup}
									type="button"
									className="bg-amber-600 rounded-md p-1 hover:bg-amber-800 text-white w-full"
								>
									Signup
								</button>
							</div>
							<div className="flex justify-start">
								<button
									onClick={() => setNext(false)}
									type="button"
									className="bg-amber-600 rounded-md p-1 hover:bg-amber-800 text-white"
								>
									<IoChevronBackOutline className="inline-block" />
									Back
								</button>
							</div>
						</div>
					) : (
						<div id="registerForm">
							<Form method="POST" action="login">
								<div className="grid grid-cols-1 gap-y-5 justify-center place-items-center">
									<div className="my-2">
										<Input
											placeholder="First name"
											callback={(d) => setFirstName(d)}
											value={firstName}
										/>
									</div>

									<div className="my-2">
										<Input
											placeholder="Last name"
											name="last_name"
											callback={(n) => setLastName(n)}
											value={lastName}
										/>
									</div>
									<div className="my-2">
										<Input
											placeholder="Email"
											name="email"
											type="email"
											callback={(e) => setEmail(e)}
											value={email}
										/>
									</div>
								</div>
							</Form>
							<div className="flex justify-end">
								<button
									onClick={() => setNext(true)}
									type="button"
									className="bg-amber-600 rounded-md p-1 hover:bg-amber-800 text-white"
								>
									Next <IoChevronForwardOutline className="inline-block" />
								</button>
							</div>
							<div className="w-full flex justify-start mt-5">
								<a
									href="/login"
									className="text-white hover:text-amber-800 text-sm shadow-lg shadow-amber-400"
								>
									Signin Instead
								</a>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
