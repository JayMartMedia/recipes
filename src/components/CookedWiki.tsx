export function CookedWiki () {
    const url = "https://cooked.wiki/" + window.location.href;
    return (
        <span>View on <a href={url} title="test">cooked.wiki</a></span>
    )
}
