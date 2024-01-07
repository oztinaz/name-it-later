import type { SpotifySeed } from "@/types/spotify/Seed"
import type { SpotifyTrack } from "@/types/spotify/Track"

export type SpotifyRecommendation = {
  seeds: SpotifySeed[],
  tracks: SpotifyTrack[]
}