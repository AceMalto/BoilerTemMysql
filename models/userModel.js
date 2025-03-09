const db = require('../config/DBConn')

class User {
    static async getAllUser(){
        const [rows] = await db.query("select * from users")
        return rows
    }
    static async getUserById(id){
        const [rows] = await query.db("select * from users where id = ?", [id])
        return rows[0]
    }
    static async createUser(name, email, password) {
        const [result] = await db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email, password]);
        return result.insertId;
    }

    static async updateUser(id, name, email, password) {
      await db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, id]);
    }

    static async deleteUser(id) {
      await db.query("DELETE FROM users WHERE id = ?", [id]);
    }
}

module.exports = User