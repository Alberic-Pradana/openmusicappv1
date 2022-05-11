const routes = (handler) => [
  {
    method: "POST",
    path: "/export/notes",
    handler: handler.postExportPlaylistsHandler,
    options: {
      auth: "openmusicv1_jwt",
    },
  },
];

module.exports = routes;
