import WTPlugin from "./main";
import { MarkdownPostProcessorContext } from "obsidian";
import { h, render, FunctionComponent } from "preact";

/**
 * I am taking heavy inspiration from 
 * https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/src/MarkdownPostProcessor.ts
 * 
 * ChatGPT helped fill in a lot of gaps
 * https://chat.openai.com/share/fe78d051-540e-44e8-b115-5f523c1a7e49
 * 
 * - Tucker
 */



export interface APIEditorProps {
    el: HTMLElement;
    ctx: MarkdownPostProcessorContext;
}

export const APIEditor: FunctionComponent<APIEditorProps> = ({
    el,
    ctx
}) => {
    return <div>
        Hello World from TSX! {ctx.frontmatter!.yaml_key_value_here}
    </div>;
};

export async function InitPostProcessor(wt: WTPlugin) {

    wt.registerMarkdownPostProcessor((el, ctx) => {
        console.log("Markdown Post Processing:", el, ctx)
        const wtFile = ctx.frontmatter?.hasOwnProperty("web-tester-plugin");
        if (wtFile) {
            // Clear the existing content
            el.innerHTML = '';

            // Render the custom Preact content into the element
            const content = APIEditor({
                el,
                ctx
            })
            render(content, el);

            return;
        }
    });
}