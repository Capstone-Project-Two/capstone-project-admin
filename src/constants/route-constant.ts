export enum ROUTER_PATH {
  HOMEPAGE = "/",
  PATIENTS = "/patients",
  CREDITS = "/credits",
  SUSPEND_USER = "/patients/suspend",
  THERAPISTS = "/therapists",
  APPOINTMENTS = "/appointments",
  APPOINTMENTS_REQUESTED = "/appointments?status=requested",
  APPOINTMENTS_SCHEDULED = "/appointments?status=scheduled",
  APPOINTMENTS_REJECTED = "/appointments?status=rejected",

  SOCKET_TEST = "/socket-test",

  POSTS = "/posts",
  POSTS_HISTORY = "/posts/history",
}
