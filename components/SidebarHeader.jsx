import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";

const SidebarHeader = () => {
  return (
    <div className="mb-4 flex items-center gap-4 px-4">
      <SiOpenaigym className="text-primary h-10 w-10" />
      <h2 className="text-primary text-xl font-extrabold">GPTGenius</h2>
      <ThemeToggle />
    </div>
  );
};

export default SidebarHeader;
