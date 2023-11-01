/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Emision } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EmisionCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Company: "",
    ALCANCE: "",
    CATEGORIA: "",
    SUBCATEGORIA: "",
    ACTIVIDAD: "",
    COMBUSTIBLE: "",
    UNIDADFE: "",
    CANTIDAD: "",
    CO2: "",
    CH4: "",
    N2O: "",
    SF6: "",
    HFC: "",
    PFC: "",
    NF3: "",
    InicioPeriodo: "",
    TerminoPeriodo: "",
    INCERTIDUMBRE: "",
    ORIGENFE: "",
    companyID: "",
    userID: "",
  };
  const [Company, setCompany] = React.useState(initialValues.Company);
  const [ALCANCE, setALCANCE] = React.useState(initialValues.ALCANCE);
  const [CATEGORIA, setCATEGORIA] = React.useState(initialValues.CATEGORIA);
  const [SUBCATEGORIA, setSUBCATEGORIA] = React.useState(
    initialValues.SUBCATEGORIA
  );
  const [ACTIVIDAD, setACTIVIDAD] = React.useState(initialValues.ACTIVIDAD);
  const [COMBUSTIBLE, setCOMBUSTIBLE] = React.useState(
    initialValues.COMBUSTIBLE
  );
  const [UNIDADFE, setUNIDADFE] = React.useState(initialValues.UNIDADFE);
  const [CANTIDAD, setCANTIDAD] = React.useState(initialValues.CANTIDAD);
  const [CO2, setCO2] = React.useState(initialValues.CO2);
  const [CH4, setCH4] = React.useState(initialValues.CH4);
  const [N2O, setN2O] = React.useState(initialValues.N2O);
  const [SF6, setSF6] = React.useState(initialValues.SF6);
  const [HFC, setHFC] = React.useState(initialValues.HFC);
  const [PFC, setPFC] = React.useState(initialValues.PFC);
  const [NF3, setNF3] = React.useState(initialValues.NF3);
  const [InicioPeriodo, setInicioPeriodo] = React.useState(
    initialValues.InicioPeriodo
  );
  const [TerminoPeriodo, setTerminoPeriodo] = React.useState(
    initialValues.TerminoPeriodo
  );
  const [INCERTIDUMBRE, setINCERTIDUMBRE] = React.useState(
    initialValues.INCERTIDUMBRE
  );
  const [ORIGENFE, setORIGENFE] = React.useState(initialValues.ORIGENFE);
  const [companyID, setCompanyID] = React.useState(initialValues.companyID);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCompany(initialValues.Company);
    setALCANCE(initialValues.ALCANCE);
    setCATEGORIA(initialValues.CATEGORIA);
    setSUBCATEGORIA(initialValues.SUBCATEGORIA);
    setACTIVIDAD(initialValues.ACTIVIDAD);
    setCOMBUSTIBLE(initialValues.COMBUSTIBLE);
    setUNIDADFE(initialValues.UNIDADFE);
    setCANTIDAD(initialValues.CANTIDAD);
    setCO2(initialValues.CO2);
    setCH4(initialValues.CH4);
    setN2O(initialValues.N2O);
    setSF6(initialValues.SF6);
    setHFC(initialValues.HFC);
    setPFC(initialValues.PFC);
    setNF3(initialValues.NF3);
    setInicioPeriodo(initialValues.InicioPeriodo);
    setTerminoPeriodo(initialValues.TerminoPeriodo);
    setINCERTIDUMBRE(initialValues.INCERTIDUMBRE);
    setORIGENFE(initialValues.ORIGENFE);
    setCompanyID(initialValues.companyID);
    setUserID(initialValues.userID);
    setErrors({});
  };
  const validations = {
    Company: [{ type: "Required" }],
    ALCANCE: [{ type: "Required" }],
    CATEGORIA: [{ type: "Required" }],
    SUBCATEGORIA: [{ type: "Required" }],
    ACTIVIDAD: [{ type: "Required" }],
    COMBUSTIBLE: [{ type: "Required" }],
    UNIDADFE: [{ type: "Required" }],
    CANTIDAD: [{ type: "Required" }],
    CO2: [{ type: "Required" }],
    CH4: [{ type: "Required" }],
    N2O: [{ type: "Required" }],
    SF6: [{ type: "Required" }],
    HFC: [{ type: "Required" }],
    PFC: [{ type: "Required" }],
    NF3: [{ type: "Required" }],
    InicioPeriodo: [{ type: "Required" }],
    TerminoPeriodo: [{ type: "Required" }],
    INCERTIDUMBRE: [],
    ORIGENFE: [],
    companyID: [{ type: "Required" }],
    userID: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Company,
          ALCANCE,
          CATEGORIA,
          SUBCATEGORIA,
          ACTIVIDAD,
          COMBUSTIBLE,
          UNIDADFE,
          CANTIDAD,
          CO2,
          CH4,
          N2O,
          SF6,
          HFC,
          PFC,
          NF3,
          InicioPeriodo,
          TerminoPeriodo,
          INCERTIDUMBRE,
          ORIGENFE,
          companyID,
          userID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Emision(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EmisionCreateForm")}
      {...rest}
    >
      <TextField
        label="Company"
        isRequired={true}
        isReadOnly={false}
        value={Company}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company: value,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.Company ?? value;
          }
          if (errors.Company?.hasError) {
            runValidationTasks("Company", value);
          }
          setCompany(value);
        }}
        onBlur={() => runValidationTasks("Company", Company)}
        errorMessage={errors.Company?.errorMessage}
        hasError={errors.Company?.hasError}
        {...getOverrideProps(overrides, "Company")}
      ></TextField>
      <TextField
        label="Alcance"
        isRequired={true}
        isReadOnly={false}
        value={ALCANCE}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE: value,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.ALCANCE ?? value;
          }
          if (errors.ALCANCE?.hasError) {
            runValidationTasks("ALCANCE", value);
          }
          setALCANCE(value);
        }}
        onBlur={() => runValidationTasks("ALCANCE", ALCANCE)}
        errorMessage={errors.ALCANCE?.errorMessage}
        hasError={errors.ALCANCE?.hasError}
        {...getOverrideProps(overrides, "ALCANCE")}
      ></TextField>
      <TextField
        label="Categoria"
        isRequired={true}
        isReadOnly={false}
        value={CATEGORIA}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA: value,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.CATEGORIA ?? value;
          }
          if (errors.CATEGORIA?.hasError) {
            runValidationTasks("CATEGORIA", value);
          }
          setCATEGORIA(value);
        }}
        onBlur={() => runValidationTasks("CATEGORIA", CATEGORIA)}
        errorMessage={errors.CATEGORIA?.errorMessage}
        hasError={errors.CATEGORIA?.hasError}
        {...getOverrideProps(overrides, "CATEGORIA")}
      ></TextField>
      <TextField
        label="Subcategoria"
        isRequired={true}
        isReadOnly={false}
        value={SUBCATEGORIA}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA: value,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.SUBCATEGORIA ?? value;
          }
          if (errors.SUBCATEGORIA?.hasError) {
            runValidationTasks("SUBCATEGORIA", value);
          }
          setSUBCATEGORIA(value);
        }}
        onBlur={() => runValidationTasks("SUBCATEGORIA", SUBCATEGORIA)}
        errorMessage={errors.SUBCATEGORIA?.errorMessage}
        hasError={errors.SUBCATEGORIA?.hasError}
        {...getOverrideProps(overrides, "SUBCATEGORIA")}
      ></TextField>
      <TextField
        label="Actividad"
        isRequired={true}
        isReadOnly={false}
        value={ACTIVIDAD}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD: value,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.ACTIVIDAD ?? value;
          }
          if (errors.ACTIVIDAD?.hasError) {
            runValidationTasks("ACTIVIDAD", value);
          }
          setACTIVIDAD(value);
        }}
        onBlur={() => runValidationTasks("ACTIVIDAD", ACTIVIDAD)}
        errorMessage={errors.ACTIVIDAD?.errorMessage}
        hasError={errors.ACTIVIDAD?.hasError}
        {...getOverrideProps(overrides, "ACTIVIDAD")}
      ></TextField>
      <TextField
        label="Combustible"
        isRequired={true}
        isReadOnly={false}
        value={COMBUSTIBLE}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE: value,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.COMBUSTIBLE ?? value;
          }
          if (errors.COMBUSTIBLE?.hasError) {
            runValidationTasks("COMBUSTIBLE", value);
          }
          setCOMBUSTIBLE(value);
        }}
        onBlur={() => runValidationTasks("COMBUSTIBLE", COMBUSTIBLE)}
        errorMessage={errors.COMBUSTIBLE?.errorMessage}
        hasError={errors.COMBUSTIBLE?.hasError}
        {...getOverrideProps(overrides, "COMBUSTIBLE")}
      ></TextField>
      <TextField
        label="Unidadfe"
        isRequired={true}
        isReadOnly={false}
        value={UNIDADFE}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE: value,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.UNIDADFE ?? value;
          }
          if (errors.UNIDADFE?.hasError) {
            runValidationTasks("UNIDADFE", value);
          }
          setUNIDADFE(value);
        }}
        onBlur={() => runValidationTasks("UNIDADFE", UNIDADFE)}
        errorMessage={errors.UNIDADFE?.errorMessage}
        hasError={errors.UNIDADFE?.hasError}
        {...getOverrideProps(overrides, "UNIDADFE")}
      ></TextField>
      <TextField
        label="Cantidad"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={CANTIDAD}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD: value,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.CANTIDAD ?? value;
          }
          if (errors.CANTIDAD?.hasError) {
            runValidationTasks("CANTIDAD", value);
          }
          setCANTIDAD(value);
        }}
        onBlur={() => runValidationTasks("CANTIDAD", CANTIDAD)}
        errorMessage={errors.CANTIDAD?.errorMessage}
        hasError={errors.CANTIDAD?.hasError}
        {...getOverrideProps(overrides, "CANTIDAD")}
      ></TextField>
      <TextField
        label="Co2"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={CO2}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2: value,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.CO2 ?? value;
          }
          if (errors.CO2?.hasError) {
            runValidationTasks("CO2", value);
          }
          setCO2(value);
        }}
        onBlur={() => runValidationTasks("CO2", CO2)}
        errorMessage={errors.CO2?.errorMessage}
        hasError={errors.CO2?.hasError}
        {...getOverrideProps(overrides, "CO2")}
      ></TextField>
      <TextField
        label="Ch4"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={CH4}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4: value,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.CH4 ?? value;
          }
          if (errors.CH4?.hasError) {
            runValidationTasks("CH4", value);
          }
          setCH4(value);
        }}
        onBlur={() => runValidationTasks("CH4", CH4)}
        errorMessage={errors.CH4?.errorMessage}
        hasError={errors.CH4?.hasError}
        {...getOverrideProps(overrides, "CH4")}
      ></TextField>
      <TextField
        label="N2 o"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={N2O}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O: value,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.N2O ?? value;
          }
          if (errors.N2O?.hasError) {
            runValidationTasks("N2O", value);
          }
          setN2O(value);
        }}
        onBlur={() => runValidationTasks("N2O", N2O)}
        errorMessage={errors.N2O?.errorMessage}
        hasError={errors.N2O?.hasError}
        {...getOverrideProps(overrides, "N2O")}
      ></TextField>
      <TextField
        label="Sf6"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={SF6}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6: value,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.SF6 ?? value;
          }
          if (errors.SF6?.hasError) {
            runValidationTasks("SF6", value);
          }
          setSF6(value);
        }}
        onBlur={() => runValidationTasks("SF6", SF6)}
        errorMessage={errors.SF6?.errorMessage}
        hasError={errors.SF6?.hasError}
        {...getOverrideProps(overrides, "SF6")}
      ></TextField>
      <TextField
        label="Hfc"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={HFC}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC: value,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.HFC ?? value;
          }
          if (errors.HFC?.hasError) {
            runValidationTasks("HFC", value);
          }
          setHFC(value);
        }}
        onBlur={() => runValidationTasks("HFC", HFC)}
        errorMessage={errors.HFC?.errorMessage}
        hasError={errors.HFC?.hasError}
        {...getOverrideProps(overrides, "HFC")}
      ></TextField>
      <TextField
        label="Pfc"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={PFC}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC: value,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.PFC ?? value;
          }
          if (errors.PFC?.hasError) {
            runValidationTasks("PFC", value);
          }
          setPFC(value);
        }}
        onBlur={() => runValidationTasks("PFC", PFC)}
        errorMessage={errors.PFC?.errorMessage}
        hasError={errors.PFC?.hasError}
        {...getOverrideProps(overrides, "PFC")}
      ></TextField>
      <TextField
        label="Nf3"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={NF3}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3: value,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.NF3 ?? value;
          }
          if (errors.NF3?.hasError) {
            runValidationTasks("NF3", value);
          }
          setNF3(value);
        }}
        onBlur={() => runValidationTasks("NF3", NF3)}
        errorMessage={errors.NF3?.errorMessage}
        hasError={errors.NF3?.hasError}
        {...getOverrideProps(overrides, "NF3")}
      ></TextField>
      <TextField
        label="Inicio periodo"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={InicioPeriodo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo: value,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.InicioPeriodo ?? value;
          }
          if (errors.InicioPeriodo?.hasError) {
            runValidationTasks("InicioPeriodo", value);
          }
          setInicioPeriodo(value);
        }}
        onBlur={() => runValidationTasks("InicioPeriodo", InicioPeriodo)}
        errorMessage={errors.InicioPeriodo?.errorMessage}
        hasError={errors.InicioPeriodo?.hasError}
        {...getOverrideProps(overrides, "InicioPeriodo")}
      ></TextField>
      <TextField
        label="Termino periodo"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={TerminoPeriodo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo: value,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.TerminoPeriodo ?? value;
          }
          if (errors.TerminoPeriodo?.hasError) {
            runValidationTasks("TerminoPeriodo", value);
          }
          setTerminoPeriodo(value);
        }}
        onBlur={() => runValidationTasks("TerminoPeriodo", TerminoPeriodo)}
        errorMessage={errors.TerminoPeriodo?.errorMessage}
        hasError={errors.TerminoPeriodo?.hasError}
        {...getOverrideProps(overrides, "TerminoPeriodo")}
      ></TextField>
      <TextField
        label="Incertidumbre"
        isRequired={false}
        isReadOnly={false}
        value={INCERTIDUMBRE}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE: value,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.INCERTIDUMBRE ?? value;
          }
          if (errors.INCERTIDUMBRE?.hasError) {
            runValidationTasks("INCERTIDUMBRE", value);
          }
          setINCERTIDUMBRE(value);
        }}
        onBlur={() => runValidationTasks("INCERTIDUMBRE", INCERTIDUMBRE)}
        errorMessage={errors.INCERTIDUMBRE?.errorMessage}
        hasError={errors.INCERTIDUMBRE?.hasError}
        {...getOverrideProps(overrides, "INCERTIDUMBRE")}
      ></TextField>
      <TextField
        label="Origenfe"
        isRequired={false}
        isReadOnly={false}
        value={ORIGENFE}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE: value,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.ORIGENFE ?? value;
          }
          if (errors.ORIGENFE?.hasError) {
            runValidationTasks("ORIGENFE", value);
          }
          setORIGENFE(value);
        }}
        onBlur={() => runValidationTasks("ORIGENFE", ORIGENFE)}
        errorMessage={errors.ORIGENFE?.errorMessage}
        hasError={errors.ORIGENFE?.hasError}
        {...getOverrideProps(overrides, "ORIGENFE")}
      ></TextField>
      <TextField
        label="Company id"
        isRequired={true}
        isReadOnly={false}
        value={companyID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID: value,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.companyID ?? value;
          }
          if (errors.companyID?.hasError) {
            runValidationTasks("companyID", value);
          }
          setCompanyID(value);
        }}
        onBlur={() => runValidationTasks("companyID", companyID)}
        errorMessage={errors.companyID?.errorMessage}
        hasError={errors.companyID?.hasError}
        {...getOverrideProps(overrides, "companyID")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              COMBUSTIBLE,
              UNIDADFE,
              CANTIDAD,
              CO2,
              CH4,
              N2O,
              SF6,
              HFC,
              PFC,
              NF3,
              InicioPeriodo,
              TerminoPeriodo,
              INCERTIDUMBRE,
              ORIGENFE,
              companyID,
              userID: value,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}