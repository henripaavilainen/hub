import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>{" | "}
      <Link href="/weather">Weather</Link>{" | "}
      <Link href="/news">News</Link>{" | "}
      <Link href="/games">Games</Link>
    </nav>
  );
}