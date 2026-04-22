import axios from "axios";
import { domain } from "../store/domain";

function getPersistedAuthState() {
  try {
    const localRaw = localStorage.getItem("auth-token");
    if (localRaw) {
      return JSON.parse(localRaw)?.state || {};
    }

    const sessionRaw = sessionStorage.getItem("auth-token");
    if (sessionRaw) {
      return JSON.parse(sessionRaw)?.state || {};
    }
  } catch (error) {
    console.log(error);
  }

  return {};
}

export function getAuthToken() {
  return getPersistedAuthState()?.token || null;
}

export function toFormData(payload = {}) {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    formData.append(key, value);
  });

  return formData;
}

export const apiClient = axios.create({
  baseURL: domain,
  headers: {
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = getAuthToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
