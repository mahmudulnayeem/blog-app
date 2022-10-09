import { Container } from "@mantine/core";
import { ReactNode } from "react";
import { HeaderResponsive } from "./Header";
type layOutType = {
  children?: ReactNode;
};
const Layout = ({ children }: layOutType) => {
  return (
    <Container size="md" px="md">
      <HeaderResponsive
        links={[
          {
            link: "/blogs",
            label: "Blog",
          },
          {
            link: "/tags",
            label: "Tags",
          },

          {
            link: "/about",
            label: "About",
          },
        ]}
      />
      {children}
    </Container>
  );
};

export default Layout;
