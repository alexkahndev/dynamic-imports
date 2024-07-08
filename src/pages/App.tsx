import { useState } from "react";
import { DynamicBody } from "../components/DynamicBody";

export const App = () => {
	const [currentComponent, setCurrentComponent] = useState<string | null>(
		null
	);

	const handleNavigate = (component: string) => {
		setCurrentComponent(component);
	};

	return (
		<html>
			<head>
				<title>Dynamic Module Loading</title>
			</head>
			<DynamicBody
				currentComponent={currentComponent}
				handleNavigate={handleNavigate}
			/>
		</html>
	);
};
