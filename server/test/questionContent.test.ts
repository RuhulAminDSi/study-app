import { describe, it, expect } from "vitest";
import { block, checkQuestionShape, contentHash, text, type QuestionWrite } from "../src/services/questionContent";

const mcq = (over: Partial<QuestionWrite> = {}) => ({
  type: "mcq" as const,
  difficulty: 2,
  stem_en: "Which layer does IP belong to?",
  model_answer_en: null,
  options: [
    { text_en: "Transport", text_bn: null, is_correct: false },
    { text_en: "Network", text_bn: null, is_correct: true },
  ],
  ...over,
});

describe("text / block", () => {
  it("trims text and turns empty values into null", () => {
    expect(text("  hi  ")).toBe("hi");
    expect(text("   ")).toBeNull();
    expect(text(undefined)).toBeNull();
    expect(text(2)).toBe("2");
  });

  it("keeps code indentation but normalises line endings and trailing space", () => {
    expect(block("  int x;\r\n  return x;  \n")).toBe("  int x;\n  return x;");
    expect(block("\n\n")).toBeNull();
  });
});

describe("contentHash", () => {
  it("ignores case and spacing differences", () => {
    expect(contentHash("What  is IP?", ["A", "b"])).toBe(contentHash("what is ip?", ["a", "B"]));
  });

  it("changes when an option changes", () => {
    expect(contentHash("Q", ["A", "B"])).not.toBe(contentHash("Q", ["A", "C"]));
  });
});

describe("checkQuestionShape", () => {
  it("accepts a valid MCQ", () => {
    expect(checkQuestionShape(mcq())).toEqual({});
  });

  it("requires 2-5 options with English text", () => {
    expect(checkQuestionShape(mcq({ options: [{ text_en: "Only one", text_bn: null, is_correct: true }] }))).toEqual({ options: "options_count" });
    expect(checkQuestionShape(mcq({ options: [{ text_en: "", text_bn: "x", is_correct: true }, { text_en: "B", text_bn: null, is_correct: false }] }))).toEqual({ options: "options_count" });
  });

  it("requires exactly one correct option", () => {
    const none = mcq({ options: [{ text_en: "A", text_bn: null, is_correct: false }, { text_en: "B", text_bn: null, is_correct: false }] });
    const two = mcq({ options: [{ text_en: "A", text_bn: null, is_correct: true }, { text_en: "B", text_bn: null, is_correct: true }] });
    expect(checkQuestionShape(none)).toEqual({ correct: "correct_invalid" });
    expect(checkQuestionShape(two)).toEqual({ correct: "correct_invalid" });
  });

  it("requires a model answer and no options for written questions", () => {
    expect(checkQuestionShape(mcq({ type: "written", options: [] }))).toEqual({ model_answer_en: "required" });
    expect(checkQuestionShape(mcq({ type: "written", model_answer_en: "Answer" }))).toEqual({ options: "options_not_allowed" });
  });

  it("flags type, difficulty and empty stem", () => {
    expect(checkQuestionShape(mcq({ type: "essay" as never, difficulty: 7, stem_en: "" }))).toEqual({
      type: "type_invalid",
      difficulty: "difficulty_invalid",
      stem_en: "required",
    });
  });
});
