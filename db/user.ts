async function getTasksForUsers(UserID:number) {
    const todo = await db.query('SELECT * FROM todo WHERE user_id = ?', [UserID]);
    return todo;
}