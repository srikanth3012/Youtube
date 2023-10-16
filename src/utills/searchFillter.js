function SearchFilter(search, videoList) {
  const data = videoList?.filter((video) =>
    video?.snippet?.title?.toLowerCase().includes(search.toLowerCase())
  );

  return data;
}
export default SearchFilter;
