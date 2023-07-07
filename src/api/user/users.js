import client from "../client";
import authStorage from "../../auth/storage";

export const authenticate = async () => {
  const token = await authStorage.getToken();
  if (!token) {
    throw new Error("");
  }

  return await client.get("/users/authenticate", {
    headers: {
      Authorization: token,
    },
  });
};

export const joinSocket = async (socketId) => {
  const token = await authStorage.getToken();
  if (!token) {
    throw new Error("");
  }

  return await client.get(`/users/socket/join?socketId=${socketId}`, {
    headers: {
      Authorization: token,
    },
  });
};

export const toggleNotifications = async () => {
  const token = await authStorage.getToken();

  return await client.patch(
    "/users/notifications/toggle",
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const requestAccountDeletion = async () => {
  const token = await authStorage.getToken();

  return await client.get("/users/account/deletion/request", {
    headers: {
      Authorization: token,
    },
  });
};

export const switchLanguage = async () => {
  const token = await authStorage.getToken();

  return await client.patch(
    "/users/profile/language/switch",
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const seeNotifications = async () => {
  const token = await authStorage.getToken();

  return await client.get("/users/notifications/see", {
    headers: {
      Authorization: token,
    },
  });
};

export const updateAvatar = async (image) => {
  const token = await authStorage.getToken();

  const body = {
    avatar: {
      data: image.base64,
      name: Date.now().toString(),
    },
  };

  return await client.patch("/users/profile/avatar/update", body, {
    headers: {
      Authorization: token,
    },
  });
};

export const updateProfile = async (data) => {
  const token = await authStorage.getToken();

  return await client.patch("/users/profile/update", data, {
    headers: {
      Authorization: token,
    },
  });
};

export const savePlace = async (data) => {
  const token = await authStorage.getToken();

  return await client.post("/users/places/add", data, {
    headers: {
      Authorization: token,
    },
  });
};

export const updatePlace = async (
  placeId,
  title,
  type,
  longitude,
  latitude
) => {
  const token = await authStorage.getToken();

  const body = {
    title,
    type,
    longitude,
    latitude,
  };

  return await client.patch(`/users/places/${placeId}/update`, body, {
    headers: {
      Authorization: token,
    },
  });
};

export const deletePlace = async (placeId) => {
  const token = await authStorage.getToken();

  return await client.delete(`/users/places/${placeId}/delete`, {
    headers: {
      Authorization: token,
    },
  });
};

export const getDriversStats = async () => {
  const token = await authStorage.getToken();

  return await client.get("/users/admin/stats", {
    headers: {
      Authorization: token,
    },
  });
};

export const getAllDrivers = async (driverStatus, page, limit) => {
  const token = await authStorage.getToken();

  return await client.get(
    `/users/admin/drivers/get?driverStatus=${driverStatus}&page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const getAllPassengers = async (page, limit) => {
  const token = await authStorage.getToken();

  return await client.get(
    `/users/admin/passengers/get?page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
};
