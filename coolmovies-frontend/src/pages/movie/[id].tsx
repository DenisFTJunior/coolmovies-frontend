import { useRouter } from 'next/router'

const Movie = () => {
  const router = useRouter()
  const { id } = router.query

  return <></>
}

export default Movie