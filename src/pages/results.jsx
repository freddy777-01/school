import { FaTrash } from "react-icons/fa6";
import NavBar from "../components/navbar"
export default function Result() {
	return (
		<div className="h-screen flex place-items-center flex-col">
			<NavBar/>
			<div className="mt-5">Students Results</div>
			<div className="mt-5"></div>
			<div className="shadow-md  mt-5 p-2">
				<table className="rounded-tl-md">
					<thead className="bg-slate-200">
						<th className="px-2">Name</th>
						<th className="px-2">Subject</th>
						<th className="px-2">Grade</th>
						<th className="px-2">Mark</th>
						<th className="px-2">Action</th>
					</thead>
					<tbody className="">
						<tr className="">
							<td className="p-2">Edward Silver</td>
							<td className="p-2">Physics</td>
							<td className="p-2">A</td>
							<td className="p-2">50%</td>
							<td className="p-2">
								<button className="text-white bg-amber-600 px-3 py-1 rounded-md hover:bg-red-600">
									<FaTrash />
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
