import { useEffect } from "react";
import useSWR from "swr";
import format from "comma-number";

import fetcher from "@/lib/fetcher";

export default function ViewCounter({ slug }) {
  // const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = "";

  

  return `${views ? format(views) : "–––"} views`;
}
