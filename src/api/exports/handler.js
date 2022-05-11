const ClientError = require("../../exceptions/ClientError");

class ExportsHandler {
  constructor(service, playlistsService, validator) {
    this._service = service;
    this._playlistsService = playlistsService;
    this._validator = validator;

    this.postExportPlaylistsHandler = this.postExportPlaylistsHandler.bind(this);
  }

  async postExportPlaylistsHandler(request, h) {
    const { playlistId } = request.params;
    const { id: credentialId } = request.auth.credentials;

    try {
      this._validator.validateExportPlaylistsPayload(request.payload);

      await this._playlistsService.verifyPlaylistOwner(playlistId, credentialId);

      const message = {
        playlistId,
        targetEmail: request.payload.targetEmail,
      };

      await this._service.sendMessage("export:playlists", JSON.stringify(message));

      const response = h.response({
        status: "success",
        message: `Permintaan ekspor Playlist dengan ${playlistId} dalam antrean`,
      });
      response.code(201);
      return response;
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: "fail",
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // Server ERROR!
      const response = h.response({
        status: "error",
        message: "Maaf, terjadi kegagalan pada server kami.",
      });
      response.code(500);
      console.error(error);
      return response;
    }
  }
}

module.exports = ExportsHandler;
