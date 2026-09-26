type NavItem = { href: string; label: string; emphasis?: boolean };

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/for-businesses", label: "For Businesses", emphasis: true },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];
