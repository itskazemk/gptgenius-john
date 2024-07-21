import MemberProfile from "./MemberProfile";
import NavLinks from "./NavLinks";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
	return (
		<div className="bg-base-300 grid min-h-full w-80 grid-rows-[auto,1fr,auto] px-4 py-12">
			{/* first row */}
			<SidebarHeader />
			{/* second row */}
			<NavLinks />
			{/* third row */}
			<MemberProfile />
		</div>
	);
};

export default Sidebar;
