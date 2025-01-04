import { Amenties } from "../constants/constant";

const AmentiesScroll = () => {
  return (

<div className="overflow-x-hidden">
    <div className="py-12 animate-marquee whitespace-nowrap ">
        {
            Amenties.map((item,index)=>(
                <span className="text-2xl mx-4 text-gray-400" key={index}>{item}</span>
            ))
        }
	 
	    
    </div>
</div>
    
  )
}

export default AmentiesScroll