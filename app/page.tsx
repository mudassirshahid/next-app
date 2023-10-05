import Link from "next/link";
import ProductCard from "./components/ProductCard";
import styles from './components/ProductCard.module.css'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className={styles.card}>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}
