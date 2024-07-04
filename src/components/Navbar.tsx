// Navbar.tsx
import React from "react";

type NavbarProps = {
	onNavigate: (component: string) => void;
};

export const Navbar = ({ onNavigate }: NavbarProps) => {
	return (
		<nav>
			<button onClick={() => onNavigate("Temp1")}>Temp1</button>
			<button onClick={() => onNavigate("Temp2")}>Temp2</button>
		</nav>
	);
};
