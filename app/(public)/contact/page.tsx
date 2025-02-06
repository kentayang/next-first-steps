import { Metadata } from "next"

export const metadata: Metadata = {
    title: "SEO Contacts",
    description: "SEO description",
    keywords: ["Gian","Contact Page","información"]
}

export default function ContactPage(){
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}