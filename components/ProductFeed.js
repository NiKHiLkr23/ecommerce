import React from "react";
import Produce from "./categories/Produce";
import Sweets from "./categories/Sweets";
import Bakery from "./categories/Bakery";
import Canned from "./categories/Canned";
import Dairy from "./categories/Dairy";
import Frozen from "./categories/Frozen";
import Meat from "./categories/Meat";

function ProductFeed({ products }) {
  return (
    <div className="flex flex-col md:w-full md:overflow-x-auto">
      <section id="produce" name="produce" className="section">
        <Produce products={products} />
      </section>

      <section id="sweets" name="sweets" className="section">
        <Sweets products={products} />
      </section>

      <section id="bakery" name="bakery" className="section">
        <Bakery products={products} />
      </section>

      <section id="canned" name="canned" className="section">
        <Canned products={products} />
      </section>

      <section id="dairy" name="dairy" className="section">
        <Dairy products={products} />
      </section>

      <section id="frozen" name="frozen" className="section">
        <Frozen products={products} />
      </section>

      <section id="meat" name="meat" className="section">
        <Meat products={products} />
      </section>
    </div>
  );
}

export default ProductFeed;
