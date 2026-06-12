import type { ReactNode } from 'react'

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
  adminDashboard: string
  adminChapters: string
  adminLessons: string
  adminContent: string
  adminFiles: string
  adminBack: string
  adminLogout: string
  adminStatistics: string
  adminTotalChapters: string
  adminSideMenus: string
  adminTotalLessons: string
  adminPublished: string
  adminLoginTitle: string
  adminLoginDesc: string
  adminUsername: string
  adminPassword: string
  adminSignIn: string
  adminSigningIn: string
  adminLoginFailed: string
  adminServerError: string
  adminAdd: string
  adminEdit: string
  adminDelete: string
  adminSave: string
  adminCancel: string
  adminCreate: string
  adminView: string
  adminSource: string
  adminPub: string
  adminUnpub: string
  adminActions: string
  adminSearch: string
  adminConfirmDelete: string
  adminLoading: string
  adminBeginner: string
  adminIntermediate: string
  adminAdvanced: string
  adminTitle: string
  adminNumber: string
  adminLevel: string
  adminDescription: string
  adminContentEn: string
  adminContentBn: string
  adminCode: string
  adminChapter: string
  adminMenu: string
  adminAll: string
  adminAllMenus: string
  adminAllChapters: string
  adminNewChapter: string
  adminEditChapter: string
  adminNewLesson: string
  adminEditLesson: string
  adminEditTitle: string
  adminTitleEn: string
  adminTitleBn: string
  adminBengali: string
  adminTakeawaysBn: string
  adminSeeMore: string
  adminBackEditor: string
}

export type Language = 'en' | 'bn'
export type Theme = 'dark' | 'light'

export type { ReactNode }
