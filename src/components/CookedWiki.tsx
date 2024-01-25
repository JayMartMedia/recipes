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
        <span>View on <a href={url} title="test">cooked.wiki</a></span>
    )
}
