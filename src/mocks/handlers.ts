import { http, HttpResponse } from "msw";
import shoesMock from "./shoesMock";

const apiUrl = import.meta.env.VITE_API_URL;
const mock = shoesMock;

export const handlers = [
  http.get(`${apiUrl}/shoes`, async () => {
    return HttpResponse.json({ shoes: mock });
  }),
];
