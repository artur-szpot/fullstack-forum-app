users
   id
   email
   username
   password
   last_visited
   joined_on
   total_posts
roles
   id
   name
   color
permissions
   id
   name
groups
   id
   name
   publically_visible
   request_to_join

roles_permissions
   role_id
   permission_id
users_roles
   user_id
   role_id

categories
   id
   name
   order
forums
   id
   name
   order
threads
   id
   title
   sticky
   announcement
posts
   id
   title
   content
   created_by
   created_on
   total_edits
   last_edited_by
   last_edited_on
   reply_to
reaction
   id
   created_by
   reaction_type
posts_reactions
   post_id
   reaction_id

categories_forums
   category_id
   forum_id
forums_threads
   forum_id
   thread_id

categories_groups_permissions
   category_id
   group_id
   permission_id
forums_groups_permissions
   forum_id
   group_id
   permission_id

LATER:
   avatars
   other icons
OPTIONAL ADDITIONS:
   audit log
   shoutbox
