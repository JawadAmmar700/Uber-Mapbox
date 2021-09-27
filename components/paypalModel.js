import React, { useState } from "react"
import Modal from "@material-tailwind/react/Modal"
import ModalHeader from "@material-tailwind/react/ModalHeader"
import ModalBody from "@material-tailwind/react/ModalBody"
import ModalFooter from "@material-tailwind/react/ModalFooter"
import Button from "@material-tailwind/react/Button"
import { PayPalButton } from "react-paypal-button-v2"
import { useSelector } from "react-redux"
import { selectUser } from "../redux/features/UserSlice"
const paypalModel = ({ showModal, setShowModal, price }) => {
  const user = useSelector(selectUser)

  return (
    <div>
      <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader toggler={() => setShowModal(false)}>
          Paypal checkOut
        </ModalHeader>
        <ModalBody>
          <PayPalButton
            amount={price}
            onSuccess={(details, data) => {
              alert("Transaction completed by " + user?.email)
              setShowModal(false)
            }}
            options={{
              clientId: process.env.NEXT_PUBLIC_PAYPAL_KEY,
            }}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="red"
            buttonType="link"
            onClick={e => setShowModal(false)}
            ripple="dark"
          >
            Close
          </Button>

          <Button color="green" ripple="light">
            Add location
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default paypalModel
