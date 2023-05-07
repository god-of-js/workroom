export function readFile(file: File) {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  let fileUrl: string | null = null
  return new Promise((resolve) => {
    reader.onload = () => {
      fileUrl = reader.result as string
      resolve(reader.result)
    }
  }).then(() => {
    return (fileUrl as string) || null
  })
}
