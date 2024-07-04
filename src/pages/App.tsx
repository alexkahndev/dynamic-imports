import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { DynamicContent } from "../components/DynamicContent";
import { HeavyDynamicContent } from "../components/HeavyDynamicContent";

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
			<body>
				<Navbar onNavigate={handleNavigate} />
				<DynamicContent currentComponent={currentComponent} />
				{/* <HeavyDynamicContent currentComponent={currentComponent} /> */}
			</body>
		</html>
	);
};
