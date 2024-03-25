import { Link } from "react-router-dom"

const Blog =({blog})=>{
    const {id,title,description,readable_publish_date,slug,comments_count,published_timestamp,cover_image,published_at}=blog
    return(
        <div className="border shadow-lg rounded-md mt-20">
       <Link to={`/blogdetails/${id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group transition hover:scale-105 hover:no-underline focus:no-underline ">
				<img role="presentation" className="object-cover w-full rounded h-44 " src={cover_image}/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs ">{new Date(published_at).toLocaleDateString()}</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</Link>
       
    </div>
    )
}
export default Blog