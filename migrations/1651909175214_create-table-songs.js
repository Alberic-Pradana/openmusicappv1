exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("albums", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
    },
    name: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    year: {
      type: "INTEGER",
      notNull: true,
    },
    created_at: {
      type: "TIMESTAMP",
      notNull: true,
    },
    updated_at: {
      type: "TIMESTAMP",
      notNull: true,
    },
    cover_url: {
      type: "TEXT",
      default: null,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("albums");
};
