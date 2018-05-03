module.exports = (Bot) => {

    //var q = "UPDATE bot_data SET (amount, user1, user2, user1roll, user2roll, starter) VALUES (?, ?, ?, ?, ?)"
    var q = "DROP TABLE bot_data";
    var q2 = "CREATE TABLE bot_data (amount VARCHAR(36), user1 VARCHAR(36) UNIQUE, user2 VARCHAR(36) UNIQUE, user1roll INTEGER(6), user2roll INTEGER(6), starter VARCHAR(36) UNIQUE)"
    Bot.con.query(q, function(e,r,f) {
        if(e) {
            console.log("DROP Query : " + e);
        }
        console.log("[DATABASE TABLE DELETED]")
        Bot.con.query(q2, function(e,r,f) {
            if(e) {
                console.log("CREATE Query : " + e);
            }
            console.log("[DATABASE RECREATED]")
        })
    })
};