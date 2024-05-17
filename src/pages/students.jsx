import { useState } from "react";
import Input from "../components/input";
import { FaExclamation } from "react-icons/fa";
export default function Students() {
	const [firstName, setFirstName] = useState('');
	const [middleName, setMiddleName] = useState('');
	const [lastName, setlastName] = useState('');
    
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
	};
	return (
		<div className="h-screen flex flex-col justify-center place-items-center">
			<span>{firstName}</span>
			<span>{middleName}</span>
			<span>{lastName}</span>
			<div>
				<div className="grid grid-cols-3 gap-x-2">
					<div className="w-full">
						<Input
							placeholder="First name"
							callback={formController.firstName}
						/>
					</div>
					<div className="w-full">
						<Input
							placeholder="Middle name"
							callback={formController.middleName}
						/>
					</div>
					<div className="w-full">
						<Input placeholder="Last name" callback={formController.lastName}/>
					</div>
				</div>
				<div className="flex justify-end my-2">
					<Input type="button" value="Create" className="cursor-pointer" />
				</div>
			</div>
			<div className="mt-5">
				<div className="border text-center w-96">
					<FaExclamation className="mx-auto border rounded-full p-1 text-4xl" />
					list of students
				</div>
			</div>
		</div>
	);
}
