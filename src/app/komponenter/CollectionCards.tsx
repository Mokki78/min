import type { Collection } from "../komponenter/Collection";

type Props = {
  collection: Collection;
};

export default function CollectionCard({ collection }: Props) {
  return (
     
   
    <div
      className={`relative flex flex-col border p-6 mt-10 ${
        collection.recommended ? "border-neutral-800" : "border-neutral-200"
      }`}
    >
      {collection.recommended && (
        <span className="mb-4 text-xs uppercase tracking-widest">
          Anbefalt kolleksjon
        </span>
      )}

      <h3>{collection.name}</h3>

      <p>{collection.price}</p>

      <p>{collection.description}</p>

   

      <div className="my-6 border-t border-neutral-200">
        <p>Dette inkluderer</p>

        <ul className="space-y-3">
          {collection.products.map((product) => (
            <li key={product} className="text-sm text-neutral-600">
              - {product}
            </li>
          ))}
        </ul>

    
      </div>
    </div>
  );
}
