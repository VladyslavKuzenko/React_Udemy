import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li><Link href="/news/nextjs-is-a-grreate">NewsJS Is A greate Frameworl</Link></li>
        <li><Link href="/news/nextjs-is-a-wooooooow">NewsJS Is A wwooooooooooow</Link></li>
      </ul>
    </>
  )
}