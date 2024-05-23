"use client"
import { createUser } from "@/actions/post-action"
import { useState, useTransition } from "react"
import { useToast } from "../ui/use-toast"
import { isValidResponse } from "@/utils/validate-response"

type Props = {}

function CreateUserForm({ }: Props) {
  const [input, setInput] = useState("test@gmail.com")
  const { toast } = useToast()
  const handleInput = (value: string) => {
    setInput(value)
  }

  const [isPending, startTransition] = useTransition()

  const handleSubmit = async () => {
    startTransition(async () => {
      await createUser({ email: input }).then((res) => {
        if (!isValidResponse(res.statusCode as number)) {
          toast({
            title: res.message
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