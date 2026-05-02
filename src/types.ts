export interface Lesson {
  id: string
  title: string
  titleBn?: string
  content: string
  contentBn?: string
  code?: string
  codeBn?: string
  takeaways: string[]
  takeawaysBn?: string[]
  level: string
}

export interface Module {
  title: string
  titleBn?: string
  level: string
  lessons: Lesson[]
}

export interface Translations {
  modules: string
  lesson: string
  previous: string
  next: string
  keyTakeaways: string
  keyFormula: string
  copy: string
  copied: string
  progress: string
  search: string
  darkMode: string
  lightMode: string
  noResults: string
  studyHub: string
  previousModule: string
  nextModule: string
  lessons: string
  goToBottom: string
  goToTop: string
}
