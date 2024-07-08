import { DynamicContent } from "./DynamicContent";
import { HeavyDynamicContent } from "./HeavyDynamicContent";
import { Navbar } from "./Navbar";

type BodyProps = {
	currentComponent: string | null;
	handleNavigate: (component: string) => void;
};

export const DynamicBody = ({
	currentComponent,
	handleNavigate
}: BodyProps) => {
	return (
		<body>
			<Navbar onNavigate={handleNavigate} />
			<DynamicContent currentComponent={currentComponent} />
			{/* <HeavyDynamicContent currentComponent={currentComponent} /> */}
		</body>
	);
};
