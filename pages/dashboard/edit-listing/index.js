
import Link from "next/link";
import Image from "next/image";

import ImageAddModal from "../../../components/Modal/ImageAddModal";

import React, { useState,useEffect,useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { Formik } from "formik";
import * as yup from "yup";

import useCities from "../../../utils/Hooks/useCities";
import useFacilites from "../../../utils/Hooks/useFacilities";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import { useMutation } from "react-query";
import listingApi from "../../../utils/Api/listing.api";
import { useAuthToken } from "../../../contexts/authContext";

import Loading from "../../../components/Shared/Loading";

// import React, {  useState } from "react";
import MaterialReactTable from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

// import { data, states } from "./makeData";
import {data,states} from '../../../components/AdminDashBoard/makeData'
import useUsers from "../../../utils/Hooks/useUsers";

//modal
import AvaillabilityModal from "../../../components/Modal/AvailabiltyModal";

//example of creating a mui dialog modal for creating new rows
// export const Availlability = ({ open, columns, onClose, onSubmit }) => {
//   const [values, setValues] = useState(() =>
//     columns.reduce((acc, column) => {
//       acc[column.accessorKey ?? ""] = "";
//       return acc;
//     }, {})
//   );

//   const handleSubmit = () => {
//     //put your validation logic here
//     onSubmit(values);
//     onClose();
//   };

//   return (
//     <Dialog open={open}>
//       <DialogTitle textAlign="center">Availability</DialogTitle>
//       <DialogContent>
//         <form onSubmit={(e) => e.preventDefault()}>
//           <Stack
//             sx={{
//               width: "100%",
//               minWidth: { xs: "300px", sm: "360px", md: "400px" },
//               gap: "1.5rem",
//             }}
//           >
//             {columns.map((column) => (
//               <TextField
//                 key={column.accessorKey}
//                 label={column.header}
//                 name={column.accessorKey}
//                 onChange={(e) =>
//                   setValues({ ...values, [e.target.name]: e.target.value })
//                 }
//               />
//             ))}
//           </Stack>
//         </form>
//       </DialogContent>
//       <DialogActions sx={{ p: "1.25rem" }}>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button color="secondary" onClick={handleSubmit} variant="contained">
//           Create New Account
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
const validateAge = (age) => age >= 18 && age <= 50;

const AddListing = () => {
  const [displayIM, toggleIM] = useState(false);
  
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name} className='drop-gallery-thumb'>
      <img src={file.preview} />
    </div>
  ));

  useEffect(() => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  //Material table
  const { users } = useUsers();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data);
  const [validationErrors, setValidationErrors] = useState({});

  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        !confirm(`Are you sure you want to delete ${row.getValue("firstName")}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === "email"
              ? validateEmail(event.target.value)
              : cell.column.id === "age"
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors]
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "availablity",
        header: "Availablity",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      
      {
        accessorKey: "occupancies",
        header: "Occupancies",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: "email",
        }),
      },
      {
        accessorKey: "address",
        header: "Address",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: "email",
        }),
      },

    ],[getCommonEditTextFieldProps]
  );

  return (
    <>
      <DashboardNavbar />

      <div className='main-content d-flex flex-column'>

        <div className='breadcrumb-area'>
          <h1>Edit Listing</h1>
        </div>

        {/* Basic details */}

        <div className="add-listings-box">
          <h3>Basic Details</h3>

          <div className="row">

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>
                  <i className="bx bx-menu-alt-left"></i> Name
                </label>
                <input
                  readOnly
                  type="text"
                  value={"Xyz"}
                  name="location.state"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>
                  <i className="bx bx-menu-alt-left"></i>Location
                </label>
                <input
                  readOnly
                  type="text"
                  value={"Kolkata"}
                  name="location.state"
                  className="form-control"
                />
              </div>
            </div>

          </div>
        </div>

        {/* list of listings */}
        <div className="add-listings-box">
          <h3>lists</h3>

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Availability</th>
                <th scope="col">occupancy</th>
                <th scope="col">Edit </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td><button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button></td>
              </tr>
            </tbody>
          </table>

          <div className='add-listings-btn sub-btn'>
            <button type='submit'>Availability</button>
          </div>

        </div>
        
        {/*list of listing*/}
        <div className="add-listings-box">
          <MaterialReactTable
            displayColumnDefOptions={{
              "mrt-row-actions": {
                muiTableHeadCellProps: {
                  align: "center",
                },
                size: 120,
              },
            }}
            columns={columns}
            data={users}
            editingMode="modal" //default
            enableColumnOrdering
            enableEditing
            onEditingRowSave={handleSaveRowEdits}
            onEditingRowCancel={handleCancelRowEdits}
            renderRowActions={({ row, table }) => (
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Tooltip arrow placement="left" title="Edit">
                  <IconButton onClick={() => table.setEditingRow(row)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement="right" title="Delete">
                  <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                    <Delete />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
            renderTopToolbarCustomActions={() => (
              <Button
                color="secondary"
                onClick={() => setCreateModalOpen(true)}
                variant="contained"
              >
                AvailAbility
              </Button>
            )}
          />
          <AvaillabilityModal
            columns={columns}
            open={createModalOpen}
            onClose={() => setCreateModalOpen(false)}
            onSubmit={handleCreateNewRow}
          />
        </div>

        {/* image show section */}
        <div className="add-listings-box">
          
          <h3>images</h3>
          
          <div className="gallery-flex">

              <div  className='drop-gallery-thumb'>
                <div className="close">X</div>
                <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="noimg" />
            </div>

            <div  className='drop-gallery-thumb'>
                <div className="close">X</div>
                <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="noimg" />
            </div>

          </div>

          <div className='add-listings-btn sub-btn'>
            <button type='submit' onClick={()=>{toggleIM(!displayIM)}}>Add Images</button>
          </div>
        </div>

        <div className='add-listings-btn'>
          <button type='submit'>Update Listings</button>
        </div>

        <div className='flex-grow-1'></div>

      </div>

{/*..........................Image MODAL................................................. */}
      <ImageAddModal displayIM={displayIM} toggleIM={toggleIM} />
    </>
  );
};

export default AddListing;
