export interface WebTesterEndpoint {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'TRACE';
    url: string;
    headers: Record<string, string>;
    body: string;
    response: {
        body: string;
        headers: Record<string, string>;
        status: number;
    };
    request: {
        body: string;
    };
}


export interface WebTesterDocument {
    overview: string;
    endpoints: WebTesterEndpoint[];
    metadata: WebTesterMetadata;
}

/**
 * All information for the runtime of WebTester
 * not neccesarily the API repository itself.
 * 
 * This will include information such as
 * run history and current base url.
 */
export interface WebTesterMetadata {

}







export function parseMarkdownDocument(md: string): WebTesterDocument {

    return {
        overview: '',
        endpoints: [],
        metadata: {}
    }

}