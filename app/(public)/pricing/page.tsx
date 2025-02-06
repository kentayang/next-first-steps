import { Metadata } from "next"

export const metadata: Metadata = {
    title: "SEO Pricing",
    description: "SEO description",
    keywords: ["Gian","Pricing Page","Precios"]
}

export default function PrincigPage(){
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}