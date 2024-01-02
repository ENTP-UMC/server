export const insertHobbySql = "INSERT INTO hobby_group (title, content ,total_num,in_num,status,start_date,end_date,created_at,user_id)VALUES (?,?,?,?,?,?,?,?,?);"
export const insertHobbyTagSql="INSERT INTO hobby_group_tag (tag_id,hobby_id) values(?,?);"

export const HobbyRecent="select * from hobby_group ORDER BY created_at DESC;"

export const HobbyLikes="SELECT COUNT(l.hobby_group_id) AS post_count, h.id, h.title, h.content, h.total_num, h.in_num, h.status, h.start_date, h.end_date, h.created_at, h.updated_at, h.user_id FROM hobby_group AS h JOIN hobby_group_like AS l ON l.hobby_group_id = h.id GROUP BY h.id ORDER BY post_count DESC;"

export const HobbySearch = "SELECT * FROM hobby_group WHERE title LIKE ? OR content LIKE ?;";

export const insertScrapSql="INSERT INTO hobby_group_like(user_id,hobby_group_id) values(?,?);"