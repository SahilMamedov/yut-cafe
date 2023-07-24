import { CategoryGetDto } from "@/services/category/types";
import { SideBarContent, List, StyledLink } from "./styled";
import { FC } from "react";
import Link from "next/link";
import { Links } from "@/constant";

interface Props {
  categories: CategoryGetDto[];
}
export const SideBar: FC<Props> = ({ categories }) => {
  return (
    <SideBarContent>
      <List>
        {categories?.map((item) => (
          <StyledLink href={`${Links.MENU}/${item.id}?page=1`} key={item.id}>
            {item.title}
          </StyledLink>
        ))}
      </List>
    </SideBarContent>
  );
};
