import { useRouter } from "next/router";

export default function Post() {
    const router = useRouter();
    return (
      <>
        <h1>Bom dia3 {router.query.id}</h1>
        <p>{router.asPath}</p>
      </>
    )
  }
  