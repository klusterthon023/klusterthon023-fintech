import { Button, Typography } from "../../design-system";

function Header() {
  const LINKS = [
    {
      id: 1,
      label: "Home",
    },
    {
      id: 2,
      label: "Features",
    },
    {
      id: 3,
      label: "Pricing",
    },
    {
      id: 4,
      label: "Contact",
    },
  ];
  return (
    <div className="px-16 py-5 bg-white flex justify-between shadow">
      <div className="bg-black p-3 h-[40px] flex justify-center items-center text-white rounded-lg">
        LOGO
      </div>
      <div className="flex items-center gap-6">
        {LINKS.map(({ id, label }) => (
          <Typography className="!cursor-pointer" color={"tertiary"} key={id}>
            {label}
          </Typography>
        ))}
      </div>
      <Button size="large" color="tertiary">
        Sign Up
      </Button>
    </div>
  );
}

export default Header;
