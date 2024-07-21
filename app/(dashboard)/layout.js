import { FaBarsStaggered } from "react-icons/fa6";
import Sidebar from "@/components/Sidebar";
const layout = ({ children }) => {
	return (
		<div className="drawer lg:drawer-open">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content here */}
				<label htmlFor="my-drawer-2" className="drawer-button fixed right-6 top-6 lg:hidden">
					<FaBarsStaggered className="text-primary h-8 w-8" />
				</label>
				<div className="bg-base-200 min-h-screen px-8 py-12">{children}</div>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
				<Sidebar />
			</div>
		</div>
	);
};
export default layout;
