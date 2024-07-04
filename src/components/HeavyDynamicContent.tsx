import { Temp1 } from "./content/Temp1";
import { Temp2 } from "./content/Temp2";
import { Temp3 } from "./content/Temp3";

type HeavyDynamicContentProps = {
	currentComponent: string | null;
};


export const HeavyDynamicContent = ({currentComponent}: HeavyDynamicContentProps) => {
    return (
        <main>
            {currentComponent === null && <div>Select a component</div>}
            {currentComponent === "Temp1" && <Temp1 />}
            {currentComponent === "Temp2" && <Temp2 />}
            {currentComponent === "Temp3" && <Temp3 />}
        </main>
    )

}