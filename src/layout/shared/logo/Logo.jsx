import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../../assets/Companylogo/dfc.png";

const LinkStyled = styled(Link)(() => ({
  height: "63px",
  width: "180px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const LargeLinkStyled = styled(Link)(() => ({
  height: "63px",
  width: "63px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Logo = ({ isCollapsed }) => {
  return (
    <>
      {!isCollapsed ? (
        <LinkStyled to="/home">
          {/* <img src={logo} alt="logo" className="h-16" priority /> */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-blue-500 text-transparent bg-clip-text text-center my-5">
            Logistics
          </h1>
        </LinkStyled>
      ) : (
        <LargeLinkStyled to="/home">
          {/* <img src={logo} alt="logo" className="h-[2rem]" priority /> */}
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-700 to-blue-500 text-transparent bg-clip-text text-center my-5">
            L
          </h1>
        </LargeLinkStyled>
      )}
    </>
  );
};

export default Logo;
