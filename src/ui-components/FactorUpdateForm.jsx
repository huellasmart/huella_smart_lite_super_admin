/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Factor, Company, User } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  useDataStoreBinding,
  validateField,
} from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function FactorUpdateForm(props) {
  const {
    id: idProp,
    factor: factorModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    cod: "",
    ALCANCE: "",
    CATEGORIA: "",
    SUBCATEGORIA: "",
    ACTIVIDAD: "",
    CONCATENADO: "",
    COMBUSTIBLE: "",
    CONTAMINANTE: "",
    INCERTIDUMBRE: "",
    VALORFE: "",
    UNIDADFE: "",
    ORIGENFE: "",
    companyID: undefined,
    userID: undefined,
  };
  const [cod, setCod] = React.useState(initialValues.cod);
  const [ALCANCE, setALCANCE] = React.useState(initialValues.ALCANCE);
  const [CATEGORIA, setCATEGORIA] = React.useState(initialValues.CATEGORIA);
  const [SUBCATEGORIA, setSUBCATEGORIA] = React.useState(
    initialValues.SUBCATEGORIA
  );
  const [ACTIVIDAD, setACTIVIDAD] = React.useState(initialValues.ACTIVIDAD);
  const [CONCATENADO, setCONCATENADO] = React.useState(
    initialValues.CONCATENADO
  );
  const [COMBUSTIBLE, setCOMBUSTIBLE] = React.useState(
    initialValues.COMBUSTIBLE
  );
  const [CONTAMINANTE, setCONTAMINANTE] = React.useState(
    initialValues.CONTAMINANTE
  );
  const [INCERTIDUMBRE, setINCERTIDUMBRE] = React.useState(
    initialValues.INCERTIDUMBRE
  );
  const [VALORFE, setVALORFE] = React.useState(initialValues.VALORFE);
  const [UNIDADFE, setUNIDADFE] = React.useState(initialValues.UNIDADFE);
  const [ORIGENFE, setORIGENFE] = React.useState(initialValues.ORIGENFE);
  const [companyID, setCompanyID] = React.useState(initialValues.companyID);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = factorRecord
      ? { ...initialValues, ...factorRecord, companyID, userID }
      : initialValues;
    setCod(cleanValues.cod);
    setALCANCE(cleanValues.ALCANCE);
    setCATEGORIA(cleanValues.CATEGORIA);
    setSUBCATEGORIA(cleanValues.SUBCATEGORIA);
    setACTIVIDAD(cleanValues.ACTIVIDAD);
    setCONCATENADO(cleanValues.CONCATENADO);
    setCOMBUSTIBLE(cleanValues.COMBUSTIBLE);
    setCONTAMINANTE(cleanValues.CONTAMINANTE);
    setINCERTIDUMBRE(cleanValues.INCERTIDUMBRE);
    setVALORFE(cleanValues.VALORFE);
    setUNIDADFE(cleanValues.UNIDADFE);
    setORIGENFE(cleanValues.ORIGENFE);
    setCompanyID(cleanValues.companyID);
    setCurrentCompanyIDValue(undefined);
    setCurrentCompanyIDDisplayValue("");
    setUserID(cleanValues.userID);
    setCurrentUserIDValue(undefined);
    setCurrentUserIDDisplayValue("");
    setErrors({});
  };
  const [factorRecord, setFactorRecord] = React.useState(factorModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Factor, idProp)
        : factorModelProp;
      setFactorRecord(record);
      const companyIDRecord = record ? await record.companyID : undefined;
      setCompanyID(companyIDRecord);
      const userIDRecord = record ? await record.userID : undefined;
      setUserID(userIDRecord);
    };
    queryData();
  }, [idProp, factorModelProp]);
  React.useEffect(resetStateValues, [factorRecord, companyID, userID]);
  const [currentCompanyIDDisplayValue, setCurrentCompanyIDDisplayValue] =
    React.useState("");
  const [currentCompanyIDValue, setCurrentCompanyIDValue] =
    React.useState(undefined);
  const companyIDRef = React.createRef();
  const [currentUserIDDisplayValue, setCurrentUserIDDisplayValue] =
    React.useState("");
  const [currentUserIDValue, setCurrentUserIDValue] = React.useState(undefined);
  const userIDRef = React.createRef();
  const companyRecords = useDataStoreBinding({
    type: "collection",
    model: Company,
  }).items;
  const userRecords = useDataStoreBinding({
    type: "collection",
    model: User,
  }).items;
  const getDisplayValue = {
    companyID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    userID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    cod: [{ type: "Required" }],
    ALCANCE: [{ type: "Required" }],
    CATEGORIA: [{ type: "Required" }],
    SUBCATEGORIA: [{ type: "Required" }],
    ACTIVIDAD: [{ type: "Required" }],
    CONCATENADO: [{ type: "Required" }],
    COMBUSTIBLE: [{ type: "Required" }],
    CONTAMINANTE: [{ type: "Required" }],
    INCERTIDUMBRE: [{ type: "Required" }],
    VALORFE: [{ type: "Required" }],
    UNIDADFE: [{ type: "Required" }],
    ORIGENFE: [{ type: "Required" }],
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
          cod,
          ALCANCE,
          CATEGORIA,
          SUBCATEGORIA,
          ACTIVIDAD,
          CONCATENADO,
          COMBUSTIBLE,
          CONTAMINANTE,
          INCERTIDUMBRE,
          VALORFE,
          UNIDADFE,
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
          await DataStore.save(
            Factor.copyOf(factorRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "FactorUpdateForm")}
      {...rest}
    >
      <TextField
        label="Cod"
        isRequired={true}
        isReadOnly={false}
        value={cod}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cod: value,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              CONCATENADO,
              COMBUSTIBLE,
              CONTAMINANTE,
              INCERTIDUMBRE,
              VALORFE,
              UNIDADFE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.cod ?? value;
          }
          if (errors.cod?.hasError) {
            runValidationTasks("cod", value);
          }
          setCod(value);
        }}
        onBlur={() => runValidationTasks("cod", cod)}
        errorMessage={errors.cod?.errorMessage}
        hasError={errors.cod?.hasError}
        {...getOverrideProps(overrides, "cod")}
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
              cod,
              ALCANCE: value,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              CONCATENADO,
              COMBUSTIBLE,
              CONTAMINANTE,
              INCERTIDUMBRE,
              VALORFE,
              UNIDADFE,
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
              cod,
              ALCANCE,
              CATEGORIA: value,
              SUBCATEGORIA,
              ACTIVIDAD,
              CONCATENADO,
              COMBUSTIBLE,
              CONTAMINANTE,
              INCERTIDUMBRE,
              VALORFE,
              UNIDADFE,
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
              cod,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA: value,
              ACTIVIDAD,
              CONCATENADO,
              COMBUSTIBLE,
              CONTAMINANTE,
              INCERTIDUMBRE,
              VALORFE,
              UNIDADFE,
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
              cod,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD: value,
              CONCATENADO,
              COMBUSTIBLE,
              CONTAMINANTE,
              INCERTIDUMBRE,
              VALORFE,
              UNIDADFE,
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
        label="Concatenado"
        isRequired={true}
        isReadOnly={false}
        value={CONCATENADO}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cod,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              CONCATENADO: value,
              COMBUSTIBLE,
              CONTAMINANTE,
              INCERTIDUMBRE,
              VALORFE,
              UNIDADFE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.CONCATENADO ?? value;
          }
          if (errors.CONCATENADO?.hasError) {
            runValidationTasks("CONCATENADO", value);
          }
          setCONCATENADO(value);
        }}
        onBlur={() => runValidationTasks("CONCATENADO", CONCATENADO)}
        errorMessage={errors.CONCATENADO?.errorMessage}
        hasError={errors.CONCATENADO?.hasError}
        {...getOverrideProps(overrides, "CONCATENADO")}
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
              cod,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              CONCATENADO,
              COMBUSTIBLE: value,
              CONTAMINANTE,
              INCERTIDUMBRE,
              VALORFE,
              UNIDADFE,
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
        label="Contaminante"
        isRequired={true}
        isReadOnly={false}
        value={CONTAMINANTE}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cod,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              CONCATENADO,
              COMBUSTIBLE,
              CONTAMINANTE: value,
              INCERTIDUMBRE,
              VALORFE,
              UNIDADFE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.CONTAMINANTE ?? value;
          }
          if (errors.CONTAMINANTE?.hasError) {
            runValidationTasks("CONTAMINANTE", value);
          }
          setCONTAMINANTE(value);
        }}
        onBlur={() => runValidationTasks("CONTAMINANTE", CONTAMINANTE)}
        errorMessage={errors.CONTAMINANTE?.errorMessage}
        hasError={errors.CONTAMINANTE?.hasError}
        {...getOverrideProps(overrides, "CONTAMINANTE")}
      ></TextField>
      <TextField
        label="Incertidumbre"
        isRequired={true}
        isReadOnly={false}
        value={INCERTIDUMBRE}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cod,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              CONCATENADO,
              COMBUSTIBLE,
              CONTAMINANTE,
              INCERTIDUMBRE: value,
              VALORFE,
              UNIDADFE,
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
        label="Valorfe"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={VALORFE}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              cod,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              CONCATENADO,
              COMBUSTIBLE,
              CONTAMINANTE,
              INCERTIDUMBRE,
              VALORFE: value,
              UNIDADFE,
              ORIGENFE,
              companyID,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.VALORFE ?? value;
          }
          if (errors.VALORFE?.hasError) {
            runValidationTasks("VALORFE", value);
          }
          setVALORFE(value);
        }}
        onBlur={() => runValidationTasks("VALORFE", VALORFE)}
        errorMessage={errors.VALORFE?.errorMessage}
        hasError={errors.VALORFE?.hasError}
        {...getOverrideProps(overrides, "VALORFE")}
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
              cod,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              CONCATENADO,
              COMBUSTIBLE,
              CONTAMINANTE,
              INCERTIDUMBRE,
              VALORFE,
              UNIDADFE: value,
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
        label="Origenfe"
        isRequired={true}
        isReadOnly={false}
        value={ORIGENFE}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cod,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              CONCATENADO,
              COMBUSTIBLE,
              CONTAMINANTE,
              INCERTIDUMBRE,
              VALORFE,
              UNIDADFE,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              cod,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              CONCATENADO,
              COMBUSTIBLE,
              CONTAMINANTE,
              INCERTIDUMBRE,
              VALORFE,
              UNIDADFE,
              ORIGENFE,
              companyID: value,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.companyID ?? value;
          }
          setCompanyID(value);
          setCurrentCompanyIDValue(undefined);
        }}
        currentFieldValue={currentCompanyIDValue}
        label={"Company id"}
        items={companyID ? [companyID] : []}
        hasError={errors?.companyID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("companyID", currentCompanyIDValue)
        }
        errorMessage={errors?.companyID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.companyID(
                companyRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentCompanyIDDisplayValue(
            value
              ? getDisplayValue.companyID(
                  companyRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentCompanyIDValue(value);
        }}
        inputFieldRef={companyIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Company id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Company"
          value={currentCompanyIDDisplayValue}
          options={companyRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.companyID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentCompanyIDValue(id);
            setCurrentCompanyIDDisplayValue(label);
            runValidationTasks("companyID", label);
          }}
          onClear={() => {
            setCurrentCompanyIDDisplayValue("");
          }}
          defaultValue={companyID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.companyID?.hasError) {
              runValidationTasks("companyID", value);
            }
            setCurrentCompanyIDDisplayValue(value);
            setCurrentCompanyIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("companyID", currentCompanyIDValue)}
          errorMessage={errors.companyID?.errorMessage}
          hasError={errors.companyID?.hasError}
          ref={companyIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "companyID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              cod,
              ALCANCE,
              CATEGORIA,
              SUBCATEGORIA,
              ACTIVIDAD,
              CONCATENADO,
              COMBUSTIBLE,
              CONTAMINANTE,
              INCERTIDUMBRE,
              VALORFE,
              UNIDADFE,
              ORIGENFE,
              companyID,
              userID: value,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          setUserID(value);
          setCurrentUserIDValue(undefined);
        }}
        currentFieldValue={currentUserIDValue}
        label={"User id"}
        items={userID ? [userID] : []}
        hasError={errors?.userID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("userID", currentUserIDValue)
        }
        errorMessage={errors?.userID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.userID(userRecords.find((r) => r.id === value))
            : ""
        }
        setFieldValue={(value) => {
          setCurrentUserIDDisplayValue(
            value
              ? getDisplayValue.userID(userRecords.find((r) => r.id === value))
              : ""
          );
          setCurrentUserIDValue(value);
        }}
        inputFieldRef={userIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="User id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search User"
          value={currentUserIDDisplayValue}
          options={userRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.userID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUserIDValue(id);
            setCurrentUserIDDisplayValue(label);
            runValidationTasks("userID", label);
          }}
          onClear={() => {
            setCurrentUserIDDisplayValue("");
          }}
          defaultValue={userID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.userID?.hasError) {
              runValidationTasks("userID", value);
            }
            setCurrentUserIDDisplayValue(value);
            setCurrentUserIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("userID", currentUserIDValue)}
          errorMessage={errors.userID?.errorMessage}
          hasError={errors.userID?.hasError}
          ref={userIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "userID")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || factorModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || factorModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
