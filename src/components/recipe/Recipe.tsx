import { ChangeEvent, useState } from "react";

type Ingredient = {
    value: number;
    unit: string;
    title: string;
    description?: string;
}
type Ingredients = Record<string, Ingredient>;

type Instruction = string;

type Props = {
    ingredients: Ingredients;
    instructions: Instruction[];
}

export function Recipe (props: Props) {
    const [servings, setServings] = useState<number>(1);
    const ingredients = Object.entries(props.ingredients).map(([key,val]) => ({field: key, ...val}));
    const instructions = props.instructions;

    function onServingsChange (e: ChangeEvent<HTMLInputElement>) {
        const newServings = Number(e.target.value) >= 0 ? e.target.value : 0;
        setServings(Number(newServings));
    }

    return(
        <div>
            <h2>Servings</h2>
            <input type='number' value={servings} onChange={onServingsChange}/>
            <button onClick={() => setServings(prev => prev > 1 ? prev - 1 : 0)}>-</button>
            <button onClick={() => setServings(prev => prev + 1)}>+</button>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map(i => {
                    return <li>{i.value * servings} {i.unit} {i.title} {i.description && `(${i.description})`}</li>
                })}
            </ul>
            <h2>Instructions</h2>
            <ol>
                {instructions.map(i => {
                    return <li>{i}</li>
                })}
            </ol>
        </div>
    )
}