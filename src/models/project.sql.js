export const postProjectSql = "INSERT INTO project_group (user_id, name, title, content, status, period, start_date, created_at, contact, contact_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

export const connectProjectTag = "INSERT INTO project_group_tag(tag_id, project_id) VALUES (?, ?)";

export const getTagToProjectID =
  "SELECT pgt.tag_id, pgt.project_id, pg.id, pt.tag_name " +
  "FROM project_group_tag pgt " +
  "JOIN project_tag pt ON pgt.tag_id = pt.id " +
  "JOIN project_group pg ON pgt.project_id = pg.id " +
  "WHERE pg.id = ?";

export const connectProjectStack = "INSERT INTO project_group_stack(total_num, in_num, project_id, stack_id) VALUES (?, ?, ?, ?)";

export const getStackToProjectID = 
"SELECT pgs.stack_id, pgs.project_id, pg.id, ps.name " +
"FROM project_group_stack pgs " +
"JOIN project_stack ps ON pgs.stack_id = ps.id " +
"JOIN project_group pg ON pgs.project_id = pg.id " +
"WHERE pg.id = ?";