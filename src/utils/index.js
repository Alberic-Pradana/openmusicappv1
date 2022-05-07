const mapDBToModel = ({ album_id, ...restOfData }) => ({
  ...restOfData,
  albumId: album_id,
});

module.exports = {
  mapDBToModel,
};
