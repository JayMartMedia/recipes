import { ChangeEvent, useEffect, useState } from "react";
import { replaceTokens } from "./replacement";

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
    const [batches, setBatches] = useState<number>(getInitialBatchCount);
    const ingredients = Object.entries(props.ingredients).map(([key,val]) => ({field: key, ...val}));
    const instructions = props.instructions;

    /**
     * Called whenever value in input field changes
     */
    function onBatchesChange (e: ChangeEvent<HTMLInputElement>) {
        const newBatches = Number(e.target.value) >= 0 ? e.target.value : 0;
        setBatches(Number(newBatches));
    }

    /**
     * When React batches state is changed,
     * push change to address bar
     */
    useEffect(() => {
        try{
            window.history.pushState(
                {
                    title:document.title,
                    batches: batches
                },
                `${document.title} ${batches} batches`,
                `?batches=${batches}`
            );
        }catch(e){
            console.error('failed to push batch change to address bar', e);
        }
    }, [batches]);

    return(
        <div>
            <h2>Batches</h2>
            <input type='number' value={batches} onChange={onBatchesChange}/>
            <button onClick={() => setBatches(prev => prev > 1 ? prev - 1 : 0)}>-</button>
            <button onClick={() => setBatches(prev => prev + 1)}>+</button>
            <p>(a single batch may be multiple servings)</p>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map(ingredient => {
                    return <li key={ingredient.title}>{ingredient.value * batches} {ingredient.unit} {ingredient.title} {ingredient.description && `(${ingredient.description})`}</li>
                })}
            </ul>
            <h2>Instructions</h2>
            <ol>
                {instructions.map(instruction => {
                    const a = replaceTokens(
                        instruction,
                        props.ingredients,
                        {
                            transformer: (a) => `${a.title} (${a.value*batches} ${a.unit})`
                        }
                    )
                    return <li key={instruction}>{a}</li>
                })}
            </ol>
        </div>
    )
}

/**
 * Called when React batches state is initialized.
 * Gets initial batches value from batches query param of url if available,
 * otherwise if batches query param can't be converted to a number, or is not
 * present at all, returns 1 for a single batch.
 * 
 * @returns {number} the starting value for React batches state
 */
function getInitialBatchCount (): number {
    console.log('getting initial batches count')
    const url = new URL(window.location.href)
    const batchesQueryParam = url.searchParams.get('batches');
    if(batchesQueryParam){
        try{
            const _batches = Number(batchesQueryParam);
            return _batches;
        }catch(e){
            console.error('Batches should be a number', batchesQueryParam);
        }
    }
    return 1;
}
