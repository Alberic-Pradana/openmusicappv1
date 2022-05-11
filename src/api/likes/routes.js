const routes = (handler) => [
  {
    method: "POST",
    path: "/albums/{albumId}/likes",
    handler: handler.postAlbumLikeHandler,
  },
  {
    method: "GET",
    path: "/albums/{albumId}/likes",
    handler: handler.getAlbumLikesByIdHandler,
  },
];

module.exports = routes;
