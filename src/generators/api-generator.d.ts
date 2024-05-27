/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/": {
    get: operations["AppController_index"];
  };
  "/admins": {
    get: operations["AdminsController_findAll"];
    post: operations["AdminsController_create"];
  };
  "/admins/{id}": {
    get: operations["AdminsController_findOne"];
    delete: operations["AdminsController_remove"];
    patch: operations["AdminsController_update"];
  };
  "/patients": {
    get: operations["PatientsController_findAll"];
    post: operations["PatientsController_create"];
  };
  "/patients/{id}": {
    get: operations["PatientsController_findOne"];
    delete: operations["PatientsController_remove"];
    patch: operations["PatientsController_update"];
  };
  "/patients/ban-patient/{id}": {
    patch: operations["PatientsController_banPatient"];
  };
  "/patients/unban-patient/{id}": {
    patch: operations["PatientsController_unbanPatient"];
  };
  "/posts": {
    get: operations["PostsController_findAll"];
    post: operations["PostsController_create"];
  };
  "/posts/{id}": {
    get: operations["PostsController_findOne"];
    delete: operations["PostsController_remove"];
    patch: operations["PostsController_update"];
  };
  "/posts/remove-post/{id}": {
    patch: operations["PostsController_userRemovePost"];
  };
  "/seeds": {
    post: operations["SeedsController_create"];
  };
  "/factories": {
    post: operations["FactoriesController_create"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    CreateAdminDto: {
      email: string;
      password: string;
      phone_number: string;
      /** @enum {string} */
      roles: "patient" | "admin" | "therapist";
    };
    AdminResponseDto: {
      _id: string;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      email: string;
      phone_number: string;
      roles: ("patient" | "admin" | "therapist")[];
    };
    UpdateAdminDto: {
      email?: string;
      password?: string;
      phone_number?: string;
      /** @enum {string} */
      roles?: "patient" | "admin" | "therapist";
    };
    CreatePatientDto: {
      email: string;
      username: string;
      phone_number: string;
      gender: string;
    };
    PatientResponseDto: {
      _id: string;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      email: string;
      username: string;
      phone_number: string;
      /** @enum {string} */
      gender: "male" | "female";
      roles: ("patient" | "admin" | "therapist")[];
      /** @default false */
      is_deleted: boolean;
      /** @default false */
      is_banned: boolean;
    };
    PostResponseDto: {
      _id: string;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      body: string;
      patient: components["schemas"]["PatientResponseDto"];
    };
    RelationalPatientResponseDto: {
      _id: string;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      email: string;
      username: string;
      phone_number: string;
      /** @enum {string} */
      gender: "male" | "female";
      roles: ("patient" | "admin" | "therapist")[];
      /** @default false */
      is_deleted: boolean;
      /** @default false */
      is_banned: boolean;
      posts: components["schemas"]["PostResponseDto"][];
    };
    UpdatePatientDto: {
      email?: string;
      username?: string;
      phone_number?: string;
      gender?: string;
      is_banned: boolean;
      is_deleted: boolean;
      roles: ("patient" | "admin" | "therapist")[];
    };
    CreatePostDto: {
      body: string;
      patient: string;
    };
    UpdatePostDto: {
      body: string;
      /** @default false */
      is_deleted: boolean;
    };
    CreateFactoryDto: {
      /** @default 10 */
      length?: number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  AppController_index: {
    responses: {
      200: {
        content: never;
      };
    };
  };
  AdminsController_findAll: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["AdminResponseDto"][];
        };
      };
    };
  };
  AdminsController_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateAdminDto"];
      };
    };
    responses: {
      201: {
        content: never;
      };
    };
  };
  AdminsController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  AdminsController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  AdminsController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateAdminDto"];
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  PatientsController_findAll: {
    parameters: {
      query?: {
        /** @example 1 */
        page?: number;
        /** @example 10 */
        limit?: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["RelationalPatientResponseDto"][];
        };
      };
    };
  };
  PatientsController_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreatePatientDto"];
      };
    };
    responses: {
      201: {
        content: never;
      };
    };
  };
  PatientsController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PatientResponseDto"];
        };
      };
    };
  };
  PatientsController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  PatientsController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdatePatientDto"];
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  PatientsController_banPatient: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  PatientsController_unbanPatient: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  PostsController_findAll: {
    parameters: {
      query?: {
        /** @example 1 */
        page?: number;
        /** @example 10 */
        limit?: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PostResponseDto"][];
        };
      };
    };
  };
  PostsController_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreatePostDto"];
      };
    };
    responses: {
      201: {
        content: never;
      };
    };
  };
  PostsController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PostResponseDto"];
        };
      };
    };
  };
  PostsController_remove: {
    parameters: {
      header: {
        patient_id: string;
      };
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  PostsController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdatePostDto"];
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  PostsController_userRemovePost: {
    parameters: {
      header: {
        patient_id: string;
      };
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  SeedsController_create: {
    responses: {
      201: {
        content: never;
      };
    };
  };
  FactoriesController_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateFactoryDto"];
      };
    };
    responses: {
      201: {
        content: never;
      };
    };
  };
}
