import { lazy, LazyExoticComponent, Suspense } from "react";

type DynamicContentProps = {
	currentComponent: string | null;
};

const components: { [key: string]: LazyExoticComponent<() => JSX.Element> } = {
	Temp1: lazy(() =>
		import("./content/Temp1").then((module) => ({ default: module.Temp1 }))
	),
	Temp2: lazy(() =>
		import("./content/Temp2").then((module) => ({ default: module.Temp2 }))
	),
	Temp3: lazy(() =>
		import("./content/Temp3").then((module) => ({ default: module.Temp3 }))
	)
};
export const DynamicContent = ({ currentComponent }: DynamicContentProps) => {
	const MainComponent = currentComponent
		? components[currentComponent]
		: () => <div>Select a component</div>;

	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				<MainComponent />
			</Suspense>
		</main>
	);
};
