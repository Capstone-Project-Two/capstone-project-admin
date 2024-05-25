import { BASE_API_URL } from "@/constants/env-constant";

export const fetcher = (url: string) =>
  fetchDefault({ url }).then((res: any) => {
    return res;
  });

export async function fetchDefault({
  url,
  tags,
  revalidate,
  options,
}: {
  url: string;
  tags?: Array<string>;
  revalidate?: number;
  options?: {
    method: "POST" | "PATCH" | "DELETE";
    data?: any;
  };
}) {
  try {
    const res = await fetch(`${BASE_API_URL}${url}`, {
      body: JSON.stringify(options?.data),
      method: options?.method ?? "GET",
      cache: "no-store",
      headers: {
        "Content-type": "application/json",
      },
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
