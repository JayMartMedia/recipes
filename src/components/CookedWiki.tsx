import BrowserOnly from "@docusaurus/BrowserOnly";

export function CookedWiki () {
    return (
        <BrowserOnly>
            {() => <CookedWikiLink />}
        </BrowserOnly>
    );
}

function CookedWikiLink () {
    const url = "https://cooked.wiki/" + window.location.href;
    return (
        <span>View on <a href={url} title="A site that shows a clean recipe view (not affiliated)">cooked.wiki</a></span>
    )
}
