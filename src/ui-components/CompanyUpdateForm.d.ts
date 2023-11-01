/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Company, Factor } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CompanyUpdateFormInputValues = {
    name?: string;
    email?: string;
    isActive?: boolean;
    Users?: Factor[];
    Factors?: Factor[];
    Emisions?: Factor[];
};
export declare type CompanyUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
    Users?: ValidationFunction<Factor>;
    Factors?: ValidationFunction<Factor>;
    Emisions?: ValidationFunction<Factor>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyUpdateFormOverridesProps = {
    CompanyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    Users?: PrimitiveOverrideProps<AutocompleteProps>;
    Factors?: PrimitiveOverrideProps<AutocompleteProps>;
    Emisions?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CompanyUpdateFormProps = React.PropsWithChildren<{
    overrides?: CompanyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    company?: Company;
    onSubmit?: (fields: CompanyUpdateFormInputValues) => CompanyUpdateFormInputValues;
    onSuccess?: (fields: CompanyUpdateFormInputValues) => void;
    onError?: (fields: CompanyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompanyUpdateFormInputValues) => CompanyUpdateFormInputValues;
    onValidate?: CompanyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CompanyUpdateForm(props: CompanyUpdateFormProps): React.ReactElement;
