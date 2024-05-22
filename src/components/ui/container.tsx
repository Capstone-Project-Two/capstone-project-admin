
type Props = {
  children: React.ReactNode
}

function Container({ children }: Props) {
  return (
    <main className="md:p-6 sm:p-4 p-2.5 bg-blue-300 w-full">
      {children}
    </main>
  )
}

export default Container