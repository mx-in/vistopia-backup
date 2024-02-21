export interface Catalog {
  catalog_id: string
  catalog_title: string
}

export interface Article {
  article_id: string
  content_id: string
  catalog_id: string
  title: string
  sort_number: string
  status: string
  share_desc: string
  is_trial: string
  duration: string
  duration_str: string
  media_type: string
  media_size: string
  video_poster: string
  comment_count: string
  sample_media_key: string
  vid: string
  sample_vid: string
  card_data: string
  media_key_full_url: string
  optional_media_key_full_url: string
  share_url: string
  media_type_en: string
  content_media_type_en: string
  type: string
  content_url: string
  sample_media_full_url: string
  card_desc: string
  is_listened: string
  listen_percent: string
  listen_time: string
  is_finished: string
  is_vip_free: string
  background_img: string
  author: string
  is_vip_only: string
  share_free_count: string
  is_listen: string
}

export interface Data {
  content: {
    content_id: string
    title: string
    small_background_img: string
    background_img: string
    catalog_type: string
    type: string
    complete_class_price: string
    promotion_price: string
    promotion_desc: string
    is_promotion: string
    media_type: string
    is_vip_free: string
    is_vip_only: string
    avatar: string
    text_desc: string
    media_type_en: string
    author: string
    is_purchased: string
    is_subscribed: string
    vip_type: string
    is_vip_expired: string
    old_vip_type: string
    is_limited_free: string
  }
  catalogs: Catalog[]
  articles: Article[]
}

export interface Response {
  status: string
  data: Data
}
