import React, { useState, useEffect } from "react"
import Card from "@material-tailwind/react/Card"
import CardHeader from "@material-tailwind/react/CardHeader"
import CardBody from "@material-tailwind/react/CardBody"
import CardFooter from "@material-tailwind/react/CardFooter"
import InputIcon from "@material-tailwind/react/InputIcon"
import Button from "@material-tailwind/react/Button"
import H5 from "@material-tailwind/react/Heading5"
import { Magic } from "magic-sdk"
import { useDispatch } from "react-redux"
import { Add } from "../redux/features/UserSlice"

let magic = ""
if (typeof window !== "undefined") {
  magic = new Magic(process.env.magicKEY)
}

const SignIn = () => {
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = async event => {
    event.preventDefault()

    if (email) {
      await magic.auth.loginWithMagicLink({ email })

      let user = await magic.user.getMetadata()
      console.log(user)
      dispatch(Add(user))
    }
  }

  return (
    <div className="w-[400px]">
      <Card>
        <CardHeader color="lightBlue" size="lg">
          <H5 color="white">Login</H5>
        </CardHeader>

        <CardBody>
          <div className="mb-8 px-4">
            <InputIcon
              type="email"
              color="lightBlue"
              onChange={e => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex justify-center">
            <Button
              onClick={handleSubmit}
              color="lightBlue"
              buttonType="link"
              size="lg"
              ripple="dark"
            >
              Magic SignIn
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignIn
