import { useNavigate } from "react-router-dom";
import { Button, Typography } from "../../design-system";
import { RouteNames } from "../../routers/interface";
import { useAppContext } from "../../contexts";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

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

  const { currentSection, updateCurrentSection } = useAppContext();
  return (
    <div className="px-16 max-md:px-8 items-center py-5 bg-white flex justify-between shadow">
      <div className="bg-black p-3 h-12 flex justify-center items-center text-white rounded-lg">
        LOGO
      </div>
      <div className="flex items-center gap-6 max-md:hidden">
        {LINKS.map(({ id, label }) => (
          <div
            key={id}
            onClick={() => {
              navigate(RouteNames.HOME, {
                state: { path: label },
              });
              updateCurrentSection(label);
            }}
          >
            <Typography
              className="!cursor-pointer"
              color={currentSection === label ? "tertiary" : "gray.300"}
            >
              {label}
            </Typography>
          </div>
        ))}
      </div>
      <div className="max-md:hidden">
        <Button
          onClick={() => navigate(RouteNames.REGISTER)}
          size="large"
          color="tertiary"
        >
          Sign Up
        </Button>
      </div>
      {!isMenuOpen && (
        <div className="md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            fontSize={32}
            onClick={toggleMenu}
            className="text-neutral-900 cursor-pointer"
          />
        </div>
      )}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-color-black bg-opacity-50 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                toggleMenu();
              }
            }}
          >
            <motion.div
              className="absolute top-0 right-0 h-full bg-color-white px-4 pt-12 w-72"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex justify-end">
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={toggleMenu}
                  fontSize={32}
                  className="text-color-black cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-2  mt-8">
                {LINKS.map(({ id, label }) => (
                  <div
                    key={id}
                    onClick={() => {
                      navigate(RouteNames.HOME, {
                        state: { path: label },
                      });
                      updateCurrentSection(label);
                      toggleMenu();
                    }}
                  >
                    <Typography
                      className="!cursor-pointer"
                      color={currentSection === label ? "tertiary" : "gray.300"}
                    >
                      {label}
                    </Typography>
                  </div>
                ))}
                <div className="flex justify-center mt-5">
                  <Button
                    onClick={() => navigate(RouteNames.REGISTER)}
                    size="large"
                    color="tertiary"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
