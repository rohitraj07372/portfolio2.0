import { useQuery } from '@tanstack/react-query';

const API_KEY = import.meta.env.VITE_YOUTUBE_API;
const BASE_URL = import.meta.env.VITE_YOUTUBE_BASE_URL;

export function useYoutubePlaylist(playlistId) {
  return useQuery({
    queryKey: ['youtubePlaylist', playlistId],
    queryFn: async () => {
      const res = await fetch(
        `${BASE_URL}/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`
      );
      const data = await res.json();
      return data.items || [];
    },
  });
}
