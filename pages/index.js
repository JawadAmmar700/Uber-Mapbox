import React, { useLayoutEffect } from "react"
import Head from "next/head"
import EntryPage from "../components/EntryPage"
import { useDispatch } from "react-redux"
import { Check } from "../redux/features/UserSlice"
import { SetTodo } from "../redux/features/todoSlice"
import axios from "axios"
import { Magic } from "magic-sdk"
import { useRouter } from "next/router"

let magic = ""
if (typeof window !== "undefined") {
  magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_KEY)
}

export const getServerSideProps = async ({ req, res }) => {
  return {
    props: { user: JSON.parse(req?.cookies?.userToken) || null },
  }
}

export default function Home({ user }) {
  const dispatch = useDispatch()
  const router = useRouter()

  useLayoutEffect(() => {
    if (user) {
      dispatch(Check(user))
    }
    const chechUser_FetchTodos = async () => {
      try {
        await axios.get("/api/createLocation").then(res => {
          dispatch(SetTodo(res.data.allLocations))
        })
      } catch (err) {
        console.log(err)
      }
    }
    chechUser_FetchTodos()
  }, [])

  return (
    <div>
      <Head>
        <title>Uber-clone Mapbox </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <EntryPage />
    </div>
  )
}
