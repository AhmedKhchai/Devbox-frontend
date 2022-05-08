import { http } from "./http_service";

export function createFolder(category) {
  return http().post("/categories/store", category);
}
export function loadFolders() {
  return http().get("/categories");
}
export function loadFolder(id) {
  return http().get("/categories/show/" + id);
}
export function loadFolderSpots(id) {
  return http().get("/categories/spots/" + id);
}
export function updateFolder(id, category) {
  return http().put("/categories/" + id, category);
}
export function deleteFolders(id) {
  return http().delete("/categories/" + id);
}
