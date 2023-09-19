import { useState } from "react";

export default function useHello() {
	const [name, setName] = useState("hello");

	return {
		name,
		setName,
	};
}