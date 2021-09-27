import React, { useState } from "react"
import Modal from "@material-tailwind/react/Modal"
import ModalHeader from "@material-tailwind/react/ModalHeader"
import ModalBody from "@material-tailwind/react/ModalBody"
import ModalFooter from "@material-tailwind/react/ModalFooter"
import Button from "@material-tailwind/react/Button"
import Input from "@material-tailwind/react/Input"
import { useSelector, useDispatch } from "react-redux"
import { selectTodo, SetTodo } from "../redux/features/todoSlice"
import { selectUser } from "../redux/features/UserSlice"
import { useRouter } from "next/router"
import axios from "axios"

const GeoCodingTodo = () => {
  const [showModal, setShowModal] = useState(false)
  const [todoInput, setTodoInput] = useState("")
  const todo = useSelector(selectTodo)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleAddLocation = () => {
    console.log(todoInput)
    if (todoInput) {
      const addTodoPrisma = async () => {
        await axios
          .post(`${process.env.NEXT_PUBLIC_HOST}/api/createLocation`, {
            todo: todoInput,
            email: user.email,
          })
          .then(async data => {
            await axios
              .get(`${process.env.NEXT_PUBLIC_HOST}/api/createLocation`)
              .then(res => {
                dispatch(SetTodo(res.data.allLocations))
              })
          })
          .catch(err => console.log(err))
      }
      addTodoPrisma()
    }
    setTodoInput("")
    setShowModal(false)
  }

  const handleRemove = (id, userId) => {
    const remove = async id => {
      await axios
        .post(`${process.env.NEXT_PUBLIC_HOST}/api/removeTodoLocation`, {
          id: id,
          userId: userId,
        })
        .then(data => {
          dispatch(SetTodo(data.data.filtered))
        })
        .catch(err => console.log(err))
    }
    remove(id)
  }

  return (
    <div className="flex flex-col space-y-5">
      <Button
        color="lightBlue"
        type="button"
        onClick={e => setShowModal(true)}
        ripple="light"
      >
        Add your favorite location
      </Button>

      <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader toggler={() => setShowModal(false)}>
          Add a location
        </ModalHeader>
        <ModalBody>
          <Input
            type="text"
            color="lightBlue"
            size="regular"
            outline={true}
            value={todoInput}
            onChange={e => setTodoInput(e.target.value)}
            placeholder="Add location"
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

          <Button
            color="green"
            ripple="light"
            onClick={() => handleAddLocation()}
          >
            Add location
          </Button>
        </ModalFooter>
      </Modal>
      {todo?.map(item => (
        <div
          key={item.id}
          className="cursor-pointer  w-[300px] h-[50px] bg-pink-400  rounded flex justify-between items-center scale-75  hover:scale-100 p-4"
        >
          <div
            className="w-[290px] h-50px"
            onClick={() => router.push(`/Map?location=${item.Name}`)}
          >
            <p>{item.Name}</p>
          </div>
          <div onClick={() => handleRemove(item.id, item.UserId)}>❌</div>
        </div>
      ))}
    </div>
  )
}

export default GeoCodingTodo
