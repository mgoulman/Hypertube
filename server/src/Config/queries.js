const queries = {
    SELECT : {
        GetUserByEmail:     "SELECT users.* FROM users WHERE users.email = ?",
        GetUserById:        "SELECT * FROM users  WHERE users.id = ?",
        GetUserByUsername:  "SELECT users.* FROM users WHERE users.username = ?",
        GetUserByToken:     "SELECT * FROM users WHERE verif_token = ?",
        CheckEditUsername:  "SELECT username from users where username = ? AND id != ?",
        CheckEditEmail:     "SELECT email from users where email = ? AND id != ?",
    },
    INSERT : {
        AddImage:           'INSERT INTO images (user_id, path,isProfilePic) VALUES (?, ?, ?)',
        AddUser:            'INSERT INTO users (lastname, firstname, username, email, password,image) VALUES (?, ?, ?, ?, ?,?)',
    },
    UPDATE : {
        Update:             'UPDATE users SET name = ?, email = ?, sex = ? WHERE id = ?',
        UpdateToken:        'UPDATE users SET verif_token = ? WHERE email = ?',
        ResetPassword:      'UPDATE users SET password = ? WHERE verif_token = ?',
        Confirmed:          'UPDATE users SET confirmed = 1 WHERE email = ?',
        notConfirmed:       'UPDATE users SET confirmed = 0 WHERE email = ?',
        UpdateInfo:         "UPDATE users SET gender = ?, sexOrient = ?, birthday = ?, age = ?, bio = ? WHERE id = ?",
        UpdateProfile:      "UPDATE users SET firstname = ?, lastname = ?, username = ?, email = ?, langue = ? WHERE id = ?",
        UpdatePassword:     "UPDATE users SET password = ? WHERE id = ?",
        setProfilePic:      'UPDATE images SET IsProfilePic = 1 WHERE id = ? && user_id = ?',
        resetProfilePic :   'UPDATE images SET isProfilePic = 0 WHERE user_id = ?',
        setFirstProPic :    'UPDATE  images SET isProfilePic = 1 WHERE user_id = ? ORDER BY id ASC LIMIT 1',
    },
    DELETE : {
        delImages :         'DELETE FROM `images` WHERE id = ? && user_id = ?',
    },
}

module.exports = queries;