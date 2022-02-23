import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(true);
  /* TODO: Write the necessary functions to open and close the sidebar */
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  const useOutsideAlerter = (ref, active) => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeSidebar();
      }
    };
    useEffect(() => {
      if (active) document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  };
  const sideBarRef = useRef(null);
  useOutsideAlerter(sideBarRef, isOpen);
  return (
    <SideNavBarCont className={isOpen ? "visible" : ""} ref={sideBarRef}>
      {/* TODO: Implement a hamburger icon that controls the open state of the sidebar. This control should only be visible on mobile devices via CSS media queries */}
      {/* The sidebar should slide in from left */}

      {!isOpen && <Toggle onClick={toggleSidebar}>&#9776;</Toggle>}

      {isOpen && <Close onClick={closeSidebar}>×</Close>}

      <SideNavHeader>
        Wesley
        <img src={Arrow} alt="Arrow pointing down" />
      </SideNavHeader>
      <SideNavMainLink to="/discover" exact>
        Discover
        <img src={SearchWhite} alt="Magnifying glass" />
      </SideNavMainLink>
      <SideNavSectionTitle>
        <HeaderText>Watched</HeaderText>
      </SideNavSectionTitle>
      <NavLink to="/watched/movies">Movies</NavLink>
      <NavLink to="/watched/tv-shows">TV Shows</NavLink>
      <SideNavSectionTitle>
        <HeaderText>Saved</HeaderText>
      </SideNavSectionTitle>
      <NavLink to="/saved/movies">Movies</NavLink>
      <NavLink to="/saved/tv-shows">TV Shows</NavLink>
    </SideNavBarCont>
  );
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 260px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  color: white;
  transition: 0.5s;

  @media screen and (max-width: 1000px) {
    position: absolute;
    width: 0px;

    div,
    a {
      display: none;
    }

    &.visible {
      position: fixed;
      width: 260px;

      div,
      a {
        display: flex;
      }
    }
  }
`;
const Toggle = styled.span`
  color: black;
  cursor: pointer;
  display: none;
  font-size: 30px;
  padding: 20px;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

const Close = styled.span`
  cursor: pointer;
  display: none;
  font-size: 36px;
  position: absolute;
  top: 0;
  right: 5px;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

const SectionsStyles = css`
  align-items: center;
  color: white;
  display: flex;
  font-size: 1.6em;
  font-weight: 700;
  justify-content: space-between;
  padding: 25px 35px;
  position: relative;
`;

const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`;

const SideNavHeader = styled.div`
  ${SectionsStyles}
  @media screen and (max-width: 1000px) {
    margin-top: 30px;
  }
`;

const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 0 15px 35px;
`;

const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.lightBackground};
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  opacity: 0.8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover,
  &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
    opacity: 1;
  }
`;
