import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Company } from "../models";
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
import CompanyUpdateForm from "../ui-components/CompanyUpdateForm";
import CompanyCreateForm from "../ui-components/CompanyCreateForm";
import { useNavigate } from "react-router-dom";

function Companies() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [editingCompany, setEditingCompany] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);

  useEffect(() => {
    fetchCompanies();
    const subscription = DataStore.observe(Company).subscribe(() =>
      fetchCompanies()
    );
    return () => subscription.unsubscribe();
  }, []);

  async function fetchCompanies() {
    const companies = await DataStore.query(Company);
    setCompanies(companies);
  }


  async function toggleIsActive(company) {
    const newCompany = Company.copyOf(company, (updated) => {
      updated.isActive = !company.isActive;
    });
    await DataStore.save(newCompany);
  }

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Companies
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenCreateDialog(true)}
        style={{ marginBottom: "20px" }}
      >
        Add Company
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Is Active</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((company) => (
              <TableRow key={company.id}>
                <TableCell>{company.id}</TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.email}</TableCell>
                <TableCell>
                  <Switch
                    checked={company.isActive}
                    onChange={() => toggleIsActive(company)}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      setEditingCompany(company);
                      setOpenDialog(true);
                    }}
                  >
                    Edit
                  </Button>
                 {/* <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => deleteCompany(company.id)}
                  >
                    Delete
                  </Button>*/}
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate(`/users/${company.id}`)}
                  >
                    View Users
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
          <CompanyUpdateForm company={editingCompany} />
        </DialogContent>
      </Dialog>
      <Dialog
        open={openCreateDialog}
        onClose={() => setOpenCreateDialog(false)}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogContent>
          <CompanyCreateForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Companies;
