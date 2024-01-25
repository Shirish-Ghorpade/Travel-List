import { useState } from "react";

export function Form({ onAddItems }) {
  // tya input madhle jithe me item name takto tho state manage karnar description variable madhe
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // jar description nahi means pack kay karnar so NO description so NO object creation
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    onAddItems(newItem);

    // form submit zala
    // values submit zalya obj madhe
    // aata tho object send kar tya packed list madhe
    // form la submit var click kele ki inital value ne set kar
    setDescription("");
    setQuantity(1);
  }
  return (
    // React madhe form use karaycha asel tar html chya form tag cha use karaycha
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      {/* select ha html cha tag ahe jo options select karnya sathi banvtat */}
      {/* select tag banvaycha and tya madhe options tag banvaycha and je options lagtil te dyayche */}
      {/* keep this point in your JSX madhe me je pn html sodun use karen te asnar JS ani js always {} madhe yenar for eg. value={1} */}
      {/* see the below code */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option> */}
        {/* but mala ase 20 options pahije mag kay me 20 times hai banvu ka ? */}
        {/* Use js syntax see below*/}
        {/* Array.from({ length: 20 }, (_, i) => i + 1) ya synatx ne me 1 to 20 numbers cha array create kela ahe */}
        {/* nantar tya 1 to 20 chya arr la map lavla and unique key dila */}
        {/* tya map madhun one by one send kele option madhe and 20 options create kele */}
        {/* /////////////////////NEW CONCEPT///////////////////////// */}
        {/* Ithe me tya select madhe jo quantity variable madhe asel thi value show karnar */}
        {/* quantity variable madhe me value set karnar using setQuantity function and tya madhe me event ne select kele la number set karnar */}
        {/* onChange={(e) => setQuantity(e.target.value)} */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* basic input field banvla */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      {/* add button banvle */}
      <button>Add</button>
    </form>
  );
}
