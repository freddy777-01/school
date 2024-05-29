import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../api/request";
import Input from "../components/input";
export default function Student() {
	const data = useParams();
	const [firstName, setFirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [regNo, setRegNo] = useState("");
	const [gender, setGender] = useState("");
	// console.log(data);
	useEffect(() => {
		getRequest(`/students/student/${data.studentId}`).then((res) => {
			console.log(res.data);
			setFirstName(res.data.firstName);
			setlastName(res.data.lastName);
			setRegNo(res.data.regNumber);
		});
	});
    let updateStudent =()=>{
        null;
    }
	return (
		<div className="h-screen flex flex-col place-items-center">
			<div>
				<div className="grid grid-cols-3 gap-2 mt-5">
					<div className="w-full">
						<Input
							placeholder="First name"
							callback={(d) => setFirstName(d)}
							value={firstName}
						/>
					</div>
					<div className="w-full">
						<Input
							placeholder="Last name"
							callback={(d) => setlastName(d)}
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
							<option value="male" defaultValue={gender}>
								Male
							</option>
							<option value="female">Female</option>
						</select>
					</div>
				</div>
				<div className="flex justify-end my-2">
					<button
						className="bg-amber-600 rounded-md p-1 hover:bg-amber-800 text-white cursor-pointer"
						onClick={() => updateStudent()}
					>
						Update
					</button>
				</div>
			</div>
		</div>
	);
}
