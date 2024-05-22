import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
    const navigate = useNavigate();

	return (
		<div className="flex justify-between w-1/2 p-2">
			<div className="great-vibes-regular text-2xl">Hello</div>
			<div className="">
				<a
					href="/home"
					className="mx-1 p-1 rounded-md hover:text-white hover:bg-amber-600"
				>
					Home
				</a>
				<a
					href="/dashboard"
					className="mx-1 p-1 rounded-md hover:text-white hover:bg-amber-600"
				>
					Dashboard
				</a>
				<a
					href="#"
					className="mx-1 p-1 rounded-md hover:text-white hover:bg-amber-600"
					onClick={() => navigate(-1)}
				>
					<IoChevronBackOutline className="inline-block" />
					Back
				</a>
			</div>
		</div>
	);
}
