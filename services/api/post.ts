const url = `http://localhost:3000/api/post`;

export const getList = async () => {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data list");
  }

  const data = (await res.json()) as IEventResponse;

  return data;
};

export const getItem = async (payload: { id: string }) => {
  const res = await fetch(`${url}?id=${payload.id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data item");
  }

  const { data } = await res.json();

  return data as IEvent;
};
export const getItemByKeyword = async (payload: { keyword: string }) => {
  const res = await fetch(`${url}?keyword=${payload.keyword}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch search item");
  }

  const { data } = await res.json();

  return data as IEvent[];
};

export const setItem = async (payload: EventPayloadType) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch set data");
  }

  return res;
};

export const updateItem = async (payload: EventPayloadType) => {
  const res = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch update data");
  }

  return res;
};