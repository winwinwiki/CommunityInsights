export class comment {
    comment_id: number
    content: string
    contentLength: number
    created_time: string
    region: string
    source_ontology: string
    topics: string
    platform_name: string
    sentiment: number
}

export class post {
    post_id: number
    comments: Array<comment>
    content: string
    contentLength: number
    created_time: string
    region: string
    source_ontology: string
    topics: string
    platform_name: string
    sentiment: number
}