/* eslint-disable react/prop-types */
/* eslint-disable-next-line react/prop-types */
export default function Input({
	type = "text",
	placeholder = "",
	value,
    name,
	callback,
}) {
	let getValue = (event) => {
		callback(event.target.value);
	};
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
            name={name}
			className={
				type == "button"
					? "bg-amber-600 rounded-md p-1 hover:bg-amber-800 text-white cursor-pointer"
					: "p-1 rounded-sm border-0 border-amber-400 focus:border-amber-600"
			}
			onChange={getValue}
		/>
	);
}
