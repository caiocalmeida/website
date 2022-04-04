import { useEffect } from "react"
import { useRouter } from "next/router"

export default function NotFoundRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  })

  return null
}