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
import { Company, User, Factor, Emision } from "../models";
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
export default function CompanyUpdateForm(props) {
  const {
    id: idProp,
    company: companyModelProp,
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
    email: "",
    isActive: false,
    Users: [],
    Factors: [],
    Emisions: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [Users, setUsers] = React.useState(initialValues.Users);
  const [Factors, setFactors] = React.useState(initialValues.Factors);
  const [Emisions, setEmisions] = React.useState(initialValues.Emisions);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = companyRecord
      ? {
          ...initialValues,
          ...companyRecord,
          Users: linkedUsers,
          Factors: linkedFactors,
          Emisions: linkedEmisions,
        }
      : initialValues;
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setIsActive(cleanValues.isActive);
    setUsers(cleanValues.Users ?? []);
    setCurrentUsersValue(undefined);
    setCurrentUsersDisplayValue("");
    setFactors(cleanValues.Factors ?? []);
    setCurrentFactorsValue(undefined);
    setCurrentFactorsDisplayValue("");
    setEmisions(cleanValues.Emisions ?? []);
    setCurrentEmisionsValue(undefined);
    setCurrentEmisionsDisplayValue("");
    setErrors({});
  };
  const [companyRecord, setCompanyRecord] = React.useState(companyModelProp);
  const [linkedUsers, setLinkedUsers] = React.useState([]);
  const canUnlinkUsers = false;
  const [linkedFactors, setLinkedFactors] = React.useState([]);
  const canUnlinkFactors = false;
  const [linkedEmisions, setLinkedEmisions] = React.useState([]);
  const canUnlinkEmisions = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Company, idProp)
        : companyModelProp;
      setCompanyRecord(record);
      const linkedUsers = record ? await record.Users.toArray() : [];
      setLinkedUsers(linkedUsers);
      const linkedFactors = record ? await record.Factors.toArray() : [];
      setLinkedFactors(linkedFactors);
      const linkedEmisions = record ? await record.Emisions.toArray() : [];
      setLinkedEmisions(linkedEmisions);
    };
    queryData();
  }, [idProp, companyModelProp]);
  React.useEffect(resetStateValues, [
    companyRecord,
    linkedUsers,
    linkedFactors,
    linkedEmisions,
  ]);
  const [currentUsersDisplayValue, setCurrentUsersDisplayValue] =
    React.useState("");
  const [currentUsersValue, setCurrentUsersValue] = React.useState(undefined);
  const UsersRef = React.createRef();
  const [currentFactorsDisplayValue, setCurrentFactorsDisplayValue] =
    React.useState("");
  const [currentFactorsValue, setCurrentFactorsValue] =
    React.useState(undefined);
  const FactorsRef = React.createRef();
  const [currentEmisionsDisplayValue, setCurrentEmisionsDisplayValue] =
    React.useState("");
  const [currentEmisionsValue, setCurrentEmisionsValue] =
    React.useState(undefined);
  const EmisionsRef = React.createRef();
  const getIDValue = {
    Users: (r) => JSON.stringify({ id: r?.id }),
    Factors: (r) => JSON.stringify({ id: r?.id }),
    Emisions: (r) => JSON.stringify({ id: r?.id }),
  };
  const UsersIdSet = new Set(
    Array.isArray(Users)
      ? Users.map((r) => getIDValue.Users?.(r))
      : getIDValue.Users?.(Users)
  );
  const FactorsIdSet = new Set(
    Array.isArray(Factors)
      ? Factors.map((r) => getIDValue.Factors?.(r))
      : getIDValue.Factors?.(Factors)
  );
  const EmisionsIdSet = new Set(
    Array.isArray(Emisions)
      ? Emisions.map((r) => getIDValue.Emisions?.(r))
      : getIDValue.Emisions?.(Emisions)
  );
  const userRecords = useDataStoreBinding({
    type: "collection",
    model: User,
  }).items;
  const factorRecords = useDataStoreBinding({
    type: "collection",
    model: Factor,
  }).items;
  const emisionRecords = useDataStoreBinding({
    type: "collection",
    model: Emision,
  }).items;
  const getDisplayValue = {
    Users: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Factors: (r) => `${r?.cod ? r?.cod + " - " : ""}${r?.id}`,
    Emisions: (r) => `${r?.Company ? r?.Company + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    email: [{ type: "Email" }],
    isActive: [],
    Users: [],
    Factors: [],
    Emisions: [],
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
          email,
          isActive,
          Users,
          Factors,
          Emisions,
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
          const promises = [];
          const usersToLink = [];
          const usersToUnLink = [];
          const usersSet = new Set();
          const linkedUsersSet = new Set();
          Users.forEach((r) => usersSet.add(getIDValue.Users?.(r)));
          linkedUsers.forEach((r) => linkedUsersSet.add(getIDValue.Users?.(r)));
          linkedUsers.forEach((r) => {
            if (!usersSet.has(getIDValue.Users?.(r))) {
              usersToUnLink.push(r);
            }
          });
          Users.forEach((r) => {
            if (!linkedUsersSet.has(getIDValue.Users?.(r))) {
              usersToLink.push(r);
            }
          });
          usersToUnLink.forEach((original) => {
            if (!canUnlinkUsers) {
              throw Error(
                `User ${original.id} cannot be unlinked from Company because companyID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                User.copyOf(original, (updated) => {
                  updated.companyID = null;
                })
              )
            );
          });
          usersToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                User.copyOf(original, (updated) => {
                  updated.companyID = companyRecord.id;
                })
              )
            );
          });
          const factorsToLink = [];
          const factorsToUnLink = [];
          const factorsSet = new Set();
          const linkedFactorsSet = new Set();
          Factors.forEach((r) => factorsSet.add(getIDValue.Factors?.(r)));
          linkedFactors.forEach((r) =>
            linkedFactorsSet.add(getIDValue.Factors?.(r))
          );
          linkedFactors.forEach((r) => {
            if (!factorsSet.has(getIDValue.Factors?.(r))) {
              factorsToUnLink.push(r);
            }
          });
          Factors.forEach((r) => {
            if (!linkedFactorsSet.has(getIDValue.Factors?.(r))) {
              factorsToLink.push(r);
            }
          });
          factorsToUnLink.forEach((original) => {
            if (!canUnlinkFactors) {
              throw Error(
                `Factor ${original.id} cannot be unlinked from Company because companyID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Factor.copyOf(original, (updated) => {
                  updated.companyID = null;
                })
              )
            );
          });
          factorsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Factor.copyOf(original, (updated) => {
                  updated.companyID = companyRecord.id;
                })
              )
            );
          });
          const emisionsToLink = [];
          const emisionsToUnLink = [];
          const emisionsSet = new Set();
          const linkedEmisionsSet = new Set();
          Emisions.forEach((r) => emisionsSet.add(getIDValue.Emisions?.(r)));
          linkedEmisions.forEach((r) =>
            linkedEmisionsSet.add(getIDValue.Emisions?.(r))
          );
          linkedEmisions.forEach((r) => {
            if (!emisionsSet.has(getIDValue.Emisions?.(r))) {
              emisionsToUnLink.push(r);
            }
          });
          Emisions.forEach((r) => {
            if (!linkedEmisionsSet.has(getIDValue.Emisions?.(r))) {
              emisionsToLink.push(r);
            }
          });
          emisionsToUnLink.forEach((original) => {
            if (!canUnlinkEmisions) {
              throw Error(
                `Emision ${original.id} cannot be unlinked from Company because companyID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Emision.copyOf(original, (updated) => {
                  updated.companyID = null;
                })
              )
            );
          });
          emisionsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Emision.copyOf(original, (updated) => {
                  updated.companyID = companyRecord.id;
                })
              )
            );
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            email: modelFields.email,
            isActive: modelFields.isActive,
          };
          promises.push(
            DataStore.save(
              Company.copyOf(companyRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CompanyUpdateForm")}
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
              email,
              isActive,
              Users,
              Factors,
              Emisions,
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
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email: value,
              isActive,
              Users,
              Factors,
              Emisions,
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
        label="Is active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isActive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              email,
              isActive: value,
              Users,
              Factors,
              Emisions,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              email,
              isActive,
              Users: values,
              Factors,
              Emisions,
            };
            const result = onChange(modelFields);
            values = result?.Users ?? values;
          }
          setUsers(values);
          setCurrentUsersValue(undefined);
          setCurrentUsersDisplayValue("");
        }}
        currentFieldValue={currentUsersValue}
        label={"Users"}
        items={Users}
        hasError={errors?.Users?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Users", currentUsersValue)
        }
        errorMessage={errors?.Users?.errorMessage}
        getBadgeText={getDisplayValue.Users}
        setFieldValue={(model) => {
          setCurrentUsersDisplayValue(
            model ? getDisplayValue.Users(model) : ""
          );
          setCurrentUsersValue(model);
        }}
        inputFieldRef={UsersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Users"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentUsersDisplayValue}
          options={userRecords
            .filter((r) => !UsersIdSet.has(getIDValue.Users?.(r)))
            .map((r) => ({
              id: getIDValue.Users?.(r),
              label: getDisplayValue.Users?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUsersValue(
              userRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUsersDisplayValue(label);
            runValidationTasks("Users", label);
          }}
          onClear={() => {
            setCurrentUsersDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Users?.hasError) {
              runValidationTasks("Users", value);
            }
            setCurrentUsersDisplayValue(value);
            setCurrentUsersValue(undefined);
          }}
          onBlur={() => runValidationTasks("Users", currentUsersDisplayValue)}
          errorMessage={errors.Users?.errorMessage}
          hasError={errors.Users?.hasError}
          ref={UsersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Users")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              email,
              isActive,
              Users,
              Factors: values,
              Emisions,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              email,
              isActive,
              Users,
              Factors,
              Emisions: values,
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
          placeholder="Search Emision"
          value={currentEmisionsDisplayValue}
          options={emisionRecords
            .filter((r) => !EmisionsIdSet.has(getIDValue.Emisions?.(r)))
            .map((r) => ({
              id: getIDValue.Emisions?.(r),
              label: getDisplayValue.Emisions?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentEmisionsValue(
              emisionRecords.find((r) =>
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
          isDisabled={!(idProp || companyModelProp)}
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
              !(idProp || companyModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
