import React from "react";
import Cards from "../../components/cards";
import data from "../../components/Allproductsjson";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <section className="flex gap-5 flex-wrap justify-between">
        {data.map((item) => {
          return (
            <>
              {item.Gender === "female" ? (
                <Link href={`/pages/product/${item.id}`} key={item.id}>
                  <Cards
                    id={item.id}
                    image={item.image}
                    heading={item.heading}
                    subheading={item.subheading}
                    price={item.price}
                  />
                </Link>
              ) : (
                ""
              )}
            </>
          );
        })}
      </section>
    </div>
  );
};

export default page;
