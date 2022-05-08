import { http } from "./http_service";

export function createResource(resource) {
  return http().post("/resources/store", resource);
}
export function loadResources() {
  return http().get("/resources");
}
export function toggleIsPinned(id) {
  return http().get("/toggle/pinned/" + id);
}
export function loadResource(id) {
  return http().get("/resources/show/" + id);
}
export function loadResourceSpots(id) {
  return http().get("/resources/spots/" + id);
}
export function updateResource(id, resource) {
  return http().put("/resources/" + id, resource);
}
export function deleteResources(id) {
  return http().delete("/resources/" + id);
}
