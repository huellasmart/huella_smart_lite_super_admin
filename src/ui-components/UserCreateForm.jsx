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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { User, Factor } from "../models";
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
export default function UserCreateForm(props) {
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
    name: "",
    sub: "",
    email: "",
    isAdmin: false,
    isActive: false,
    companyID: "",
    Emisions: [],
    Factors: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [sub, setSub] = React.useState(initialValues.sub);
  const [email, setEmail] = React.useState(initialValues.email);
  const [isAdmin, setIsAdmin] = React.useState(initialValues.isAdmin);
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [companyID, setCompanyID] = React.useState(initialValues.companyID);
  const [Emisions, setEmisions] = React.useState(initialValues.Emisions);
  const [Factors, setFactors] = React.useState(initialValues.Factors);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setSub(initialValues.sub);
    setEmail(initialValues.email);
    setIsAdmin(initialValues.isAdmin);
    setIsActive(initialValues.isActive);
    setCompanyID(initialValues.companyID);
    setEmisions(initialValues.Emisions);
    setCurrentEmisionsValue(undefined);
    setCurrentEmisionsDisplayValue("");
    setFactors(initialValues.Factors);
    setCurrentFactorsValue(undefined);
    setCurrentFactorsDisplayValue("");
    setErrors({});
  };
  const [currentEmisionsDisplayValue, setCurrentEmisionsDisplayValue] =
    React.useState("");
  const [currentEmisionsValue, setCurrentEmisionsValue] =
    React.useState(undefined);
  const EmisionsRef = React.createRef();
  const [currentFactorsDisplayValue, setCurrentFactorsDisplayValue] =
    React.useState("");
  const [currentFactorsValue, setCurrentFactorsValue] =
    React.useState(undefined);
  const FactorsRef = React.createRef();
  const getIDValue = {
    Emisions: (r) => JSON.stringify({ id: r?.id }),
    Factors: (r) => JSON.stringify({ id: r?.id }),
  };
  const EmisionsIdSet = new Set(
    Array.isArray(Emisions)
      ? Emisions.map((r) => getIDValue.Emisions?.(r))
      : getIDValue.Emisions?.(Emisions)
  );
  const FactorsIdSet = new Set(
    Array.isArray(Factors)
      ? Factors.map((r) => getIDValue.Factors?.(r))
      : getIDValue.Factors?.(Factors)
  );
  const factorRecords = useDataStoreBinding({
    type: "collection",
    model: Factor,
  }).items;
  const getDisplayValue = {
    Emisions: (r) => `${r?.cod ? r?.cod + " - " : ""}${r?.id}`,
    Factors: (r) => `${r?.cod ? r?.cod + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    sub: [],
    email: [],
    isAdmin: [],
    isActive: [],
    companyID: [{ type: "Required" }],
    Emisions: [],
    Factors: [],
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
          name,
          sub,
          email,
          isAdmin,
          isActive,
          companyID,
          Emisions,
          Factors,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const modelFieldsToSave = {
            name: modelFields.name,
            sub: modelFields.sub,
            email: modelFields.email,
            isAdmin: modelFields.isAdmin,
            isActive: modelFields.isActive,
            companyID: modelFields.companyID,
          };
          const user = await DataStore.save(new User(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...Emisions.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Factor.copyOf(original, (updated) => {
                    updated.userID = user.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...Factors.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Factor.copyOf(original, (updated) => {
                    updated.userID = user.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              sub,
              email,
              isAdmin,
              isActive,
              companyID,
              Emisions,
              Factors,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Sub"
        isRequired={false}
        isReadOnly={false}
        value={sub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              sub: value,
              email,
              isAdmin,
              isActive,
              companyID,
              Emisions,
              Factors,
            };
            const result = onChange(modelFields);
            value = result?.sub ?? value;
          }
          if (errors.sub?.hasError) {
            runValidationTasks("sub", value);
          }
          setSub(value);
        }}
        onBlur={() => runValidationTasks("sub", sub)}
        errorMessage={errors.sub?.errorMessage}
        hasError={errors.sub?.hasError}
        {...getOverrideProps(overrides, "sub")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              sub,
              email: value,
              isAdmin,
              isActive,
              companyID,
              Emisions,
              Factors,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <SwitchField
        label="Is admin"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isAdmin}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              sub,
              email,
              isAdmin: value,
              isActive,
              companyID,
              Emisions,
              Factors,
            };
            const result = onChange(modelFields);
            value = result?.isAdmin ?? value;
          }
          if (errors.isAdmin?.hasError) {
            runValidationTasks("isAdmin", value);
          }
          setIsAdmin(value);
        }}
        onBlur={() => runValidationTasks("isAdmin", isAdmin)}
        errorMessage={errors.isAdmin?.errorMessage}
        hasError={errors.isAdmin?.hasError}
        {...getOverrideProps(overrides, "isAdmin")}
      ></SwitchField>
      <SwitchField
        label="Is active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isActive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              sub,
              email,
              isAdmin,
              isActive: value,
              companyID,
              Emisions,
              Factors,
            };
            const result = onChange(modelFields);
            value = result?.isActive ?? value;
          }
          if (errors.isActive?.hasError) {
            runValidationTasks("isActive", value);
          }
          setIsActive(value);
        }}
        onBlur={() => runValidationTasks("isActive", isActive)}
        errorMessage={errors.isActive?.errorMessage}
        hasError={errors.isActive?.hasError}
        {...getOverrideProps(overrides, "isActive")}
      ></SwitchField>
      <TextField
        label="Company id"
        isRequired={true}
        isReadOnly={false}
        value={companyID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              sub,
              email,
              isAdmin,
              isActive,
              companyID: value,
              Emisions,
              Factors,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              sub,
              email,
              isAdmin,
              isActive,
              companyID,
              Emisions: values,
              Factors,
            };
            const result = onChange(modelFields);
            values = result?.Emisions ?? values;
          }
          setEmisions(values);
          setCurrentEmisionsValue(undefined);
          setCurrentEmisionsDisplayValue("");
        }}
        currentFieldValue={currentEmisionsValue}
        label={"Emisions"}
        items={Emisions}
        hasError={errors?.Emisions?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Emisions", currentEmisionsValue)
        }
        errorMessage={errors?.Emisions?.errorMessage}
        getBadgeText={getDisplayValue.Emisions}
        setFieldValue={(model) => {
          setCurrentEmisionsDisplayValue(
            model ? getDisplayValue.Emisions(model) : ""
          );
          setCurrentEmisionsValue(model);
        }}
        inputFieldRef={EmisionsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Emisions"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Factor"
          value={currentEmisionsDisplayValue}
          options={factorRecords
            .filter((r) => !EmisionsIdSet.has(getIDValue.Emisions?.(r)))
            .map((r) => ({
              id: getIDValue.Emisions?.(r),
              label: getDisplayValue.Emisions?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentEmisionsValue(
              factorRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentEmisionsDisplayValue(label);
            runValidationTasks("Emisions", label);
          }}
          onClear={() => {
            setCurrentEmisionsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Emisions?.hasError) {
              runValidationTasks("Emisions", value);
            }
            setCurrentEmisionsDisplayValue(value);
            setCurrentEmisionsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Emisions", currentEmisionsDisplayValue)
          }
          errorMessage={errors.Emisions?.errorMessage}
          hasError={errors.Emisions?.hasError}
          ref={EmisionsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Emisions")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              sub,
              email,
              isAdmin,
              isActive,
              companyID,
              Emisions,
              Factors: values,
            };
            const result = onChange(modelFields);
            values = result?.Factors ?? values;
          }
          setFactors(values);
          setCurrentFactorsValue(undefined);
          setCurrentFactorsDisplayValue("");
        }}
        currentFieldValue={currentFactorsValue}
        label={"Factors"}
        items={Factors}
        hasError={errors?.Factors?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Factors", currentFactorsValue)
        }
        errorMessage={errors?.Factors?.errorMessage}
        getBadgeText={getDisplayValue.Factors}
        setFieldValue={(model) => {
          setCurrentFactorsDisplayValue(
            model ? getDisplayValue.Factors(model) : ""
          );
          setCurrentFactorsValue(model);
        }}
        inputFieldRef={FactorsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Factors"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Factor"
          value={currentFactorsDisplayValue}
          options={factorRecords
            .filter((r) => !FactorsIdSet.has(getIDValue.Factors?.(r)))
            .map((r) => ({
              id: getIDValue.Factors?.(r),
              label: getDisplayValue.Factors?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentFactorsValue(
              factorRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentFactorsDisplayValue(label);
            runValidationTasks("Factors", label);
          }}
          onClear={() => {
            setCurrentFactorsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Factors?.hasError) {
              runValidationTasks("Factors", value);
            }
            setCurrentFactorsDisplayValue(value);
            setCurrentFactorsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Factors", currentFactorsDisplayValue)
          }
          errorMessage={errors.Factors?.errorMessage}
          hasError={errors.Factors?.hasError}
          ref={FactorsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Factors")}
        ></Autocomplete>
      </ArrayField>
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
