"use client";

import { ReactNode } from "react";
import {
  AppShell as MantineAppShell,
  AppShellProps,
  Burger,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface AppShellComponentProps extends Omit<AppShellProps, "children"> {
  children: ReactNode;
  headerContent?: ReactNode;
  navbarContent?: ReactNode;
}

function AppShell({
  children,
  headerContent,
  navbarContent,
  ...props
}: AppShellComponentProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineAppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      {...props}
    >
      <MantineAppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          aria-label="Toggle navigation"
        />
        {headerContent}
      </MantineAppShell.Header>

      <MantineAppShell.Navbar p="md">{navbarContent}</MantineAppShell.Navbar>

      <MantineAppShell.Main>{children}</MantineAppShell.Main>
    </MantineAppShell>
  );
}

export { AppShell };
