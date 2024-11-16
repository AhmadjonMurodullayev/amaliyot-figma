import React from "react";
import {  useSelector } from "react-redux";
import { SaveProdact } from "../../components/save-prodact";
import { nanoid } from "@reduxjs/toolkit";
import { Container } from "@mui/material";


export const SaveProdactss = () => {
  const { product_list } = useSelector((state) => state.product);
  console.log(product_list);
  
  return (
    <>
      <Container maxWidth="xl">
        {product_list?.map((item) => {
          return <SaveProdact key={nanoid()} {...item} />;
        })}
      </Container>
    </>
  );
};
