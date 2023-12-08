import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for routing
import { RouteNames } from "../../../routers/interface";
import { Typography } from "../../../design-system";

interface LinkProps {
  name: string;
  path: string;
}

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  const LINKS: LinkProps[] = [
    {
      name: "Terms & conditions",
      path: RouteNames.DASHBOARD,
    },
    {
      name: "Privacy Policy",
      path: RouteNames.DASHBOARD,
    },
    {
      name: "Help",
      path: RouteNames.DASHBOARD,
    },
  ];

  return (
    <footer className="bg-white text-sm w-full py-5 gap-4 lg:gap-0 px-10 flex items-center md:justify-between flex-col-reverse lg:flex-row">
      <div className="text-gray-300 w-full text-center lg:text-left">
        Copyright ©{year}. All rights reserved
      </div>
      <div className="flex justify-between lg:justify-end w-full">
        {LINKS.map((link: LinkProps, index) => (
          <Link key={index} to={link.path} className="lg:mx-2">
            <Typography color="primary" className="!text-sm">
              {link.name}
            </Typography>
          </Link>
        ))}
      </div>
    </footer>
  );
}
