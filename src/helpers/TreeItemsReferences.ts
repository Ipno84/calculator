let instance: TreeItemsReferences | null = null;

interface References {
    [key: string]: Element;
}

class TreeItemsReferences {
    references: References = {};

    constructor() {
        if (!instance) instance = this;
        return instance;
    }

    addReference(key: string, ref: Element | null = null) {
        if (ref) {
            this.references = {
                ...this.references,
                [key]: ref,
            };
        }
    }

    getReference(key?: string) {
        const { references } = this;
        if (key && references && references[key]) return references[key];
        return null;
    }

    scrollDisplayOperationScroller() {
        const element: Element | null = this.getReference(
            'DisplayOperationScroller'
        );
        if (element) element.scrollLeft = element.scrollWidth;
    }
}

const TreeItemsReferencesInstance: TreeItemsReferences = new TreeItemsReferences();

export default TreeItemsReferencesInstance;
