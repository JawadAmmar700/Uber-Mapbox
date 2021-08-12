import React from "react"
import SignIn from "./SignIn"
import Button from "@material-tailwind/react/Button"
import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux"
import { selectUser, Remove } from "../redux/features/UserSlice"
import GeoCodingTodo from "./GeoCodingTodo"
import { Magic } from "magic-sdk"
import { useCookies } from "react-cookie"

let magic = ""
if (typeof window !== "undefined") {
  magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_KEY)
}

const EntryPage = () => {
  const router = useRouter()
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"])

  const handleLogout = async () => {
    await magic.user.logout()
    removeCookie("userToken")
    dispatch(Remove())
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-300">
      <div className="absolute top-4 right-4 flex space-x-4">
        {user && (
          <>
            <Button
              color="red"
              buttonType="outline"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="dark"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </>
        )}
        <Button
          color="lightBlue"
          buttonType="outline"
          size="regular"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="dark"
          onClick={() => router.push("/Map")}
          disabled={!user ? true : false}
        >
          View Map
        </Button>
      </div>

      {user && (
        <h1 className="absolute top-4 left-8">
          <span className="text-3xl text-blue-400 mr-4">Hello</span>

          <span className="text-gray-700">{user?.email}</span>
        </h1>
      )}
      {!user ? <SignIn /> : <GeoCodingTodo />}
    </div>
  )
}

export default EntryPage
