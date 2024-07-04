import { lazy, LazyExoticComponent, Suspense } from "react";

type DynamicContentProps = {
	currentComponent: string | null;
};

const components: { [key: string]: LazyExoticComponent<() => JSX.Element> } = {
	Temp1: lazy(() =>
		import("./content/Temp1").then((module) => ({ default: module.Temp1 }))
	)
};
export const DynamicContent = ({ currentComponent }: DynamicContentProps) => {
	const MainComponent = currentComponent
		? components[currentComponent]
		: null;
	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				{MainComponent ? <MainComponent /> : null}
			</Suspense>
		</main>
	);
};
