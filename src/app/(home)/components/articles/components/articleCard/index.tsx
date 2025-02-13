import Image from "next/image";
import Link from "next/link";
import { Article } from "../../articles.types";

const ArticleCard = ({magazine} : {magazine: Article}) => {
    return (
        <Link
            className="bg-white mb-1 border  rounded-sm border-neutral-200 user-select-none rounded-sm flex flex-col h-full overflow-hidden"
             href={magazine.url.uri}>
            <div className="relative min-h-[200px]">
            <Image 
                className="w-full object-cover inline-block"
                src={magazine.image}
                alt={magazine.title}
                fill={true}
            />
            </div>
            <div className="mt-2 mb-3 px-4 ellipsis-2 text-body-2 text-neutral-900 w-full text-right">
                {magazine.title}
            </div>
        </Link>
    )
}
export default ArticleCard