import React, { lazy, Suspense, useEffect, useState } from "react";

type DynamicContentProps = {
	currentComponent: string | null;
};

const Temp1 = lazy(() => import("./content/Temp1"));
const Temp2 = lazy(() => import("./content/Temp2"));
const Temp3 = lazy(() => import("./content/Temp3"));

const components: { [key: string]: React.LazyExoticComponent<any> } = {
	Temp1,
	Temp2,
	Temp3
};

export const DynamicContent = ({ currentComponent }: DynamicContentProps) => {
	const PlaceHolderComponent = () => <div>Select a component</div>;
	const Component =
		components[currentComponent || ""] || PlaceHolderComponent;

	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				<Component />
			</Suspense>
		</main>
	);
};
