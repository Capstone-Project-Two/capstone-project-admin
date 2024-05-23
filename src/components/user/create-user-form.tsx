"use client"
import { createUser } from "@/actions/post-action"
import { useState, useTransition } from "react"
import { isValidResponse } from "@/utils/validate-response"
import { toast } from "sonner"

type Props = {}

function CreateUserForm({ }: Props) {
  const [input, setInput] = useState("test@gmail.com")
  const handleInput = (value: string) => {
    setInput(value)
  }

  const [isPending, startTransition] = useTransition()

  const handleSubmit = async () => {
    startTransition(async () => {
      await createUser({ email: input }).then((res) => {
        if (!isValidResponse(res.statusCode as number)) {
          res.message.forEach((mes: string) => {
            toast(mes)
          })
        }
      }).catch(e => {
        console.log(e)
      })
    })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit()
    }}>
      <input defaultValue={input} type="text" onChange={(e) => {
        handleInput(e.target.value)
      }} />
      <button type="submit">Create user</button>

      {isPending && <div>Loading...</div>}
    </form>
  )
}

export default CreateUserForm