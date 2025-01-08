import { Box, Button, Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import React from "react";
import { useState } from "react";

export const ItemDescription = () => {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);

  const [textType, setTextType] = useState("アイテム説明");

  const handleClick1 = () => {
    setToggle(!toggle);
    setToggle2(false);
    setToggle3(false);
    setTextType("アイテム説明");
  };

  const handleClick2 = () => {
    setToggle2(!toggle2);
    setToggle(false);
    setToggle3(false);
    setTextType("サイズ");
  };

  const handleClick3 = () => {
    setToggle3(!toggle3);
    setToggle(false);
    setToggle2(false);
    setTextType("レビュー");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Box sx={{ display: "flex", gap: 1, width: "400px" }}>
        <ToggleButton
          text="アイテム説明"
          btnBoolean={toggle}
          onClick={handleClick1}
        ></ToggleButton>
        <ToggleButton
          text="サイズ"
          btnBoolean={toggle2}
          onClick={handleClick2}
        ></ToggleButton>
        <ToggleButton
          text="レビュー"
          btnBoolean={toggle3}
          onClick={handleClick3}
        ></ToggleButton>
      </Box>
      <ItemDescriptionTextArea textType={textType}></ItemDescriptionTextArea>
    </Box>
  );
};

type ToggleButtonProps = {
  text: string;
  btnBoolean?: boolean;
  onClick?: () => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  return (
    <Button
      style={{
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
        backgroundColor: props.btnBoolean ? "#ffffff" : "#efefef",
        color: "black",
        fontWeight: "bold",
        border: `1px solid ${props.btnBoolean ? "ffffff" : "#efefef"}`,
        borderBottom: "none",
        width: "130px",
        height: "60px",
        fontSize: "15px",
      }}
      onClick={props.onClick}
      disableRipple
    >
      {props.text}
    </Button>
  );
};

type ItemDescriptionTextAreaProps = {
  textType: string;
};

const ItemDescriptionTextArea: React.FC<ItemDescriptionTextAreaProps> = (
  props
) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: "400px",
        padding: "10px",
        backgroundColor: "#ffffff",
        borderTop: "none",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "13px",
        }}
      >
        {props.textType === "アイテム説明" ? "アイテム説明" : ""}
        {props.textType === "サイズ" ? (
          <ItemDescriptionTable></ItemDescriptionTable>
        ) : (
          ""
        )}
        {props.textType === "レビュー" ? "レビュー" : ""}
      </Typography>
    </Box>
  );
};

const ItemDescriptionTable = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "400px",
      }}
    >
      <TableContainer component="div">
        <Table
          sx={{ minWidth: "400px", borderCollapse: "collapse" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  width: "90px",
                  fontSize: "12px",
                  borderRight: "1px solid #e0e0e0",
                  whiteSpace: "nowrap",
                }}
              >
                サイズ
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  width: "60px",
                  fontSize: "12px",
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                身幅
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  width: "60px",
                  fontSize: "12px",
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                肩幅
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  width: "60px",
                  fontSize: "12px",
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                総丈
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  width: "60px",
                  fontSize: "12px",
                  borderRight: "1px solid #e0e0e0",
                  whiteSpace: "nowrap",
                }}
              >
                そで丈
              </TableCell>
              <TableCell
                align="center"
                sx={{ width: "60px", fontSize: "12px", whiteSpace: "nowrap" }}
              >
                すそ周り
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                align="center"
                sx={{
                  width: "90px",
                  fontSize: "12px",
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                S
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  width: "60px",
                  fontSize: "12px",
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                50cm
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  width: "60px",
                  fontSize: "12px",
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                40cm
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  width: "60px",
                  fontSize: "12px",
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                70cm
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  width: "60px",
                  fontSize: "12px",
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                60cm
              </TableCell>
              <TableCell
                align="center"
                sx={{ width: "60px", fontSize: "12px" }}
              >
                55cm
              </TableCell>
            </TableRow>
            {/* 他の行も追加可能 */}
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
