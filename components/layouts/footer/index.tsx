import { Grid } from "@mui/material";
import { CostomMap } from "./maps";
import {
  FooterTitle,
  Container,
  SocialBox,
  SosialItem,
  CafeAboutText,
  Copyright,
} from "./styled";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
const Footer = () => {
  return (
    <Container>
      <Grid p={2} container spacing={2}>
        <Grid item xl={6} xs={12} md={6} sm={12}>
          <CostomMap />
        </Grid>
        <Grid item xl={6} md={6} sm={12}>
          <Grid spacing={2} container>
            <Grid item xs={12} sm={6}>
              <SocialBox>
                <FooterTitle>Контакты</FooterTitle>
                <SosialItem>Tel: +7 (985) 177-47-10</SosialItem>
                <Link href="https://www.instagram.com/">
                  <SosialItem>
                    <InstagramIcon />
                  </SosialItem>
                </Link>
              </SocialBox>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FooterTitle>О Ресторан Уют</FooterTitle>
              <CafeAboutText>
                Ресторан Уют - идеальное место, где сочетается атмосфера уюта и
                разнообразие кухонь Кавказа и Европы. У нас вы найдете
                аутентичные кавказские блюда, такие как шашлык, хачапури и плов,
                приготовленные из свежих и качественных ингредиентов. Мы также
                предлагаем изысканные европейские блюда, включая классические
                пасты, пиццу, мясные и рыбные блюда. Наша команда опытных
                поваров готовит каждое блюдо с любовью и мастерством, используя
                сезонные ингредиенты. Уютная атмосфера с традиционными
                элементами интерьера создает ощущение тепла и гостеприимства.
                Наша дружелюбная команда сделает все возможное, чтобы ваше
                посещение стало незабываемым и приятным.
              </CafeAboutText>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Copyright>
        © Copyright Уют 2023. All Right Reserved. Designed and Developed by
        Sahil
      </Copyright>
    </Container>
  );
};
export default Footer;
