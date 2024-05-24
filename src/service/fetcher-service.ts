import { BASE_API_URL } from "@/constants/env-constant";

export const fetcher = (url: string) =>
  fetchDefault({ url }).then((res: any) => {
    return res;
  });

export async function fetchDefault({
  url,
  tags,
  revalidate,
}: {
  url: string;
  tags?: Array<string>;
  revalidate?: number;
}) {
  try {
    const res = await fetch(`${BASE_API_URL}${url}`, {
      cache: "no-store",
      next: {
        tags: tags,
        revalidate: revalidate,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (e) {
    console.log(e);
  }
}

export async function fetchPostDefault({
  url,
  data,
  method,
}: {
  url: string;
  data?: any;
  method?: "post" | "patch" | "delete";
}) {
  try {
    const res = await fetch(`${BASE_API_URL}${url}`, {
      method: method ?? "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  } catch (e: any) {
    console.log(e);
  }
}
