import { httpCreate } from "@/http";

const http = httpCreate('/api/article');

export function getArticleList() {
  return http.get('/list');
}