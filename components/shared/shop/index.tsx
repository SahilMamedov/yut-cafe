import Container from "@mui/material/Container";
import Image from "next/image";
import { Flex } from "../flex";
import { SideBar } from "@/components/menuComponents/sideBar";
import { CategoryGetDto } from "@/services/category/types";
import { FC, ReactNode } from "react";
import { Content, Wrapper } from "./styled";
interface Props {
  categories: CategoryGetDto[];
  renderContent: ReactNode;
}

export const Shop: FC<Props> = ({ categories, renderContent }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "450px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image fill alt="" src="/assets/image/menu.jpg" />
      </div>
      <Wrapper>
        <Container maxWidth="xl">
          <Flex>
            <SideBar categories={categories} />
            <Content>{renderContent}</Content>
          </Flex>
        </Container>
      </Wrapper>
    </>
  );
};
