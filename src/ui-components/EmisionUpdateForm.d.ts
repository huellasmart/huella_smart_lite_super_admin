/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Emision } from "../models";
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
export declare type EmisionUpdateFormInputValues = {
    Company?: string;
    ALCANCE?: string;
    CATEGORIA?: string;
    SUBCATEGORIA?: string;
    ACTIVIDAD?: string;
    COMBUSTIBLE?: string;
    UNIDADFE?: string;
    CANTIDAD?: number;
    CO2?: number;
    CH4?: number;
    N2O?: number;
    SF6?: number;
    HFC?: number;
    PFC?: number;
    NF3?: number;
    InicioPeriodo?: string;
    TerminoPeriodo?: string;
    INCERTIDUMBRE?: string;
    ORIGENFE?: string;
    userID?: string;
    companyID?: string;
};
export declare type EmisionUpdateFormValidationValues = {
    Company?: ValidationFunction<string>;
    ALCANCE?: ValidationFunction<string>;
    CATEGORIA?: ValidationFunction<string>;
    SUBCATEGORIA?: ValidationFunction<string>;
    ACTIVIDAD?: ValidationFunction<string>;
    COMBUSTIBLE?: ValidationFunction<string>;
    UNIDADFE?: ValidationFunction<string>;
    CANTIDAD?: ValidationFunction<number>;
    CO2?: ValidationFunction<number>;
    CH4?: ValidationFunction<number>;
    N2O?: ValidationFunction<number>;
    SF6?: ValidationFunction<number>;
    HFC?: ValidationFunction<number>;
    PFC?: ValidationFunction<number>;
    NF3?: ValidationFunction<number>;
    InicioPeriodo?: ValidationFunction<string>;
    TerminoPeriodo?: ValidationFunction<string>;
    INCERTIDUMBRE?: ValidationFunction<string>;
    ORIGENFE?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
    companyID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmisionUpdateFormOverridesProps = {
    EmisionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Company?: PrimitiveOverrideProps<TextFieldProps>;
    ALCANCE?: PrimitiveOverrideProps<TextFieldProps>;
    CATEGORIA?: PrimitiveOverrideProps<TextFieldProps>;
    SUBCATEGORIA?: PrimitiveOverrideProps<TextFieldProps>;
    ACTIVIDAD?: PrimitiveOverrideProps<TextFieldProps>;
    COMBUSTIBLE?: PrimitiveOverrideProps<TextFieldProps>;
    UNIDADFE?: PrimitiveOverrideProps<TextFieldProps>;
    CANTIDAD?: PrimitiveOverrideProps<TextFieldProps>;
    CO2?: PrimitiveOverrideProps<TextFieldProps>;
    CH4?: PrimitiveOverrideProps<TextFieldProps>;
    N2O?: PrimitiveOverrideProps<TextFieldProps>;
    SF6?: PrimitiveOverrideProps<TextFieldProps>;
    HFC?: PrimitiveOverrideProps<TextFieldProps>;
    PFC?: PrimitiveOverrideProps<TextFieldProps>;
    NF3?: PrimitiveOverrideProps<TextFieldProps>;
    InicioPeriodo?: PrimitiveOverrideProps<TextFieldProps>;
    TerminoPeriodo?: PrimitiveOverrideProps<TextFieldProps>;
    INCERTIDUMBRE?: PrimitiveOverrideProps<TextFieldProps>;
    ORIGENFE?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<AutocompleteProps>;
    companyID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type EmisionUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmisionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    emision?: Emision;
    onSubmit?: (fields: EmisionUpdateFormInputValues) => EmisionUpdateFormInputValues;
    onSuccess?: (fields: EmisionUpdateFormInputValues) => void;
    onError?: (fields: EmisionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmisionUpdateFormInputValues) => EmisionUpdateFormInputValues;
    onValidate?: EmisionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmisionUpdateForm(props: EmisionUpdateFormProps): React.ReactElement;
