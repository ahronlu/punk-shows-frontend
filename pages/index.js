import Link from "next/link";

import Layout from "@/components/Layout";

import { API_URL } from "@/config/index";
import events from "./api/events";

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Shows</h1>
      {events.map((event) => (
        <h2>{event.name}</h2>
      ))}
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
