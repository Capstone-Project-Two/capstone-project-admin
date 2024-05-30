"use client"

import { socketClient } from "@/lib/web-socket/socket"
import { Button } from "antd"
import { useEffect, useState } from "react"

type Props = {}

function SocketTestPage({ }: Props) {
  const [doctors, setDoctors] = useState<Array<string>>([])
  useEffect(() => {
    socketClient().on('on.book', (data) => {
      setDoctors([data])
    })
  }, [])

  const book = () => {
    socketClient().emit('book', "This doctor 1")
  }

  return (
    <div>
      <Button onClick={() => book()}>
        Book
      </Button>
      {doctors?.map((doctor, index) => (
        <div key={index}>
          {doctor}
        </div>
      ))}
    </div>
  )
}

export default SocketTestPage