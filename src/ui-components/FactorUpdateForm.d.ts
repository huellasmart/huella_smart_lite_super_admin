/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Factor } from "../models";
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
export declare type FactorUpdateFormInputValues = {
    cod?: string;
    ALCANCE?: string;
    CATEGORIA?: string;
    SUBCATEGORIA?: string;
    ACTIVIDAD?: string;
    CONCATENADO?: string;
    COMBUSTIBLE?: string;
    CONTAMINANTE?: string;
    INCERTIDUMBRE?: string;
    VALORFE?: number;
    UNIDADFE?: string;
    ORIGENFE?: string;
    companyID?: string;
    userID?: string;
};
export declare type FactorUpdateFormValidationValues = {
    cod?: ValidationFunction<string>;
    ALCANCE?: ValidationFunction<string>;
    CATEGORIA?: ValidationFunction<string>;
    SUBCATEGORIA?: ValidationFunction<string>;
    ACTIVIDAD?: ValidationFunction<string>;
    CONCATENADO?: ValidationFunction<string>;
    COMBUSTIBLE?: ValidationFunction<string>;
    CONTAMINANTE?: ValidationFunction<string>;
    INCERTIDUMBRE?: ValidationFunction<string>;
    VALORFE?: ValidationFunction<number>;
    UNIDADFE?: ValidationFunction<string>;
    ORIGENFE?: ValidationFunction<string>;
    companyID?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FactorUpdateFormOverridesProps = {
    FactorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cod?: PrimitiveOverrideProps<TextFieldProps>;
    ALCANCE?: PrimitiveOverrideProps<TextFieldProps>;
    CATEGORIA?: PrimitiveOverrideProps<TextFieldProps>;
    SUBCATEGORIA?: PrimitiveOverrideProps<TextFieldProps>;
    ACTIVIDAD?: PrimitiveOverrideProps<TextFieldProps>;
    CONCATENADO?: PrimitiveOverrideProps<TextFieldProps>;
    COMBUSTIBLE?: PrimitiveOverrideProps<TextFieldProps>;
    CONTAMINANTE?: PrimitiveOverrideProps<TextFieldProps>;
    INCERTIDUMBRE?: PrimitiveOverrideProps<TextFieldProps>;
    VALORFE?: PrimitiveOverrideProps<TextFieldProps>;
    UNIDADFE?: PrimitiveOverrideProps<TextFieldProps>;
    ORIGENFE?: PrimitiveOverrideProps<TextFieldProps>;
    companyID?: PrimitiveOverrideProps<AutocompleteProps>;
    userID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type FactorUpdateFormProps = React.PropsWithChildren<{
    overrides?: FactorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    factor?: Factor;
    onSubmit?: (fields: FactorUpdateFormInputValues) => FactorUpdateFormInputValues;
    onSuccess?: (fields: FactorUpdateFormInputValues) => void;
    onError?: (fields: FactorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FactorUpdateFormInputValues) => FactorUpdateFormInputValues;
    onValidate?: FactorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FactorUpdateForm(props: FactorUpdateFormProps): React.ReactElement;
