export default class Comment {
  constructor() {
    Object.assign(this, {
      kind: "t1",
      data: {
        total_awards_received: 0,
        approved_at_utc: null,
        ups: 0,
        awarders: [],
        mod_reason_by: null,
        banned_by: null,
        author_flair_type: "text",
        removal_reason: null,
        link_id: null,
        author_flair_template_id: null,
        likes: null,
        replies: {
          kind: "Listing",
          data: {
            modhash: "",
            dist: null,
            children: [],
            after: null,
            before: null
          }
        },
        user_reports: [],
        saved: false,
        id: null,
        banned_at_utc: null,
        mod_reason_title: null,
        gilded: 0,
        archived: false,
        no_follow: false,
        author: "anon",
        can_mod_post: false,
        send_replies: true,
        parent_id: null,
        score: 0,
        author_fullname: null,
        report_reasons: null,
        approved_by: null,
        all_awardings: [],
        subreddit_id: "null",
        body: "",
        edited: false,
        author_flair_css_class: null,
        is_submitter: false,
        downs: 0,
        author_flair_richtext: [],
        author_patreon_flair: false,
        body_html: "",
        gildings: {},
        collapsed_reason: null,
        associated_award: null,
        stickied: false,
        author_premium: false,
        subreddit_type: "public",
        can_gild: true,
        subreddit: "greentext",
        author_flair_text_color: null,
        score_hidden: false,
        permalink: null,
        num_reports: null,
        locked: false,
        name: null,
        created: Date.now(),
        author_flair_text: null,
        collapsed: false,
        created_utc: Date.UTC(),
        subreddit_name_prefixed: "",
        controversiality: 0,
        depth: 1,
        author_flair_background_color: null,
        collapsed_because_crowd_control: null,
        mod_reports: [],
        mod_note: null,
        distinguished: null
      }
    });
  }
}
