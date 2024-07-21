import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";

const SidebarHeader = () => {
  return (
    <div className="mb-4 flex items-center gap-4 px-4">
      <SiOpenaigym className="h-10 w-10 text-primary" />
      <h2 className="mr-auto text-xl font-extrabold text-primary">GPTGenius</h2>
      <ThemeToggle />
    </div>
  );
};

export default SidebarHeader;
