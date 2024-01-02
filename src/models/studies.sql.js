// export const confirmStudies =
//     "SELECT EXISTS(SELECT 1 FROM restaurant WHERE register_number = ?) as isExistStore;"

export const insertStudiesSql =
    "INSERT INTO study_group (user_id, title, content, period, start_date, total_num, in_num, status, place, contact, contact_url, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"

export const insertStudyTag =
    "INSERT INTO study_group_tag (group_id, tag_id) VALUES (?, ?)"

export const insertUserinStudy =
    "INSERT INTO study_group_tag (study_id, user_id, status) VALUES (?, ?, ?)"

export const selectStudies =
    "select * from study_group Join user on study_group.user_id = user.id where study_group.id = ?;"

export const selectStudyTag =
    "SELECT * FROM study_tag JOIN study_group_tag as sgt on study_tag.id = sgt.tag_id where sgt.group_id = ?;"

export const selectStudyLikeCnt =
    "SELECT COUNT(l.study_group_id) AS study_count, study_group_id FROM study_group AS s JOIN study_group_like AS l ON l.study_group_id = s.id WHERE study_group_id=?;"

export const selectStudyKeword =
    "SELECT * FROM study_group WHERE content LIKE '%?%' OR title LIKE '%?%' ORDER BY study_group.created_at DESC;"

export const selectStudyOrder =
    "select * from study_group ORDER BY created_at DESC;"
