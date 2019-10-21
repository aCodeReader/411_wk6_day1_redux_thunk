import React, { useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";

const Import = props => {
  const [option, setOption] = useState(0);
  // fill out this component
  const options = ["baby", "monkey", "Banana-na-na"];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event, i) => {
    console.log("click click");
    setOption(i);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = option => {
    props.deleteMake(option);
    setAnchorEl(null);
  };

  return (
    <div class="wrapper">
      <p>Import Component</p>
      <h4>{props.makes.length}</h4>
      <Button variant="contained" onClick={props.fetchMakes}>
        Import
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make, idx) => (
            <TableRow key={make.id}>
              <TableCell component="th" scope="row">
                {make.MakeId}
              </TableCell>
              <TableCell>{make["MakeName"]}</TableCell>
              <TableCell></TableCell>
              <TableCell>
                <MoreVert onClick={e => handleClick(e, idx)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {options.map(option => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
        <MenuItem onClick={() => handleDelete(option)}>
          {/* <DeleteIcon className="icon text-red" /> */}
          <p style={{ color: "red" }}>Delete</p>
          {/* <p>{option}</p> */}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Import;
