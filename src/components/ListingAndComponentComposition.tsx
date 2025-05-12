import { useState } from "react";

export default function ListingAndComponentComposition() {
    const [items, setItems] = useState<Map<string, number>>(new Map());
    const [itemToAdd, setItemToAdd] = useState("");

    const addItem = (item: string) => {
        const newItems = new Map(items);
        if (newItems.has(item)) {
            newItems.set(item, newItems.get(item)! + 1);
        } else {
            newItems.set(item, 1);
        }
        setItems(newItems);
    };

    const removeItem = (item: string) => {
        const newItems = new Map(items);
        const count = newItems.get(item) || 0;
        if (count > 1) {
            newItems.set(item, count - 1);
        } else {
            newItems.delete(item);
        }
        setItems(newItems);
    };

    return (
        <div className="container">
            <h4>Item List</h4>
            <div className="row">
                <input
                    type="text"
                    value={itemToAdd}
                    onChange={(e) => setItemToAdd(e.target.value)}
                />
                <button
                    disabled={itemToAdd.trim().length === 0}
                    onClick={() => {
                        addItem(itemToAdd.trim());
                        setItemToAdd("");
                    }}
                >
                    Add
                </button>
            </div>        
            <div className="row">
                {Array.from(items.entries()).map(([name, count]) => (
                    <ItemCard key={name} name={name} count={count} onRemove={removeItem} />
                ))}
            </div>
        </div>
    );
}

type ItemCardProps = {
    name: string;
    count: number;
    onRemove: (name: string) => void;
};

function ItemCard({ name, count, onRemove }: ItemCardProps) {
    return (
        <div className="card col-3">
            <h3>{name}</h3>
            <p> {count} {name}{count > 1 ? "s" : ""}</p>
            <button onClick={() => onRemove(name)}>-</button>
        </div>
    );
}
