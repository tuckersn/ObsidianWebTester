import WTPlugin from "main";
import { Notice } from "obsidian";


export async function InitRibbon(wt: WTPlugin) {
    // This creates an icon in the left ribbon.
    const ribbonIconEl = this.addRibbonIcon('dice', 'Sample Plugin', (evt: MouseEvent) => {
        // Called when the user clicks the icon.
        new Notice('This is a notice!');
    });

    // Perform additional things with the ribbon
    ribbonIconEl.addClass('my-plugin-ribbon-class');
}