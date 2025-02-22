import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/performance">Performance</Link>
        <Link href="/reliability">Reliability</Link>
        <Link href="/scale">Scaling</Link>
      </div>
      Home Page
    </div>
  );
}
