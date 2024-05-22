import { API_ROUTE } from "@/constants/api-route-constant";
import { BASE_API_URL } from "@/constants/env-constant";

export async function fetchDefault({
  url,
  tags,
  revalidate,
}: {
  url: API_ROUTE;
  tags?: Array<string>;
  revalidate?: number;
}) {
  try {
    const res = await fetch(`${BASE_API_URL}${url}`, {
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
