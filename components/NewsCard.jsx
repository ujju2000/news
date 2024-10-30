import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function NewsCard ({news}) {
    const router = useRouter();

    const handleClick = (e) => {
        router.push(news.url);
    }
    return (
        <Card className = 'm-5 cursor-pointer ' onClick = {(e) => handleClick(e)}>

            <CardHeader>
                <CardTitle>{news?.title}</CardTitle>
                <CardDescription>{news?.description}</CardDescription>
            </CardHeader>
            <CardContent>
               
                <img src = {news?.image} className = 'object-contain' />
            </CardContent>
            
        </Card>
    )
}