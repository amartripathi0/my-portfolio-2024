import { client, sanityFetch } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

export async function getSanityData(query: string){
    return await client.fetch(query);
}
