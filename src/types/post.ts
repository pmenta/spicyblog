export interface IPost {
 id: string,
 owner_id: string,
 parent_id: number | null,
 slug: string,
 title: string,
 status: string,
 source_url: string,
 created_at: Date,
 updated_at: Date,
 published_at: Date,
 deleted_at: Date | null,
 owner_username: string,
 tabcoins: number,
 children_deep_count: number
} 