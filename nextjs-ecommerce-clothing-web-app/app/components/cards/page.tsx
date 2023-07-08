import Image from 'next/image'
type  propTypes = {
    id: number,
    image: any,
    heading: string,
    subheading: string,
    price: number,
  };

const page = (props:propTypes ) => {
    return (

            <div className=" w-full  justify-between hover:scale-110 hover:ease-in duration-300 cursor-pointer  max-w-xs ju" key={props.id}>
                <div className="bg-[#d7d7d9]  flex justify-center items-end min-w-fit h-[250px]">
                    <Image src={props.image} className='w-auto h-full' alt="" />
                </div>
                <div className="flex flex-col">
                    <strong> {props.heading}  <br />
                        <span className='text-slate-600'>
                            {props.subheading}
                        </span>
                    </strong>
                    <strong>{props.price}</strong>
                </div>
            </div>
    )
}

export default page