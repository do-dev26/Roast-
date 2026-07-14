// Central source of truth for the 10 Entertainment engines.
// `fields` maps the raw JSON keys returned by the backend to human-readable labels,
// so ResultCard can render any engine's output without engine-specific code.

export const ENGINES = [
  {
    id: 'funny_friend',
    label: 'Funny Friend',
    tagline: 'Your AI bestie roasts you — lightly.',
    accent: 'marigold',
    icon: '😄',
    fields: {
      funny_review: 'Funny Review',
      friendly_joke: 'Friendly Joke',
      nickname: 'Your Nickname',
      funny_story: 'Funny Story',
      friend_reaction: 'Friend Reaction',
    },
  },
  {
    id: 'savage_roast',
    label: 'Savage Roast',
    tagline: 'No mercy. Just punchlines.',
    accent: 'chilli',
    icon: '🔥',
    fields: {
      light_roast: 'Light Roast',
      savage_roast: 'Savage Roast',
      roast_battle_line: 'Roast Battle Line',
      roast_meter: 'Roast Meter',
    },
  },
  {
    id: 'flirty_ai',
    label: 'Flirty AI',
    tagline: 'Charm, not cheese. (Mostly cheese.)',
    accent: 'violet',
    icon: '💫',
    fields: {
      boy_rizz_line: 'Boy Rizz',
      girl_rizz_line: 'Girl Rizz',
      pickup_lines: 'Pickup Lines',
      cute_compliments: 'Cute Compliments',
      dm_suggestion: 'DM Suggestion',
    },
  },
  {
    id: 'bollywood',
    label: 'Bollywood',
    tagline: 'Lights, camera, filmy drama.',
    accent: 'marigold',
    icon: '🎬',
    fields: {
      hero_rating: 'Hero Rating',
      villain_aura: 'Villain Aura',
      movie_title: 'Movie Title',
      bollywood_dialogue: 'Bollywood Dialogue',
    },
  },
  {
    id: 'standup_comedy',
    label: 'Stand-up Comedy',
    tagline: 'One photo, one mic, one bit.',
    accent: 'mint',
    icon: '🎤',
    fields: {
      comedy_review: 'Comedy Review',
      one_liners: 'One-Liners',
      storytelling_bit: 'Storytelling Bit',
    },
  },
  {
    id: 'meme_generator',
    label: 'Meme Generator',
    tagline: 'Instant template energy.',
    accent: 'mint',
    icon: '🖼️',
    fields: {
      meme_caption: 'Meme Caption',
      meme_template_suggestion: 'Meme Template',
      gif_caption: 'GIF Caption',
      viral_meme_idea: 'Viral Meme Idea',
    },
  },
  {
    id: 'instagram_comments',
    label: 'Instagram Comments',
    tagline: 'Comment section, simulated.',
    accent: 'violet',
    icon: '💬',
    fields: {
      cool_comments: 'Cool Comments',
      funny_comments: 'Funny Comments',
      flirty_comments: 'Flirty Comments',
      roast_comments: 'Roast Comments',
    },
  },
  {
    id: 'ai_judge',
    label: 'AI Judge',
    tagline: 'Scores you like a talent show.',
    accent: 'marigold',
    icon: '⚖️',
    fields: {
      verdict: 'Verdict',
      scores: 'Scores',
      judge_comment: "Judge's Comment",
    },
  },
  {
    id: 'challenge',
    label: 'Challenge',
    tagline: 'A dare, tailored to your photo.',
    accent: 'chilli',
    icon: '🏆',
    fields: {
      challenge_title: 'Challenge',
      challenge_description: 'Description',
      difficulty: 'Difficulty',
    },
  },
  {
    id: 'emoji_viral',
    label: 'Emoji + Viral',
    tagline: 'Told entirely in vibes.',
    accent: 'mint',
    icon: '✨',
    fields: {
      emoji_review: 'Emoji Review',
      emoji_story: 'Emoji Story',
      viral_comment: 'Viral Comment',
      viral_reel_caption: 'Reel Caption',
      youtube_shorts_hook: 'Shorts Hook',
    },
  },
];

export function getEngine(id) {
  return ENGINES.find((e) => e.id === id);
}
