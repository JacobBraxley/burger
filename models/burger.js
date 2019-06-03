
const orm = require("../config/orm.js");

const burger = {
    list: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    add: function(burgerName, cb) {
        orm.insertOne("burgers", "burger_name", [burgerName], function(res) {
            cb(res);
        });
    },
    munch: function(burgerId, cb) {
        orm.updateOne("burgers", {devoured: true }, `id=${burgerId}`, function(res) {
            cb(res);
        });
    }
}
   
module.exports = burger;