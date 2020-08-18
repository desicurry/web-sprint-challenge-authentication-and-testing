
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "Quame", password: "password1" },
        { id: 2, username: "Destinee", password: "password2" },
        { id: 3, username: "Tyler", password: "password3" },
      ]);
    });
};
