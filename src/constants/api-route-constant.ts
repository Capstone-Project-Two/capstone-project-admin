export enum API_ROUTE {
  //Patient Routes
  BASE_PATIENT = "/patients",
  BAN_PATIENT = "/patients/ban-patient",
  UNBAN_PATIENT = "/patients/unban-patient",

  //Therapist Routes
  BASE_THERAPIST = "/therapists",

  //Credits Routes
  BASE_CREDIT = "/credits",
  ALL_CREDIT = "/credits/all",

  /** Posts */
  BASE_POSTS = "/posts",

  /** Like posts */
  BASE_LIKE_POSTS = "/like-posts",
  GET_ALL_SPECIALIZATIONS = "/therapists/specializations",

  //Therapist Routes
  BASE_APPOINTMENTS = "/appointments",
}
