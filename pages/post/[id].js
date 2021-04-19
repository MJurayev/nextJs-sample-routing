import { useRouter } from 'next/router'
export default function Post(){
    const router = useRouter()
    
    return (
        <>
            Post{router.query.id}
        </>
    )
}