import { useState, useEffect } from "react";
import Input from "../components/input";
// import { FaExclamation } from "react-icons/fa";
import NavBar from "../components/navbar";
import { createRequest, getRequest } from "../api/request";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFaceSadCry } from "react-icons/fa6";
export default function Students() {
	const [firstName, setFirstName] = useState("");
	const [middleName, setMiddleName] = useState("");
	const [lastName, setlastName] = useState("");
	const [regNo, setRegNo] = useState("");
	const [gender, setGender] = useState("");
	const [students, setStudents] = useState("");
	// console.log(students);
	let formController = {
		firstName: function (d) {
			setFirstName(d);
		},
		middleName: function (d) {
			setMiddleName(d);
		},
		lastName: function (d) {
			setlastName(d);
		},
		gender: function (e) {
			console.log(e.currentTarget.value);
		},
	};
	const getStudents = () =>
		getRequest("/students/all").then((response) => setStudents(response.data));

	useEffect(() => {
		getStudents();
	}, []);

	let data = {
		firstName: firstName,
		lastName: lastName,
		regNumber: regNo,
		gender: gender,
	};
	const toaster = (type, message, options) => {
		switch (type) {
			case "success":
				toast.success(message, options);
				break;
			case "error":
				toast.error(message, options);
				break;

			default:
				break;
		}
	};

	const createStudent = () => {
		createRequest("/students/create", data)
			.then((response) => {
				if (response.status == 201) {
					toaster("success", `Student ${response.data.firstName} was created`, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "colored",
						// transition: Bounce,
					});
				}
				getStudents();
			})
			.catch((error) => {
				console.log(error.message);
				toaster("error", error.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
					// transition: Bounce,
				});
			});
	};

	return (
		<div className="h-screen flex flex-col place-items-center">
			<NavBar />
			<ToastContainer />
			<span>{firstName}</span>
			<span>{middleName}</span>
			<span>{lastName}</span>
			<div>
				<div className="grid grid-cols-3 gap-2">
					<div className="w-full">
						<Input
							placeholder="First name"
							callback={formController.firstName}
							value={firstName}
						/>
					</div>
					<div className="w-full">
						<Input
							placeholder="Last name"
							callback={formController.lastName}
							value={lastName}
						/>
					</div>
					<div className="w-full">
						<Input
							placeholder="registration number"
							callback={(d) => setRegNo(d)}
							value={regNo}
						/>
					</div>
					<div className="w-full">
						<select
							name="gender"
							id=""
							className="p-1 rounded-sm border-0 bg-white focus:border-0"
							onChange={(e) => {
								setGender(e.currentTarget.value);
							}}
						>
							<option value="male" defaultValue={"male"}>
								Male
							</option>
							<option value="female">Female</option>
						</select>
					</div>
				</div>
				<div className="flex justify-end my-2">
					<button
						className="bg-amber-600 rounded-md p-1 hover:bg-amber-800 text-white cursor-pointer"
						onClick={() => createStudent()}
					>
						Create
					</button>
				</div>
			</div>
			<div className="mt-5">
				{students.length == 0 ? (
					<div className="border text-center w-96">
						<FaFaceSadCry className="mx-auto text-red-500 rounded-full p-1 text-4xl" />
						students are not there
					</div>
				) : (
					<div className="rounded-md shadow-md overflow-clip">
						<table className="">
							<thead className="bg-slate-400">
								<tr>
									<th className="p-2 border">No</th>
									<th className="p-2 border">First name</th>
									<th className="p-2 border">Last name</th>
									<th className="p-2 border">Gender</th>
									<th className="p-2 border">Registration Number</th>
									<th className="p-2 border">Action</th>
								</tr>
							</thead>
							<tbody>
								{students.map((student, index) => (
									<tr key={student.id} className="">
										<td className="p-2">{index + 1}</td>
										<td className="p-2">{student.firstName}</td>
										<td className="p-2">{student.lastName}</td>
										<td className="p-2">{student.gender}</td>
										<td className="p-2 text-center">{student.regNumber}</td>
										<td>
											<a href={"/student/"+student.id+"/edit"} className="mx-1 bg-amber-600 rounded-md p-1 hover:bg-amber-800 text-white cursor-pointer">
												Edit
											</a>
											<button className="mx-1 bg-amber-600 rounded-md p-1 hover:bg-amber-800 text-white cursor-pointer">
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
}
