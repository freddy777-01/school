import { useState } from "react";
import { Form } from "react-router-dom";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import spring from "../../assets/spring.png"
export default function Register() {
	const [next, setNext] = useState(false);
	return (
		<div className="h-screen flex place-items-center justify-center">
			<div className="relative mx-auto rounded-md shadow-md bg-amber-200 flex place-items-center">
				<img src={spring} alt="metalic-image" className="w-full top-0" />

				<div className="left-40 absolute">
					{next ? (
						<div className="">
							<div className="my-2">
								<input
									className="p-1 rounded-sm border-0 border-amber-400 focus:border-amber-600"
									type="password"
									name="name"
									id=""
									placeholder="Password"
								/>
							</div>
							<div className="my-2">
								<input
									className="p-1 rounded-sm border-0 border-amber-400 focus:border-amber-600"
									type="password"
									name="name"
									id=""
									placeholder="repeat password"
								/>
							</div>
							<div className="flex justify-end my-5">
								<button
									onClick={() => setNext(true)}
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
										<input
											className="p-1 rounded-sm border-0 border-amber-400 focus:border-amber-600"
											type="text"
											name="name"
											id=""
											placeholder="First name"
										/>
									</div>
									<div className="my-2">
										<input
											className="p-1 rounded-sm border-0 border-amber-400 focus:border-amber-600"
											type="text"
											name="name"
											id=""
											placeholder="Middle Name"
										/>
									</div>
									<div className="my-2">
										<input
											className="p-1 rounded-sm border-0 border-amber-400 focus:border-amber-600"
											type="text"
											name="name"
											id=""
											placeholder="Last Name"
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
