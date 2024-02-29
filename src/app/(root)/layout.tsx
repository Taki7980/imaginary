import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import dynamic from "next/dynamic";
import React from "react";
// const MobileNav = dynamic(() => import('../../components/shared/MobileNav'), { ssr: false })

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="root">

			<Sidebar/>
			<MobileNav/>
			<div className="root-container">
				<div className="wrapper">{children}</div>
			</div>
			
		</main>
	);
};

export default layout;
