import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IProduct } from "@/types";
import { FC } from "react";
import Image from "next/image";
import {
  DetailContent,
  DetailName,
  DetailPrice,
  DetailDesc,
  DetailWrapper,
  DetalKkalAndGramm,
  DetailCloseBtn,
  ImgBox,
  DetailOldPrice,
  LoadingBox,
} from "./styled";
import { BeatLoader } from "react-spinners";
interface Props {
  product?: IProduct;
  openDetailModal: boolean;
  setOpenDetailModal: (value: boolean) => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "14px",
};

export const DetailModal: FC<Props> = ({
  product,
  openDetailModal,
  setOpenDetailModal,
}) => {

  return (
    <div>
      <Modal
        open={openDetailModal}
        onClose={() => setOpenDetailModal(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 500,
            height: 650,
          }}
        >
          {product == undefined ? (
            <LoadingBox>
              <BeatLoader color="#36d7b7" />
            </LoadingBox>
          ) : (
            <DetailWrapper>
              <DetailCloseBtn onClick={() => setOpenDetailModal(false)}>
                X
              </DetailCloseBtn>
              <ImgBox>
                <Image
                  alt=""
                  width={100}
                  height={400}
                  sizes="100%"
                  src={product?.img}
                />
              </ImgBox>
              <DetailContent>
                <DetailName>{product?.name}</DetailName>
                <div>
                  {product?.oldPrice ? (
                    <>
                      <DetailOldPrice>{product.oldPrice} ₽</DetailOldPrice>
                      <DetailPrice>{product.price} ₽</DetailPrice>
                    </>
                  ) : (
                    <DetailPrice>{product?.price} ₽</DetailPrice>
                  )}
                </div>
                <DetailDesc>{product?.description}</DetailDesc>
                <DetalKkalAndGramm>Gramm: ({product?.gramm})</DetalKkalAndGramm>
                <DetalKkalAndGramm>Kkal: ({product?.kkal})</DetalKkalAndGramm>
              </DetailContent>
            </DetailWrapper>
          )}
        </Box>
      </Modal>
    </div>
  );
};

{
}
