import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { useParams } from "react-router-dom";
import { User } from "../models";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Switch,
} from "@mui/material";
import { Dialog, DialogContent } from "@mui/material";
import UserUpdateForm from "../ui-components/UserUpdateForm";
import UserCreateForm2 from "../components/UserCreateForm2";

function Users() {
  const [users, setUsers] = useState([]);
  const { companyId } = useParams();
  const [editingUser, setEditingUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const companyUsers = await DataStore.query(User, (u) =>
        u.companyID.eq(companyId)
      );
      setUsers(companyUsers);
    };

    fetchUsers();
    const subscription = DataStore.observe(User).subscribe(() => fetchUsers());
    return () => subscription.unsubscribe();
  }, [companyId]);

  async function toggleAdminStatus(user) {
    const newUser = User.copyOf(user, (updated) => {
      updated.isAdmin = !user.isAdmin;
    });
    await DataStore.save(newUser);
  }

  async function toggleIsActive(user) {
    const newUser = User.copyOf(user, (updated) => {
      updated.isActive = !user.isActive;
    });
    await DataStore.save(newUser);
  }

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenCreateDialog(true)}
        style={{ marginBottom: "20px" }}
      >
        Add User
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Company ID</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Admin</TableCell>

              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.companyID}</TableCell>
                <TableCell>
                  <Switch
                    checked={user.isActive}
                    onChange={() => toggleIsActive(user)}
                  />
                </TableCell>
                <TableCell>
                  <Switch
                    checked={user.isAdmin}
                    onChange={() => toggleAdminStatus(user)}
                  />
                </TableCell>

                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      setEditingUser(user);
                      setOpenDialog(true);
                    }}
                  >
                    Edit
                  </Button>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogContent>
          <UserUpdateForm user={editingUser} />
        </DialogContent>
      </Dialog>
      <Dialog
        open={openCreateDialog}
        onClose={() => setOpenCreateDialog(false)}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogContent>
          <UserCreateForm2 initialCompanyId={companyId} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Users;
