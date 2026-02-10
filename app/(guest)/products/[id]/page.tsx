import {products} from "@/lib/products"
import { notFound } from "next/navigation"

interface Props {
  params: {id: string}
}

export default async function ProductDetails({params}: Props){

  const {id} = await params

  const product = products.find(p => p.id === id)

  if(!product) return notFound()
    
  return(
    <>
      <div>
        <h1>{product?.name}</h1>
        <p>{product?.description}</p>
      </div>
    </>
  )
}

