import { useLoaderData } from "react-router-dom"
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw"
const Contents =()=>{
    const blog = useLoaderData()
    const {title,description,readable_publish_date,slug,comments_count,published_timestamp,cover_image,published_at,tags,body_html}=blog
    return(
        <div>
         <div rel="noopener noreferrer" href="#" className=" group border border-opacity-30 p-2 hover:no-underline focus:no-underline ">
				<img role="presentation" className="object-cover w-full rounded h-44 " src={cover_image}/>
                <div className="flex flex-wrap space-x-2 text-sm dark:text-gray-600">
			{
                tags.map(tag =><a key={tag} rel="noopener noreferrer" href="#" className="p-1 hover:underline">#{tag}</a>)
            }
			
		</div>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
				</div>
			</div>
    </div>
    )
    
}
export default Contents