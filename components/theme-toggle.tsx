"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { SunMoon } from "lucide";
import { SunMoonIcon } from "lucide-react";

const ThemeToggle = () => {
  return (
    <>
      <Button size="sm" variant="ghost">
      <SunMoonIcon  className="size-4 text-sky-950"/>
      </Button>
    </>
  );
};

export default ThemeToggle;
