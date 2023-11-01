import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly sub?: string | null;
  readonly email?: string | null;
  readonly isAdmin?: boolean | null;
  readonly isActive?: boolean | null;
  readonly companyID: string;
  readonly Emisions?: (Factor | null)[] | null;
  readonly Factors?: (Factor | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly sub?: string | null;
  readonly email?: string | null;
  readonly isAdmin?: boolean | null;
  readonly isActive?: boolean | null;
  readonly companyID: string;
  readonly Emisions: AsyncCollection<Factor>;
  readonly Factors: AsyncCollection<Factor>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly isActive?: boolean | null;
  readonly Users?: (Factor | null)[] | null;
  readonly Factors?: (Factor | null)[] | null;
  readonly Emisions?: (Factor | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly isActive?: boolean | null;
  readonly Users: AsyncCollection<Factor>;
  readonly Factors: AsyncCollection<Factor>;
  readonly Emisions: AsyncCollection<Factor>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Company = LazyLoading extends LazyLoadingDisabled ? EagerCompany : LazyCompany

export declare const Company: (new (init: ModelInit<Company>) => Company) & {
  copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

type EagerEmision = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Emision, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Company: string;
  readonly ALCANCE: string;
  readonly CATEGORIA: string;
  readonly SUBCATEGORIA: string;
  readonly ACTIVIDAD: string;
  readonly COMBUSTIBLE: string;
  readonly UNIDADFE: string;
  readonly CANTIDAD: number;
  readonly CO2: number;
  readonly CH4: number;
  readonly N2O: number;
  readonly SF6: number;
  readonly HFC: number;
  readonly PFC: number;
  readonly NF3: number;
  readonly InicioPeriodo: string;
  readonly TerminoPeriodo: string;
  readonly INCERTIDUMBRE?: string | null;
  readonly ORIGENFE?: string | null;
  readonly companyID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmision = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Emision, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Company: string;
  readonly ALCANCE: string;
  readonly CATEGORIA: string;
  readonly SUBCATEGORIA: string;
  readonly ACTIVIDAD: string;
  readonly COMBUSTIBLE: string;
  readonly UNIDADFE: string;
  readonly CANTIDAD: number;
  readonly CO2: number;
  readonly CH4: number;
  readonly N2O: number;
  readonly SF6: number;
  readonly HFC: number;
  readonly PFC: number;
  readonly NF3: number;
  readonly InicioPeriodo: string;
  readonly TerminoPeriodo: string;
  readonly INCERTIDUMBRE?: string | null;
  readonly ORIGENFE?: string | null;
  readonly companyID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Emision = LazyLoading extends LazyLoadingDisabled ? EagerEmision : LazyEmision

export declare const Emision: (new (init: ModelInit<Emision>) => Emision) & {
  copyOf(source: Emision, mutator: (draft: MutableModel<Emision>) => MutableModel<Emision> | void): Emision;
}

type EagerFactor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Factor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cod: string;
  readonly ALCANCE: string;
  readonly CATEGORIA: string;
  readonly SUBCATEGORIA: string;
  readonly ACTIVIDAD: string;
  readonly CONCATENADO: string;
  readonly COMBUSTIBLE: string;
  readonly CONTAMINANTE: string;
  readonly INCERTIDUMBRE: string;
  readonly VALORFE: number;
  readonly UNIDADFE: string;
  readonly ORIGENFE: string;
  readonly companyID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFactor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Factor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cod: string;
  readonly ALCANCE: string;
  readonly CATEGORIA: string;
  readonly SUBCATEGORIA: string;
  readonly ACTIVIDAD: string;
  readonly CONCATENADO: string;
  readonly COMBUSTIBLE: string;
  readonly CONTAMINANTE: string;
  readonly INCERTIDUMBRE: string;
  readonly VALORFE: number;
  readonly UNIDADFE: string;
  readonly ORIGENFE: string;
  readonly companyID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Factor = LazyLoading extends LazyLoadingDisabled ? EagerFactor : LazyFactor

export declare const Factor: (new (init: ModelInit<Factor>) => Factor) & {
  copyOf(source: Factor, mutator: (draft: MutableModel<Factor>) => MutableModel<Factor> | void): Factor;
}