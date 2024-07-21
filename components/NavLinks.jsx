import Link from "next/link";

const links = [
  { label: "chat", href: "/chat" },
  { label: "tours", href: "/tours" },
  { label: "new tour", href: "/tours/new-tour" },
  { label: "profile", href: "/profile" },
];

const NavLinks = () => {
  return (
    <ul className="menu text-base-content">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="capitalize">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
