import React from "react";
import Cards from './../../components/cards/page'
import data from './../../components/Allproductsjson//page'
const page = () => {

  return <div>
    <section className='flex gap-5 flex-wrap justify-between'>


      {
        data.map((item) => {
          return (
            <>
              <Cards id={item.id} image={item.image} heading={item.heading} subheading={item.subheading} price={item.price} />
            </>
          )
        })
      }
    </section>

  </div>;
};

export default page;
