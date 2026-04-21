// Auto-generated content manifest for Ap Computer Science Principles
// Question targets are 2-3x competition floor

export type ActivityType =
  | "multiple_choice" | "essay" | "cloze_deletion" | "numeric_input"
  | "whiteboard" | "reading_passage" | "audio_mcq" | "voice_explanation"
  | "flashcard_deck" | "fill_in_blank" | "data_interpretation" | "diagram_label"
  | "scenario_based" | "coding_challenge" | "case_study" | "calculation"
  | "simulation" | "gamified_quiz" | "portfolio_review" | "visual_mcq"
  | "branching_scenario" | "heading_matching" | "project_based" | "story_based"
  | "sql_challenge" | "rubric_assessment" | "peer_review" | "timeline_ordering";

export type ExamCategory =
  | "admissions" | "language_cert" | "professional" | "k12_national"
  | "trade" | "creative" | "productivity" | "language_skills" | "kids";

export interface TopicManifest {
  id: string;
  domain: string;
  title: string;
  icon: string;
  color: string;
  questionTarget: number;
  activityTypes: ActivityType[];
}

export interface ContentManifest {
  examId: string;
  examName: string;
  totalQuestions: number;
  category: ExamCategory;
  topics: TopicManifest[];
}

export const CONTENT_MANIFEST: ContentManifest = {
  examId: "ap-computer-science-principles",
  examName: "Ap Computer Science Principles",
  totalQuestions: 3000,
  category: "k12_national",
  topics: [
  {
    id: "programming",
    domain: "programming",
    title: "Programming Fundamentals",
    icon: "💻",
    color: "#DC2626",
    questionTarget: 900,
    activityTypes: ["multiple_choice", "coding_challenge"],
  },
  {
    id: "data-structures",
    domain: "data-structures",
    title: "Data Structures & Algorithms",
    icon: "🔢",
    color: "#7C3AED",
    questionTarget: 900,
    activityTypes: ["multiple_choice", "coding_challenge", "whiteboard"],
  },
  {
    id: "web-dev",
    domain: "web-dev",
    title: "Web Development",
    icon: "🌐",
    color: "#059669",
    questionTarget: 700,
    activityTypes: ["multiple_choice", "coding_challenge"],
  },
  {
    id: "databases",
    domain: "databases",
    title: "Databases & SQL",
    icon: "🗄️",
    color: "#D97706",
    questionTarget: 500,
    activityTypes: ["multiple_choice", "sql_challenge"],
  }
  ],
};
